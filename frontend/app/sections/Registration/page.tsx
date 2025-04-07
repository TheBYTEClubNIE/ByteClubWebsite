"use client";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const RegistrationForm = () => {
    const [teamSize, setTeamSize] = useState(2);
    const [formData, setFormData] = useState({
        members: Array(2).fill({ name: "", usn: "" }),
        teamname: "",
        department: "Computer Science and Engineering",
        semester: "1",
        section: "A",
        college: "",
        problemStatement: "",
        location: "",
        pptFile: null,
    });

    const [showModal, setShowModal] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState(false); // NEW

    const handleTeamSizeChange = (size: number) => {
        setTeamSize(size);
        setFormData((prev) => ({
            ...prev,
            members: Array(size).fill({ name: "", usn: "" }),
        }));
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        index?: number
    ) => {
        const { name, value } = e.target;

        if (index !== undefined) {
            setFormData((prev) => {
                const updatedMembers = [...prev.members];
                updatedMembers[index] = {
                    ...updatedMembers[index],
                    [name]: value,
                };
                return { ...prev, members: updatedMembers };
            });
        } else {
            if (
                e.target instanceof HTMLInputElement &&
                e.target.type === "file" &&
                e.target.files
            ) {
                const file = e.target.files[0];
                setFormData((prev) => ({
                    ...prev,
                    [name]: file,
                }));
            } else {
                setFormData((prev) => ({
                    ...prev,
                    [name]: value,
                }));
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
        setUploading(true);
        setUploadSuccess(false);
        setUploadError(false); // Reset error

        const formDataToSend = new FormData();
        formDataToSend.append("members", JSON.stringify(formData.members));
        formDataToSend.append("teamname", formData.teamname);
        formDataToSend.append("department", formData.department);
        formDataToSend.append("semester", formData.semester);
        formDataToSend.append("section", formData.section);
        formDataToSend.append("college", formData.college);
        formDataToSend.append("problemStatement", formData.problemStatement);
        formDataToSend.append("location", formData.location);

        if (formData.pptFile) {
            formDataToSend.append("ppt", formData.pptFile);
        }

        try {
            const response = await fetch(
                "https://byteclubwebsite.onrender.com/upload",
                {
                    method: "POST",
                    body: formDataToSend,
                }
            );

            if (!response.ok) {
                throw new Error("Failed to submit data");
            }

            setUploading(false);
            setUploadSuccess(true);
        } catch (error) {
            console.error("Error:", error);
            setUploading(false);
            setUploadError(true); // Set error flag
        }
    };

    const UploadModal = () => (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl text-white w-80 text-center">
                {uploading ? (
                    <>
                        <FaSpinner className="animate-spin text-4xl mx-auto text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold">Uploading PPT...</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Please wait while we upload your file.
                        </p>
                    </>
                ) : uploadSuccess ? (
                    <>
                        <h3 className="text-2xl font-bold text-green-400 mb-2">
                            ✅ Upload Successful
                        </h3>
                        <p className="text-sm text-gray-300">
                            Sit back and relax. We will notify you about the slots for your presentation.
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </>
                ) : uploadError ? (
                    <>
                        <h3 className="text-2xl font-bold text-red-400 mb-2">
                            ❌ Something went wrong
                        </h3>
                        <p className="text-sm text-gray-300">
                            Please try again after 5 minutes. <br />
                            If you are still having trouble, contact any of the leads. <br />
                            We regret the inconvenience.
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </>
                ) : null}
            </div>
        </div>
    );

    return (
        <>
            {showModal && <UploadModal />}
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
                            📥 Download PPT Template
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

                        <div>
                            <label className="block text-gray-300 font-semibold">
                                Team Name
                            </label>
                            <input
                                type="text"
                                name="teamname"
                                value={formData.teamname}
                                placeholder="Enter Team Name"
                                onChange={handleChange}
                                className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

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
                                <option>Artificial Intelligence & Machine Learning</option>
                                <option>Civil Engineering</option>
                                <option>Mechanical Engineering</option>
                                <option>Electronics and Communication Engineering</option>
                                <option>Electrical Engineering</option>
                                <option>Others</option>
                            </select>
                        </div>

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

                        <div>
                            <label className="block text-gray-300 font-semibold">
                                Section
                            </label>
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

                        <div>
                            <label className="block text-gray-300 font-semibold">
                                Preffered Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="North Campus"
                                className="w-full mt-2 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

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
                                    Uploaded: {(formData.pptFile as File).name}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
