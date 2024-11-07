"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRef } from "react";
import gsap from "gsap";

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cards = [
    { title: "Card 1", description: "This is card 1" },
    { title: "Card 2", description: "This is card 2" },
    { title: "Card 3", description: "This is card 3" },
    { title: "Card 4", description: "This is card 4" },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="h-screen flex justify-center items-center bg-gradient-to-r
      from-gray-800 to-black "
    >
      <button
        onClick={handlePrev}
        className="absolute left-0 md:p-6 sm:left-40 md:left-48 lg:left-64 text-white bg-gray-800 p-2 rounded-full"
      >
        <IoIosArrowBack size={24} />
      </button>
      <div className="w-full sm:max-w-lg md:max-w-xl flex overflow-x-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-none w-full transition-transform duration-500 ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div className="bg-white p-6 m-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 md:p-6 sm:right-40 md:right-48 lg:right-64 text-white bg-gray-800 p-2 rounded-full"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

