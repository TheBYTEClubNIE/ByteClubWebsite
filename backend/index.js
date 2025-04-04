require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const admin = require("firebase-admin");

// --- Firebase Admin Initialization ---
const credentialsBase64 = process.env.FIREBASE_CREDENTIALS_BASE64;
if (!credentialsBase64) {
  throw new Error("Missing FIREBASE_CREDENTIALS_BASE64");
}

const firebaseCredentials = JSON.parse(
  Buffer.from(credentialsBase64, "base64").toString("utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials),
});
const db = admin.firestore();

// --- Express App ---
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

// --- Cloudinary Config ---
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// --- Multer Setup ---
const storage = multer.memoryStorage();
const upload = multer({ storage });

// --- Upload Endpoint ---
app.post("/upload", upload.single("ppt"), async (req, res) => {
  try {
    const {
      members,
      department,
      semester,
      section,
      college,
      problemStatement,
    } = req.body;

    if (!members || !req.file) {
      return res.status(400).json({ error: "Missing data or file" });
    }

    const parsedMembers = JSON.parse(members);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "raw", folder: "submissions" },
          (error, result) => (error ? reject(error) : resolve(result))
        )
        .end(req.file.buffer);
    });

    const submissionData = {
      members: parsedMembers,
      department,
      semester,
      section,
      college,
      problemStatement,
      pptUrl: uploadResult.secure_url,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const submissionRef = db.collection("submissions").doc();
    await submissionRef.set(submissionData);

    res.json({ message: "Upload successful", id: submissionRef.id, data: submissionData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Upload failed", message: error.message });
  }
});

// --- Get All Submissions ---
app.get("/submissions", async (req, res) => {
  try {
    const snapshot = await db.collection("submissions").orderBy("createdAt", "desc").get();
    const submissions = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(submissions);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

// --- Start Server ---
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
