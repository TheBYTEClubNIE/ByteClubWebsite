require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const admin = require("firebase-admin");
const fs = require("fs");

const admin = require("firebase-admin");

// Parse Firebase credentials from environment variable
const firebaseCredentials = JSON.parse(process.env.FIREBASE_CREDENTIALS);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials),
});

const db = admin.firestore();
module.exports = db;

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
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
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
            department,
            semester,
            section,
            college,
            problemStatement,
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
            department,
            semester,
            section,
            college,
            problemStatement,
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
        res.status(500).json({
            error: "Upload failed",
            message: error.message,
        });
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

// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
