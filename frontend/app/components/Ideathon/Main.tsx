"use client";
import { useEffect, useState } from "react";

// Countdown Timer Logic
const calculateTimeLeft = () => {
  const eventDate = new Date("2025-03-31T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const Page = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden z-0">
      {/* Background with Animated Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute size-56 bg-blue-500 rounded-full opacity-10 animate-ping top-10 left-20"></div>
          <div className="absolute size-56 bg-purple-500 rounded-full opacity-10 animate-ping top-40 right-96"></div>
          <div className="absolute size-56 bg-pink-400 rounded-full opacity-10 animate-ping bottom-10 left-72"></div>
          <div className="absolute size-56 bg-yellow-500 rounded-full opacity-10 animate-ping bottom-24 right-20"></div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full z-10 p-4 fixed top-0 bg-opacity-80 backdrop-blur-lg bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="text-2xl font-bold text-white float-left">Byte Ideathon</div>
        <nav className="float-right">
          <ul className="flex font-semibold align-baseline">
            {["Home", "About", "Sponsors", "Prizes", "FAQs", "Team Info", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-300 hover:text-yellow-400 mx-6 transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="text-center pt-56 relative z-0 h-screen">
        <h2 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 animate-pulse">
          BYTE IDEATHON &apos;25
        </h2>
        <p className="text-gray-400 mt-2 text-lg font-semibold">CODE. COMPETE. CELEBRATE.</p>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          A national-level event with a mission to <q>BUILD YOUR TECHNICAL EXPERTISE</q>
        </p>
        <p className="mt-4 text-lg text-red-300 max-w-2xl mx-auto">
          ( Only for students of National Institute of Engineering )
        </p>

        <p className="text-yellow-400 font-semibold mt-4 text-xl">Mark your calendars: April 4th - 6th</p>

        {/* Countdown Timer */}
        <div className="mt-6 text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg shadow-lg inline-block">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-6 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
            Register Now
          </button>
          <button className="border border-gray-400 py-2 px-6 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-yellow-300 transition-all duration-300">
            Community Page
          </button>
        </div>
      </div>

    </div>
  );
};

export default Page;
