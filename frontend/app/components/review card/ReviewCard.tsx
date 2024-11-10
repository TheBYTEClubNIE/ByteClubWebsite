"use client";
import React from "react";

interface CardProps {
  name: string;
  sem: string;
  branch: string;
  title: string;
  description: string;
  prevSlide: string;
  nextSlide: string;
  currentSlide: string;
}

const Card: React.FC<CardProps> = ({
  name,
  sem,
  branch,
  title,
  description,
  prevSlide,
  nextSlide,
  currentSlide,
}) => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <input
        className="sr-only peer"
        type="radio"
        name="carousel"
        id={currentSlide}
        defaultChecked={currentSlide === "carousel-1"}
      />
      <div className="w-80 sm:w-96 md:w-[27rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0 border border-gray-200">
        <div className="py-4 px-8">
          <h1 className="hover:cursor-pointer text-shadow mt-2 text-white font- font-bold text-2xl tracking-tight">
            {title}
          </h1>
          <p className="hover:cursor-pointer py-3 text-white leading-6">
            {description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full place-content-center">
            <p className="text-sm text-white ">Name: {name}</p>
            <p className="text-sm text-white ">Semester: {sem}</p>
            <p className="text-sm text-white ">Branch: {branch}</p>
          </div>
        </div>
        <div className="absolute top-1/2 w-full flex justify-between z-20">
          <label
            htmlFor={prevSlide}
            className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <label
            htmlFor={nextSlide}
            className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
