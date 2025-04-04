require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const cors = require("cors");
const Submission = require("./models/submission");


const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // Allow all origins

// Ensure all required environment variables are set
if (!process.env.MONGO_URI || !process.env.CLOUD_NAME || !process.env.API_KEY || !process.env.API_SECRET) {
  console.error("Missing environment variables. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

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
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Upload PPT and Store Team Info in MongoDB
app.post("/upload", upload.single("ppt"), async (req, res) => { // Keep "ppt" as in frontend
    try {
      const { members, department, semester, section, college, problemStatement } = req.body;
  
      if (!members || !req.file) {
        return res.status(400).json({ error: "Missing data or file" });
      }
  
      const parsedMembers = JSON.parse(members); // Convert back to array
  
      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { resource_type: "raw", folder: "submissions" },
          (error, result) => (error ? reject(error) : resolve(result))
        ).end(req.file.buffer);
      });
  
      // Save to MongoDB
      const newSubmission = new Submission({
        members: parsedMembers,
        department,
        semester,
        section,
        college,
        problemStatement,
        pptUrl: uploadResult.secure_url,
      });
  
      await newSubmission.save();
      res.json({ message: "Upload successful", data: newSubmission });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Upload failed", message: error.message });
    }
  });  

// Get All Submissions
app.get("/submissions", async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
