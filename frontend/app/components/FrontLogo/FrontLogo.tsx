"use client";
import { useEffect } from "react";
import gsap from "gsap";
import "./Front.css";
import React from "react";
import Image from "next/image";


const FrontLogo = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".LogoImg",
      { y: -300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        onComplete: () => {
          gsap.to(".chakri1", {
            rotate: 360,
            duration: 15,
            ease: "linear",
            repeat: -1,
          });
          gsap.to(".chakri2", {
            rotate: -360,
            delay: 1,
            duration: 15,
            ease: "linear",
            repeat: -1,
          });
        },
      }
    );

    tl.fromTo(
      ".msgBox",
      { opacity: 0, display: "none" },
      { opacity: 1, display: "block", delay: 3, duration: 2 }
    );

    tl.fromTo(
      ".headline-char.left",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      ".headline-char.right",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, stagger: -0.1, duration: 0.8, ease: "power3.out" },
      "<"
    );

    if (window.innerWidth >= 1024) {
      const boxTl = gsap.timeline({ delay: 4 });

      boxTl.to(".LogoBox", {
        x: "-30vw",
        duration: 2.5,
        scale: 0.7,
      });
    }

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

    const headlineRightChars = document.querySelectorAll(".headline-char.right");
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
  }, []);

  return (
    <>


      <div className="relative hidden lg:block h-screen w-full sm:flex flex-col lg:flex-row justify-center items-center bg-slate-950">




        <div className="absolute  inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="LogoBox static lg:relative h-[70vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-screen flex lg:flex-col justify-center items-center top-24">
            <Image
              className="LogoImg static h-[10vh]  sm:h-[25vh] md:h-[40vh] lg:h-[42vh]"
              src="/byte.png"
              alt="Byte Logo"
              width={300}
              height={300}
            />

            <Image
              className="chakri1 absolute z-10 h-[40vw] sm:h-[35rem] md:h-[40rem] lg:h-[42rem] w-[40vw] sm:w-[35rem] md:w-[40rem] lg:w-[42rem] rounded-full"
              src="/whitepng.png"
              alt="White Chakra"
              priority
              width={800} // Set width here
              height={800} // Set height here
            />

            <Image
              className="chakri2 absolute z-10 h-[30vw] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] w-[30vw] sm:w-[24rem] md:w-[28rem] lg:w-[30rem] rounded-full"
              src="/blue.png"
              alt="Blue Chakra"
              width={700} // Set width here
              height={700} // Set height here
            />
          </div>



          <div className="msgBox overflow-hidden static lg:absolute bg-opacity-90 lg:bg-opacity-75 bg-gray-800/70 text-gray-100 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 w-11/12 sm:w-2/3 lg:w-1/2 top-16 lg:top-64 right-4 lg:right-10 border border-transparent border-gradient-to-r from-indigo-500 to-purple-600 animate__animated animate__fadeIn animate__delay-1s backdrop-blur-lg">

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
              BYTE CLUB members make it happen. Join us, and let&apos;s build the future
              together, one byte at a time. Expand your skills, connect with
              like-minded peers, and dive into the heart of tech.
            </p>
          </div>

        </div>
      </div>




      {/* //MOBILE RESPONSIVE */}

      <div className="relative lg:hidden h-screen w-full bg-gradient-to-r from-gray-800 via-black to-gray-900 flex justify-center items-center">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">

          <div className="relative flex flex-col justify-center items-center px-6 py-12 text-center sm:px-8 lg:px-16 mt-20 ml-20">

            <div className="flex flex-col items-center mb-8">
              <img 
                src="/byte original logo.jpeg"
                alt="BYTE CLUB Logo"
                className="w-60 sm:w-72 md:w-80 rounded-lg shadow-lg" 
              />
              <p className="text-lg sm:text-xl text-white font-medium mt-4">Welcome to the Future of Coding</p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              The BYTE CLUB <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-500">Community</span>
            </h1>

            <p className="text-lg sm:text-xl text-white opacity-80 mb-8 max-w-3xl">
              A space where innovators and creators come together to build the future. Join the revolution, expand your knowledge, and collaborate with brilliant minds.
            </p>

            <div className="flex flex-col items-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition duration-200 ease-in-out">
                Join the Club
              </button>
            </div>
          </div>

          <div className="absolute inset-0 z-0 flex justify-center items-center">
            <div className="chakra-circle chakra1 absolute bg-gradient-to-r from-blue-500 to-indigo-600 opacity-50 rounded-full animate-pulse"></div>
            <div className="chakra-circle chakra2 absolute bg-gradient-to-r from-purple-600 to-pink-600 opacity-40 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>



    </>






  );
};

export default FrontLogo;
