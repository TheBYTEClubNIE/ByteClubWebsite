"use client";
import { useEffect } from "react";
import gsap from "gsap";
import "./Front.css";
import React from "react";
import Image from "next/image";
import MsgBox from "../MsgBox";

const FrontLogo = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".LogoImg",
      { scale: 0,
        visibility: 'hidden',
        opacity: 0 },
      {
        scale: 1,
        visibility: "visible",
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
    
  }, []);

  return (
    <>


      <div className="relative hidden lg:block h-screen w-full sm:flex flex-col lg:flex-row justify-center items-center bg-slate-950">




        <div className="absolute  inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="LogoBox static lg:relative h-[70vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] w-screen flex lg:flex-col justify-center items-center top-24">
            <Image
              className="LogoImg hidden lg:block static h-[10vh]  sm:h-[25vh] md:h-[40vh] lg:h-[42vh]"
              src="/byte.png"
              alt="Byte Logo"
              width={300}
              height={300}
            />

            <Image
              className="chakri1 hidden lg:block absolute z-10 h-[40vw] sm:h-[35rem] md:h-[40rem] lg:h-[42rem] w-[40vw] sm:w-[35rem] md:w-[40rem] lg:w-[42rem] rounded-full"
              src="/whitepng.png"
              alt="White Chakra"
              priority
              width={800} // Set width here
              height={800} // Set height here
            />

            <Image
              className="chakri2 hidden lg:block absolute z-10 h-[30vw] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] w-[30vw] sm:w-[24rem] md:w-[28rem] lg:w-[30rem] rounded-full"
              src="/blue.png"
              alt="Blue Chakra"
              width={700} // Set width here
              height={700} // Set height here
            />
          </div>

          <MsgBox/>



          

        </div>
      </div>




      {/* //MOBILE RESPONSIVE */}

      {/* <div className="relative lg:hidden h-screen w-full bg-gradient-to-r from-gray-800 via-black to-gray-900 flex justify-center items-center">

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

      </div> */}



    </>






  );
};

export default FrontLogo;
