"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./hackathon.css";

const ByteHackathonHeroSection = () => {
  const eventDate = new Date("2025-04-04T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

    setTimeLeft(getTimeRemaining()); // Set initial value
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (!heroRef.current || !titleRef.current || !taglineRef.current || !countdownRef.current || !buttonRef.current) return;

    // Floating effect
    gsap.to(heroRef.current, {
      y: -5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Title animation
    tl.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });

    // Tagline animation
    tl.fromTo(taglineRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.4)" }, "-=0.4");

    // Countdown animation
    tl.fromTo(countdownRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1,0.6)" });

    // Button animation
    if (buttonRef.current) {
      tl.fromTo(buttonRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });

      if (buttonRef.current.children) {
        tl.fromTo(buttonRef.current.children, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: "bounce.out", stagger: 0.1 });
      }
    }
  }, []);

  return (
    <div ref={heroRef} className="text-white text-center py-16 px-4 max-w-[800px] mx-auto relative">
      <h1
        ref={titleRef}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"
      >
        BYTE HACKATHON&apos;25
      </h1>

      <p ref={taglineRef} className="text-md sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase text-white shadow-glow animate-pulse">
        CODE. <span className="text-yellow-400">COMPETE.</span> CELEBRATE.
      </p>

      <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200">
        Byte Hackathon &apos;25 is a <span className="text-cyan-400 font-bold">national-level hackathon</span> where students from across the country will have{" "}
        <span className="text-green-400 font-bold">36 hours</span> to develop real-world solutions using{" "}
        <span className="text-purple-400 font-bold">cutting-edge tech stacks</span>.
      </p>

      {/* UPDATED DATE STYLING */}
      <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 font-semibold">
        📅 Mark your calendars:{" "}
        <span className="text-blue-400 text-bold sm:text-2xl">4th</span> to{" "}
        <span className="text-red-400 text-bold sm:text-2xl">6th April</span>
      </p>

      {/* Countdown Timer */}
      <div ref={countdownRef} className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text animate-pulse">
        {timeLeft.days}d {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>

      <div ref={buttonRef} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0">
        <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-black px-6 sm:px-8 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Register Now!
        </button>
        <button className="border border-white text-white px-6 sm:px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-black">
          Community Page
        </button>
      </div>
    </div>
  );
};

export default ByteHackathonHeroSection;
