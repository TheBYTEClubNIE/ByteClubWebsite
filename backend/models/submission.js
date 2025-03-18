const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true }
});

const submissionSchema = new mongoose.Schema({
  members: { type: [memberSchema], required: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  section: { type: String, required: true },
  college: { type: String, required: true },
  problemStatement: { type: String, required: true },
  pptFile: { type: String } // Store the Cloudinary URL or file path
}, { timestamps: true });

module.exports = mongoose.model("Submission", submissionSchema);
