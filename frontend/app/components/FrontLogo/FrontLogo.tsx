"use client";
import { useEffect } from "react";
import gsap from "gsap";
import "./Front.css";
import React from "react";
import Image from "next/image";
import MsgBox from "../MsgBox";
import { useState } from "react";

const images = ["/nienorth.jpg", "/event1.png", "/event2.png"];

const FrontLogo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsFading(false);
            }, 1000); // Fading transition time (1s)
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".LogoImg",
            { scale: 0, visibility: "hidden", opacity: 0 },
            {
                scale: 1,
                visibility: "visible",
                opacity: 1,
                duration: 1,
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
            {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out",
            }
        );

        tl.fromTo(
            ".headline-char.right",
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                stagger: -0.1,
                duration: 0.8,
                ease: "power3.out",
            },
            "<"
        );

        if (window.innerWidth >= 1024) {
            const boxTl = gsap.timeline({ delay: 1 });

            boxTl.to(".LogoBox", {
                x: "-30vw",
                duration: 1,
                scale: 0.7,
            });
        }
    }, []);

    return (
        <>
            <div
                className="relative hidden sm:hidden md:hidden lg:block h-screen w-full bg-slate-950 overflow-hidden"
                id="home"
            >
                {/* Background Slideshow */}
                <div className="absolute inset-0 transition-opacity duration-1000">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            layout="fill"
                            objectFit="cover"
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentIndex
                                    ? "opacity-30 z-10"
                                    : "opacity-0 z-0"
                            }`}
                        />
                    ))}
                </div>

                {/* Dotted Pattern */}
                <div className="absolute inset-0 bg-[url('/dotted-pattern.svg')] bg-repeat bg-[size:8px_8px] flex items-center justify-center z-20">
                    <div className="LogoBox static lg:relative h-screen w-full flex lg:flex-col justify-center items-center z-20">
                        <Image
                            className="LogoImg hidden lg:block static md:h-[22rem] xl:h-[23rem]"
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
                            width={800}
                            height={800}
                        />
                        <Image
                            className="chakri2 hidden lg:block absolute z-10 h-[30vw] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] w-[30vw] sm:w-[24rem] md:w-[28rem] lg:w-[30rem] rounded-full"
                            src="/blue.png"
                            alt="Blue Chakra"
                            width={700}
                            height={700}
                        />
                    </div>

                    <MsgBox />
                </div>
            </div>

            {/* //MOBILE RESPONSIVE */}

            <div className="relative lg:hidden h-screen w-full bg-gradient-to-b from-purple-800 via-gray-900 to-black overflow-hidden z-20">
                {/* Background Animations */}
                              <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,0,128,0.15),transparent)] 
      animate-[spin_30s_linear_infinite] z-0"
                    ></div>
                    <div
                        className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(0,128,255,0.2),transparent)] 
      animate-[spin_20s_linear_reverse_infinite] z-0"
                    ></div>
                </div>

                {/* Logo and Welcome Text */}
                <div className="relative flex flex-col items-center justify-center z-10 p-8 text-center space-y-6">
                    <Image
                        width={150}
                        height={10}
                        src="/ByteLogo.png"
                        alt="BYTE CLUB Logo"
                        className="rounded-full shadow-xl border-4 border-purple-500  animate-bounce"
                        style={{ marginTop: "20vh" }} // Moves logo down to avoid being hidden by navbar
                    />
                    <p className="text-lg sm:text-sm text-white opacity-90 font-medium">
                    The BYTE (Build Your Technical Expertise) Club, established by the Google Developer Student Club (GDSC) NIE core team [23-24]
                    </p>
                </div>

                {/* Floating Info Boxes */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[90%] space-y-4 z-20 px-4">
                    <div
                        className="p-6 bg-gradient-to-br from-purple-700 to-blue-600 text-white rounded-2xl shadow-xl text-center 
      transform transition duration-500 hover:scale-105 ease-in-out"
                    >
                        <h2 className="text-xl font-semibold">
                            Community of Innovators
                        </h2>
                        <p className="text-sm opacity-80 mt-1">
                            Where ideas meet action
                        </p>
                    </div>
                    <div
                        className="p-6 bg-gradient-to-br from-pink-600 to-purple-500 text-white rounded-2xl shadow-xl text-center 
      transform transition duration-500 hover:scale-105 ease-in-out"
                    >
                        <h2 className="text-xl font-semibold">
                            Collaborate & Create
                        </h2>
                        <p className="text-sm opacity-80 mt-1">
                            Build and share with the best minds
                        </p>
                    </div>
                </div>

                {/* Overlay Animated Elements */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 z-0">
                    <div
                        className="absolute w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 rounded-full 
      animate-[ping_3s_ease-in-out_infinite]"
                    ></div>
                    <div
                        className="absolute w-36 h-36 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 rounded-full 
      animate-[ping_5s_ease-in-out_infinite] delay-200"
                    ></div>
                </div>
            </div>
        </>
    );
};

export default FrontLogo;
