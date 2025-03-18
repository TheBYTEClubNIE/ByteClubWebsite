"use client";
import React, { useState } from "react";
const RegistrationForm = () => {
  const [teamSize, setTeamSize] = useState(2);
  const [formData, setFormData] = useState({
    members: Array(2).fill({ name: "", usn: "" }),
    department: "Computer Science and Engineering",
    semester: "1",
    section: "A",
    college: "",
    problemStatement: "",
    pptFile: null,
  });

  const [, setIsModalOpen] = useState(false);
  const [, setSubmitted] = useState(false);

  // Handle team size change
  const handleTeamSizeChange = (size) => {
    setTeamSize(size);
    setFormData((prev) => ({
      ...prev,
      members: Array(size).fill({ name: "", usn: "" }),
    }));
  };

  // Handle form field change
  const handleChange = (e, index = null) => {
    const { name, value, files } = e.target;

    if (index !== null) {
      // Updating specific member's name or USN
      setFormData((prev) => {
        const updatedMembers = [...prev.members];
        updatedMembers[index] = { ...updatedMembers[index], [name]: value };
        return { ...prev, members: updatedMembers };
      });
    } else {
      // Updating other fields
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("members", JSON.stringify(formData.members));
    formDataToSend.append("department", formData.department);
    formDataToSend.append("semester", formData.semester);
    formDataToSend.append("section", formData.section);
    formDataToSend.append("college", formData.college);
    formDataToSend.append("problemStatement", formData.problemStatement);
    
    if (formData.pptFile) {
      formDataToSend.append("ppt", formData.pptFile);  // Ensure it matches the backend
    }

    try {
      const response = await fetch("http://localhost:5050/upload", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting. Please try again.");
    }
  };


  const confirmSubmission = () => {
    setSubmitted(true);
    setIsModalOpen(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Register for the Event</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Team Size Selection */}
          <div>
            <label className="block text-gray-700 font-semibold">Team Size</label>
            <div className="flex space-x-2 mt-1">
              {[2, 3, 4].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleTeamSizeChange(size)}
                  className={`px-4 py-2 rounded-md ${
                    teamSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Member Fields */}
          {formData.members.map((member, index) => (
            <div key={index} className="border p-3 rounded-md bg-gray-50">
              <h3 className="text-lg font-semibold">Member {index + 1}</h3>
              <div className="mt-2">
                <label className="block text-gray-700 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={member.name}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block text-gray-700 font-semibold">USN</label>
                <input
                  type="text"
                  name="usn"
                  value={member.usn}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>
          ))}

          {/* Department Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Computer Science and Engineering</option>
              <option>Information Science and Engineering</option>
              <option>Artificial Intelligence & Machine Learning</option>
              <option>Civil Engineering</option>
              <option>Mechanical Engineering</option>
              <option>Electronics and Communication Engineering</option>
              <option>Electrical Engineering</option>
              <option>Others</option>
            </select>
          </div>

          {/* Semester Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold">Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem}>{sem}</option>
              ))}
            </select>
          </div>

          {/* Section Dropdown */}
          <div>
            <label className="block text-gray-700 font-semibold">Section</label>
            <select
              name="section"
              value={formData.section}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {["A", "B", "C", "D"].map((sec) => (
                <option key={sec}>{sec}</option>
              ))}
            </select>
          </div>

          {/* College Name */}
          <div>
            <label className="block text-gray-700 font-semibold">College</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Problem Statement Number */}
          <div>
            <label className="block text-gray-700 font-semibold">Problem Statement Number</label>
            <input
              type="text"
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* PPT Upload */}
          <div>
            <label className="block text-gray-700 font-semibold">Upload PPT</label>
            <input
              type="file"
              name="pptFile"
              accept=".ppt,.pptx"
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {formData.pptFile && <p className="text-sm text-gray-600 mt-1">Uploaded: {formData.pptFile.name}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
