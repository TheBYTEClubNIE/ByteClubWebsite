"use client";
import "./Form.scss";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaGamepad,
  FaUserSecret,
  FaUsers,
  FaGlassCheers,
} from "react-icons/fa";
import NoBgLogo from "../../public/NoBgLogo.png";

interface FormData {
  username: string;
  usn: string;
  email: string;
  semester: string;
  branch: string;
  section: string;
}

const SingleStepForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({ mode: "onChange" });
  const semester = watch("semester");

  const [branchOptions, setBranchOptions] = useState([
    { value: "CSE", label: "Computer Science & Engineering" },
    { value: "ISE", label: "Information Science & Engineering" },
    { value: "AIML", label: "Artificial Intelligence & Machine Learning" },
  ]);

  const [sectionOptions, setSectionOptions] = useState([
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
  ]);

  const handleSemesterChange = (selectedSemester: string) => {
    if (selectedSemester === "1") {
      setBranchOptions([
        { value: "CSE", label: "Computer Science & Engineering" },
        { value: "ISE", label: "Information Science & Engineering" },

        { value: "AIML", label: "Artificial Intelligence & Machine Learning" },
      ]);
    } else {
      setBranchOptions([
        { value: "CSE", label: "Computer Science & Engineering" },
        { value: "ISE", label: "Information Science & Engineering" },
        { value: "AIML", label: "Artificial Intelligence & Machine Learning" },
      ]);
    }
  };

  const handleBranchChange = (selectedBranch: string) => {
    if (
      (semester === "1" || semester === "3" || semester === "5") &&
      selectedBranch === "AIML"
    ) {
      setSectionOptions([
        { value: "A", label: "A" },
        { value: "B", label: "B" },
      ]);
    } else if (semester === "7" && selectedBranch === "AIML") {
      setSectionOptions([{ value: "A", label: "A" }]);
    } else {
      setSectionOptions([
        { value: "A", label: "A" },
        { value: "B", label: "B" },
        { value: "C", label: "C" },
        { value: "D", label: "D" },
      ]);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const isFormValid = await trigger();
    if (isFormValid) {
      setSubmitting(true);
      try {
        const response = await fetch("https://byteclubwebsite.onrender.com/byte-escape", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Server Response:", result);

        if (response.ok) {
          alert("Registration successful!");
        } else {
          alert("Failed: " + result.error);
        }
      } catch (err) {
        console.error("Error submitting form:", err);
        alert("Something went wrong!");
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="Form-screen flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="w-full bg-gray-950 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold text-white hover:text-cyan-400 transition-colors duration-200"
          >
            BYTE Club
          </Link>

          {/* Future space for links / CTA if needed */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Hero Section for desktop */}
        <div className="hidden md:flex md:w-1/2 bg-gray-900 items-center justify-center p-8 animate-fadeIn">
          <div className="text-center space-y-6">
            <Image
              src={NoBgLogo}
              alt="Logo"
              width={300}
              height={300}
              className="mx-auto animate-scaleIn"
            />
            <h1 className="text-4xl font-extrabold text-cyan-400">BYTEscape</h1>
            <p className="text-lg text-gray-300">
              Escape the Ordinary with The BYTE Club
            </p>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md space-y-2 text-left">
              <p className="flex items-center gap-2">
                <FaCalendarAlt /> 25 September, 2025
              </p>
              <p className="flex items-center gap-2">
                <FaClock /> 11:30 AM – 1:30 PM
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> North Auditorium
              </p>
            </div>
            <p className="text-xl font-semibold text-cyan-300">
              ✨ Not just an event… an experience!
            </p>
            <p className="flex justify-center gap-4 text-lg">
              <FaGamepad title="Games" /> <FaUserSecret title="Mystery" />{" "}
              <FaUsers title="Networking" /> <FaGlassCheers title="Fun" />
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-900  md:bg-gray-900 p-4 animate-fadeIn">
          {/* Mobile Event Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="md:hidden mb-4 py-2 px-4 bg-cyan-600 hover:bg-cyan-500 rounded transition-colors"
          >
            {showDetails ? "Hide Event Details" : "View Event Details"}
          </button>

          {showDetails && (
            <div className="md:hidden max-w-lg p-4 w-full bg-gray-800 rounded-lg shadow-md mb-4  event-popup">
              <h3 className="text-cyan-400 font-bold text-lg text-center">
                BYTEscape Details
              </h3>
              <p className="flex items-center gap-2">
                <FaCalendarAlt /> 25 September, 2025
              </p>
              <p className="flex items-center gap-2">
                <FaClock /> 11:30 AM – 1:30 PM
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> North Auditorium
              </p>
              <p className="text-gray-300">
                ✨ Not just an event… an experience!
              </p>
              <p className="flex justify-center gap-4 text-lg">
                <FaGamepad /> <FaUserSecret /> <FaUsers /> <FaGlassCheers />
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-cyan-400 text-center">
              Registration Form
            </h2>
            <p className="text-gray-300 text-sm text-center mb-4">
              Please fill in your details carefully to register for BYTEscape.
              All fields are mandatory.
            </p>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "Only letters & spaces",
                  },
                  minLength: { value: 3, message: "At least 3 chars" },
                  maxLength: { value: 20, message: "Max 20 chars" },
                })}
                placeholder="Full Name"
                className="input-field"
              />
              {errors.username && (
                <p className="text-red-500 mt-1">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                University Seat Number
              </label>
              <input
                {...register("usn", {
                  required: "USN is required",
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Only letters & numbers allowed",
                  },
                  minLength: { value: 5, message: "At least 5 characters" },
                  maxLength: { value: 15, message: "Max 15 characters" },
                })}
                placeholder="Enter USN"
                className="input-field"
              />
              {errors.usn && (
                <p className="text-red-500 mt-1">{errors.usn.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email",
                  },
                })}
                placeholder="Email Address"
                className="input-field"
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Semester */}
            <div>
              <label className="block text-sm font-medium mb-1">Semester</label>
              <select
                {...register("semester", { required: "Semester is required" })}
                onChange={(e) => handleSemesterChange(e.target.value)}
                className="input-field"
              >
                <option value="">Select Semester</option>
                <option value="1">1st Semester</option>
                <option value="3">3rd Semester</option>
                <option value="5">5th Semester</option>
                <option value="7">7th Semester</option>
              </select>
              {errors.semester && (
                <p className="text-red-500 mt-1">{errors.semester.message}</p>
              )}
            </div>

            {/* Branch */}
            <div>
              <label className="block text-sm font-medium mb-1">Branch</label>
              <select
                {...register("branch", { required: "Branch is required" })}
                onChange={(e) => handleBranchChange(e.target.value)}
                className="input-field"
              >
                <option value="">Select Branch</option>
                {branchOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.branch && (
                <p className="text-red-500 mt-1">{errors.branch.message}</p>
              )}
            </div>

            {/* Section */}
            <div>
              <label className="block text-sm font-medium mb-1">Section</label>
              <select
                {...register("section", { required: "Section is required" })}
                className="input-field"
              >
                <option value="">Select Section</option>
                {sectionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.section && (
                <p className="text-red-500 mt-1">{errors.section.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-200 ${
                submitting
                  ? "bg-cyan-800 cursor-not-allowed opacity-60"
                  : "bg-gradient-to-r from-cyan-500 to-blue-400 hover:scale-105"
              }`}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleStepForm;
