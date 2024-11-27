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

const steps = ["User Detail", "Branch & Sem", "Special"];

const MultiStepForm2 = () => {
    const [step, setStep] = useState(0);
    const [submitting, setSubmitting] = useState(false); 



    const {
        register,
        handleSubmit,
        watch,
        trigger, // Used to validate specific fields dynamically
        formState: { errors },
    } = useForm<FormData>({
        mode: "onChange", // Validate as user types
    });

    const semester = watch("semester");
    // const branch = watch("branch");

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

    const nextStep = async () => {
        const isStepValid = await trigger(); // Validate current step
        if (isStepValid) {
            setStep((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const isFormValid = await trigger(); // Validate all fields before submission
        if (isFormValid) {
            setSubmitting(true);
            console.log("Form Data: ", data);
            setTimeout(() => {
                setSubmitting(false); // Re-enable button after 3 seconds
              }, 3000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen Form-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-96  shadow-lg rounded-lg p-6 space-y-4"
            >
                {/* Progress Bar */}
                <ul className="flex justify-between items-center mb-6">
                    {steps.map((label, index) => (
                        <li
                            key={index}
                            className={`text-xs font-bold uppercase flex-1 text-center ${step >= index ? "text-white" : "text-white"
                                }`}
                        >
                            <span
                                className={`inline-block w-6 h-6 pt-0.5 border-2 rounded-full ${step >= index ? "bg-emerald-500 border-emerald-500 text-white" : "border-white"
                                    }`}
                            >
                                {index + 1}
                            </span>
                            <p className="mt-2">{label}</p>
                        </li>
                    ))}
                </ul>

                {/* Step 1: User Details */}
                {step === 0 && (
                    <>
                        <h2 className="text-xl font-bold">User Details</h2>
                        <input
                            {...register("username", {
                                required: "Username is required", pattern: {
                                    value: /^[A-Za-z ]+$/,
                                    message: "Username should only contain alphabets and spaces",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Username must be at least 3 characters long"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Username cannot be longer than 20 characters"
                                }
                            })}
                            type="text"
                            placeholder="Your Name"
                            className="input text-black"
                        />
                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                        <input
                            {...register("email", {
                                required: "Email is required", pattern: {
                                    value: /^[A-Z0-9._]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                            type="email"
                            placeholder="Email ID"
                            className="input text-black"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </>
                )}

                {/* Step 2: Branch & Semester */}
                {step === 1 && (
                    <>
                        <h2 className="text-xl font-bold">Branch & Semester</h2>
                        <select
                            {...register("semester", { required: "Semester is required" })}
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
                        <select
                            {...register("branch", { required: "Branch is required" })}
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
                        <select
                            {...register("section", { required: "Section is required" })}
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
                    </>
                )}

                {/* Step 3: Special Details */}
                {step === 2 && (
                    <>
                        <h2 className="text-xl font-bold">Special Details</h2>
                        <input
                            {...register("firstName", { required: "First Name is required" })}
                            type="text"
                            placeholder="First Name"
                            className="input text-black"
                        />
                        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
                        <input
                            {...register("lastName", { required: "Last Name is required" })}
                            type="text"
                            placeholder="Last Name"
                            className="input text-black"
                        />
                        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                    </>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                    {step > 0 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-emerald-500 text-white py-2 px-4 rounded"
                        >
                            Previous
                        </button>
                    )}
                    {step < steps.length - 1 && (
                        <button
                            type="button"
                            onClick={nextStep}
                            
                            className="bg-emerald-500 text-white py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    )}
                    {step === steps.length - 1 && (
                        <button
                            type="submit"
                            disabled={submitting}
                            className={(submitting)?"bg-emerald-800 text-white py-2 px-4 rounded cursor-not-allowed":"bg-emerald-500 text-white py-2 px-4 rounded"}
                        >
                            {submitting ? "Submitting..." : "Submit"}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm2;
