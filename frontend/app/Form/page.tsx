"use client";
import "./Form.css";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  semester: string;
  branch: string;
  section: string;
  firstName?: string;
  lastName?: string;
}

const SingleStepForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

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
    if (selectedSemester === "7") {
      setBranchOptions([
        { value: "CSE", label: "Computer Science & Engineering" },
        { value: "ISE", label: "Information Science & Engineering" },
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
    if ((semester === "1" || semester === "3") && selectedBranch === "AIML") {
      setSectionOptions([
        { value: "A", label: "A" },
        { value: "B", label: "B" },
      ]);
    } else if (semester === "5" && selectedBranch === "AIML") {
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
      console.log("Form Data: ", data);
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    }
  };

  return (
    <div className="flex items-center min-h-screen Form-screen ">
        <div className="w-3/5 border-2 border-white min-h-screen float-left forLOGO"></div>{/* for logo of byte club gol gol gol gol */}
        {/* Node mailer to be add here */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/5 shadow-lg rounded-lg p-6 space-y-6 min-h-screen overflow-y-scroll"
      >
        <h2 className="text-xl font-bold">Byte Club Form</h2>

        {/* User Details */}
        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="username">
            Your Name
          </label>
          <input
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Username should only contain alphabets and spaces",
              },
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username cannot be longer than 20 characters",
              },
            })}
            id="username"
            type="text"
            placeholder="Your Name"
            className="input text-black"
          />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            id="email"
            type="email"
            placeholder="Email ID"
            className="input text-black"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Branch & Semester */}
        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="semester">
            Semester
          </label>
          <select
            {...register("semester", { required: "Semester is required" })}
            id="semester"
            onChange={(e) => handleSemesterChange(e.target.value)}
            className="input text-black"
          >
            <option value="">Select Semester</option>
            <option value="1">1st Semester</option>
            <option value="3">3rd Semester</option>
            <option value="5">5th Semester</option>
            <option value="7">7th Semester</option>
          </select>
          {errors.semester && <p className="text-red-500">{errors.semester.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="branch">
            Branch
          </label>
          <select
            {...register("branch", { required: "Branch is required" })}
            id="branch"
            onChange={(e) => handleBranchChange(e.target.value)}
            className="input text-black"
          >
            <option value="">Select Branch</option>
            {branchOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.branch && <p className="text-red-500">{errors.branch.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="section">
            Section
          </label>
          <select
            {...register("section", { required: "Section is required" })}
            id="section"
            className="input text-black"
          >
            <option value="">Select Section</option>
            {sectionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.section && <p className="text-red-500">{errors.section.message}</p>}
        </div>

        {/* Special Details */}
        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            {...register("firstName", { required: "First Name is required" })}
            id="firstName"
            type="text"
            placeholder="First Name"
            className="input text-black"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            {...register("lastName", { required: "Last Name is required" })}
            id="lastName"
            type="text"
            placeholder="Last Name"
            className="input text-black"
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            disabled={submitting}
            className={
              submitting
                ? "bg-emerald-800 text-white py-2 px-4 rounded cursor-not-allowed"
                : "bg-emerald-500 text-white py-2 px-4 rounded"
            }
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      </div>
  );
};

export default SingleStepForm;
