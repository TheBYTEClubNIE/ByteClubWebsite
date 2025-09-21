require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const fs = require("fs");

const admin = require("firebase-admin");

if (!admin.apps.length) {
  const base64 = process.env.FIREBASE_CREDENTIALS;

  if (!base64) {
    throw new Error("Missing FIREBASE_CREDENTIALS environment variable");
  }

  const serviceAccount = JSON.parse(
    Buffer.from(base64, "base64").toString("utf8")
  );

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore(); // Firestore Database

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // Allow all origins

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Configure Multer for File Uploads (Memory Storage)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware for CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Upload PPT and Store Team Info in Firestore
app.post("/upload", upload.single("ppt"), async (req, res) => {
  try {
    const {
      members,
      teamname,
      department,
      semester,
      section,
      college,
      problemStatement,
      location,
    } = req.body;

    if (!members || !req.file) {
      return res.status(400).json({ error: "Missing data or file" });
    }

    const parsedMembers = JSON.parse(members); // Convert back to array

    // Upload PPT to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "raw", folder: "submissions" },
          (error, result) => (error ? reject(error) : resolve(result))
        )
        .end(req.file.buffer);
    });

    // Save to Firestore
    const submissionRef = db.collection("submissions").doc(); // Generate a new document
    const submissionData = {
      members: parsedMembers,
      teamname,
      department,
      semester,
      section,
      college,
      problemStatement,
      location,
      pptUrl: uploadResult.secure_url,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await submissionRef.set(submissionData);

    res.json({
      message: "Upload successful",
      id: submissionRef.id,
      data: submissionData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed", message: error.message });
  }
});

// Get All Submissions from Firestore
app.get("/submissions", async (req, res) => {
  try {
    const submissionsSnapshot = await db
      .collection("submissions")
      .orderBy("createdAt", "desc")
      .get();
    const submissions = submissionsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(submissions);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

app.get("/teams", async (req, res) => {
  try {
    const teamsSnapshot = await db
      .collection("submissions")
      .orderBy("createdAt", "desc")
      .get();
    const teams = teamsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ error: "Failed to fetch teams" });
  }
});

//byte-escape event route
app.post("/byte-escape", async (req, res) => {
  try {
    const { name, usn, email, mobileNumber, branch, section } = req.body;

    if (!name || !usn || !email || !mobileNumber || !branch || !section) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const regRef = db.collection("byte-escape-registrations").doc();
    const regData = {
      name,
      usn,
      email,
      mobileNumber,
      branch,
      section,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await regRef.set(regData);

    res
      .status(200)
      .json({
        message: "Registration successful",
        id: regRef.id,
        data: regData,
      });
  } catch (error) {
    console.error("Registration Error:", error);
    res
      .status(500)
      .json({ error: "Failed to register", message: error.message });
  }
});

const SELF_URL = "https://byteclubwebsite.onrender.com"; // Replace with your actual Render backend URL

function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function keepAlive() {
  try {
    const res = await fetch(SELF_URL);
    console.log(
      `[KEEP ALIVE] Pinged successfully at ${new Date().toISOString()}`
    );
  } catch (err) {
    console.error("[KEEP ALIVE] Failed to ping:", err.message);
  }

  const nextPing = randomInterval(10, 15) * 60 * 1000; // Convert minutes to ms
  setTimeout(keepAlive, nextPing);
}

// Initial delay before starting keep-alive loop
setTimeout(keepAlive, randomInterval(10, 15) * 60 * 1000);

// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
