const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    usn: { type: String, required: true },
    email: { type: String, required: true },
    semester: { type: String, required: true },
    branch: { type: String, required: true },
    section: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FormData", formDataSchema);
