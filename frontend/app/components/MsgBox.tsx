import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import VanillaTilt from "vanilla-tilt";

const MsgBox = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
        ".msgBox",
        { opacity: 0, visibility: "hidden", display: "block" },
        { opacity: 1, visibility: "visible", display: "block", delay: 5, duration: 4 }
      );

    gsap.to(".msgBox p", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
      color: "#a78bfa",
      textShadow:
        "0px 0px 8px rgba(147, 51, 234, 0.7), 0px 0px 12px rgba(75, 85, 99, 0.6)",
    });

    const headlineRightChars = document.querySelectorAll(
      ".headline-char.right"
    );
    headlineRightChars.forEach((char) => {
      let rotationSpeed = 360;
      const rotationIncrement = 90;

      char.addEventListener("mouseenter", () => {
        gsap.to(char, {
          rotate: `+=${rotationSpeed}`,
          duration: 1,
          ease: "none",
        });

        rotationSpeed += rotationIncrement;
      });

      char.addEventListener("mouseleave", () => {
        rotationSpeed = 180;
      });
    });

    const msgBoxElement = document.querySelector(".msgBox") as HTMLElement;
    if (msgBoxElement) {
      VanillaTilt.init(msgBoxElement, {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.5,
      });
    }

    // Clean up on component unmount
    return () => {
        if (msgBoxElement && (msgBoxElement as any).vanillaTilt) {
          (msgBoxElement as any).vanillaTilt.destroy();
        }
      };
  }, []);

  return (
    <>
      <div className="msgBox hidden md:hidden lg:block overflow-hidden static lg:absolute bg-opacity-90 lg:bg-opacity-75 bg-gray-800/70 text-gray-100 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 w-11/12 sm:w-2/3 lg:w-1/2 top-16 lg:top-64 right-4 lg:right-10 border border-transparent  border-gradient-to-r from-indigo-500 to-purple-600 animate__animated animate__fadeIn animate__delay-1s backdrop-blur-lg">
        <h1 className="headline text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
          {Array.from("Welcome to ").map((char, index) => (
            <span
              key={index}
              className="headline-char left inline-block text-gray-200 tracking-wide"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          &nbsp;
          {Array.from("The BYTE CLUB").map((char, index) => (
            <span
              key={index}
              className="headline-char right inline-block bg-gradient-to-br from-purple-400 to-blue-500 bg-clip-text text-transparent font-bold tracking-wide text-shadow-sm"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-300">
          Discover a place where coding meets creativity, innovation flows, and
          BYTE CLUB members make it happen. Join us, and let&apos;s build the
          future together, one byte at a time. Expand your skills, connect with
          like-minded peers, and dive into the heart of tech.
        </p>
      </div>
    </>
  );
};

export default MsgBox;
