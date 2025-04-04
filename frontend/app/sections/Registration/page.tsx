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
                updatedMembers[index] = {
                    ...updatedMembers[index],
                    [name]: value,
                };
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
            formDataToSend.append("ppt", formData.pptFile); // Ensure it matches the backend
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800  p-4 text-white">
            <div className="bg-gray-950 p-8 rounded-lg shadow-xl w-full max-w-lg border border-gray-700">
                <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                    Register for the Event
                </h2>

                <div className="mb-6 text-center">
                    <a
                        href="/templates/template_beyond_byte.pptx"
                        download
                        className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-md shadow-md hover:scale-105 transform transition duration-300"
                    >
                        📥 Download Template PPT
                    </a>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Team Size Selection */}
                    <div>
                        <label className="block text-gray-300 font-semibold">
                            Team Size
                        </label>
                        <div className="flex space-x-3 mt-2">
                            {[2, 3, 4].map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => handleTeamSizeChange(size)}
                                    className={`px-5 py-2 rounded-md font-bold transition-all ${
                                        teamSize === size
                                            ? "bg-blue-500 text-white shadow-lg"
                                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Member Fields */}
                    {formData.members.map((member, index) => (
                        <div
                            key={index}
                            className="border border-gray-700 p-4 rounded-md bg-gray-900"
                        >
                            <h3 className="text-lg font-bold text-blue-400">
                                Member {index + 1}
                            </h3>
                            <div className="mt-3">
                                <label className="block text-gray-400 font-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={member.name}
                                    placeholder="Enter Name"
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mt-3">
                                <label className="block text-gray-400 font-semibold">
                                    USN
                                </label>
                                <input
                                    type="text"
                                    name="usn"
                                    placeholder="Enter College USN"
                                    value={member.usn}
                                    onChange={(e) => handleChange(e, index)}
                                    className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </div>
                    ))}

                    {/* Department Dropdown */}
                    <div>
                        <label className="block text-gray-300 font-semibold">
                            Department
                        </label>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Computer Science and Engineering</option>
                            <option>Information Science and Engineering</option>
                            <option>
                                Artificial Intelligence & Machine Learning
                            </option>
                            <option>Civil Engineering</option>
                            <option>Mechanical Engineering</option>
                            <option>
                                Electronics and Communication Engineering
                            </option>
                            <option>Electrical Engineering</option>
                            <option>Others</option>
                        </select>
                    </div>

                    {/* Semester Dropdown */}
                    <div>
                        <label className="block text-gray-300 font-semibold">
                            Semester
                        </label>
                        <select
                            name="semester"
                            value={formData.semester}
                            onChange={handleChange}
                            className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                <option key={sem}>{sem}</option>
                            ))}
                        </select>
                    </div>

                    {/* Section Dropdown */}
                    <div>
                        <label className="block text-gray-300 font-semibold">
                            Section
                        </label>{" "}
                        <select
                            name="section"
                            value={formData.section}
                            onChange={handleChange}
                            className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                        >
                            {["A", "B", "C", "D"].map((sec) => (
                                <option key={sec}>{sec}</option>
                            ))}
                        </select>
                    </div>

                    {/* College Name */}
                    <div>
                        <label className="block text-gray-300 font-semibold">
                            College
                        </label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            placeholder="Enter College Name"
                            onChange={handleChange}
                            className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Problem Statement Number */}
                    <div>
                        <label className="block text-gray-300 font-semibold">
                            Problem Statement Number
                        </label>
                        <input
                            type="text"
                            name="problemStatement"
                            value={formData.problemStatement}
                            onChange={handleChange}
                            placeholder="Enter Problem Number"
                            className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* PPT Upload */}
                    <div>
                        <label className="block text-gray-300 font-semibold">
                            Upload PPT
                        </label>
                        <input
                            type="file"
                            name="pptFile"
                            accept=".ppt,.pptx"
                            onChange={handleChange}
                            className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {formData.pptFile && (
                            <p className="text-sm text-gray-600 mt-1">
                                Uploaded: {formData.pptFile.name}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
