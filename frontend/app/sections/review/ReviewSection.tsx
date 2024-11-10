"use client";
import React from "react";
import Card from "@/app/components/review card/ReviewCard";
import GlitchText from "@/app/components/glitch text/GlitchText";

const reviews = [
  {
    name: "Kaushal",
    sem: "3",
    branch: "ISE",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    name: "Naman",
    sem: "3",
    branch: "ISE",
    title: "Scelerisque eleifend donec pretium vulputate sapien.",
    description: "Egestas diam in arcu cursus euismod quis.",
  },
  {
    name: "Gulshan",
    sem: "3",
    branch: "ISE",
    title: "Consectetur purus ut faucibus pulvinar elementum.",
    description: "Aliquam ultrices sagittis orci a scelerisque purus semper.",
  },
];

const ReviewSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col p-3">
      <div className="w-full h-fit p-4">
        <GlitchText text="REVIEWS" />
      </div>
      <div className="w-96 mx-auto mb-96" style={{ scrollSnapType: "x mandatory" }}>
        {reviews.map((review, index) => (
          <Card
            key={index}
            name={review.name}
            sem={review.sem}
            branch={review.branch}
            title={review.title}
            description={review.description}
            prevSlide={`carousel-${
              ((index - 1 + reviews.length) % reviews.length) + 1
            }`}
            nextSlide={`carousel-${((index + 1) % reviews.length) + 1}`}
            currentSlide={`carousel-${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
