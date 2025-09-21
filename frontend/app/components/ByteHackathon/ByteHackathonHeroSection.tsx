"use client";
import { useState, useEffect, useRef } from "react";
import "./hackathon.css";
import { useRouter } from "next/navigation";
import { BsLightbulbFill } from "react-icons/bs";

const ByteHackathonHeroSection = () => {
  const router = useRouter();
  const eventDate = new Date("2025-04-23T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const countdownRef = useRef(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function getTimeRemaining() {
      const now = new Date().getTime();
      const diff = eventDate - now;

      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }

    setTimeLeft(getTimeRemaining());
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex font-serif flex-col items-center justify-center text-white"
    >
      <div className="absolute h-screen w-full  z-[-2] bg-gray-800 opacity-80"></div>

      <div className="z-10 w-full">
        <h1
          ref={titleRef}
          className="heading flex mx-auto text-4xl md:text-6xl lg:text-7xl font-extrabold  text-[#f9f871] mb-4 text-center"
        >
          <BsLightbulbFill /> BEYOND BYTE
        </h1>
        <h1 className="heading text-[#f9f871] mb-4 text-xl md:text-2xl lg:text-3xl  text-right">{"<2025/>"}</h1>

        <p
          ref={taglineRef}
          className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold uppercase text-white mb-4 text-center"
        >
          CODE. <span className="text-yellow-400">COMPETE.</span> CELEBRATE.
        </p>

        <p className="text-base md:text-xl text-gray-300 max-w-2xl text-center mb-6">
          Beyond Byte is a{" "}
          <span className="text-cyan-400 font-bold">
            national-level hackathon
          </span>{" "}
          where students from across the country will have{" "}
          <span className="text-green-400 font-bold">24 hours</span> to develop
          real-world solutions using{" "}
          <span className="text-purple-400 font-bold">
            cutting-edge tech stacks
          </span>
          .
        </p>

        <p className="text-lg text-center font-medium text-white mb-6">
          📅 Mark your calendars:{" "}
          <span className="text-blue-400 font-bold">23th</span> to{" "}
          <span className="text-red-400 font-bold">24th April</span>
        </p>

        <div
          ref={countdownRef}
          className="text-3xl text-center sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-8"
        >
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
          {timeLeft.seconds}s
        </div>

        <div
          ref={buttonRef}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-8 py-3 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-transform"
            onClick={() => router.push("/sections/Registration")}
          >
            Register Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ByteHackathonHeroSection;
