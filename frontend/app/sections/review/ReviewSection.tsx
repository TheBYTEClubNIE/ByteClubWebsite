"use client";
import React from "react";
import Card from "@/app/components/review card/ReviewCard";
import GlitchText from "@/app/components/glitch text/GlitchText";
import BgTransition from "@/app/components/review bg transition/BgTransition";

const reviews = [
  {
    name: "Gulshan Kr. Jha",
    sem: "4",
    branch: "ISE",
    title: "Hello everyone!",
    description: "The Byte Club is a tech lovers group where members explore coding, robotics, and new tech together. They host fun workshops and projects, making it a great place to learn and grow.",
  },
  {
    name: "Naman Sharma",
    sem: "4",
    branch: "ISE",
    title: "",
    description: "The Byte Club is a cool spot for tech fans. Dive into coding, robotics, and the latest gadgets. With fun projects and events, it's the perfect place to learn and meet like-minded people.",
  },
  {
    name: "Kaushal Prakash",
    sem: "4",
    branch: "ISE",
    title: "Hii!",
    description: "The Byte Club is a tech enthusiasts' paradise. Members delve into coding, and the latest technology. It's a fun place to learn, share ideas, and work on cool projects together.",
  },
  {
    name: "Dipanshu Shaw",
    sem: "4",
    branch: "ISE",
    title: "Exploring Tech Together!",
    description: "The Byte Club is a hub for tech lovers! From coding to robotics, it's a place to learn, collaborate, and build awesome projects with like-minded enthusiasts.",
  },
];

const ReviewSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center gap-7 justify-center flex-col p-3 overflow-hidden" id="review">
      <BgTransition />
      <div className="relative z-10 w-full h-fit p-4 translate-y-4">
        <GlitchText text="REVIEWS" />
      </div>
      <div className="relative z-10 w-80 mx-auto mb-96 translate-y-36" style={{ scrollSnapType: "x mandatory" }}>
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
