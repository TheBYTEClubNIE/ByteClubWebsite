"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]); // ✅ Fixed typing

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%", // ✅ Improved timing
        toggleActions: "play none none none",
        once: true, // ✅ Animation runs only once
      },
    });

    // Heading Animation (Scaling + Fade)
    tl.fromTo(
      headingRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2 }
    );

    // Staggered Reveal for Content Sections
    contentRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: index * 0.2, // Stagger effect
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top,#121212,#1a1a2e)]"></div>

      {/* Content Container */}
      <div className="max-w-6xl text-white">
        {/* ABOUT US Heading with Animation */}
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12 relative"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            ABOUT US
          </span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg"></span>
        </h2>

        {/* NIE Mysore Section */}
        <div
          ref={(el) => {
            if (el) contentRefs.current[0] = el; // ✅ Fixed `ref` assignment
          }}
          className="flex flex-col md:flex-row items-center gap-12 mb-16"
        >
          {/* Left - NIE Text */}
          <div className="max-w-2xl bg-white/10 backdrop-blur-md shadow-lg p-6 rounded-lg border border-white/20">
            <h3 className="text-3xl font-bold text-blue-400">
              The National Institute of Engineering
            </h3>
            <p className="mt-4 text-lg text-gray-300">
              Established in 1946, The National Institute of Engineering (NIE),
              Mysore, is one of India&apos;s premier engineering colleges. It
              provides a world-class education that sharpens technical expertise
              and analytical skills while instilling strong ethical values in
              its students.
            </p>
          </div>

          {/* Right - NIE Image */}
          <div
            ref={(el) => {
              if (el) contentRefs.current[1] = el;
            }}
            className="relative w-72 h-48 group hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-[4px]">
              <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                <Image
                  src="/NIE-Logo.svg"
                  alt="NIE Mysore"
                  width={256}
                  height={160}
                  className="rounded-lg w-40 h-40 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Byte Club Section */}
        <div
          ref={(el) => {
            if (el) contentRefs.current[2] = el;
          }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left - Byte Club Team Picture */}
          <div
            ref={(el) => {
              if (el) contentRefs.current[3] = el;
            }}
            className="relative w-96 h-64 group hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-[4px]">
              <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                <Image
                  src="/bitToByte/bit5.jpeg"
                  className="w-96 h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  alt="Byte Club Team"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Right - Byte Club Text */}
          <div
            ref={(el) => {
              if (el) contentRefs.current[4] = el;
            }}
            className="max-w-2xl bg-white/10 backdrop-blur-md shadow-lg p-6 rounded-lg border border-white/20"
          >
            <h3 className="text-3xl font-bold flex items-center gap-3 text-purple-400">
              <Image src="/byteLogo.png" alt="Byte Club" width={40} height={40} />
              Byte Club - NIE Mysore
            </h3>
            <p className="mt-4 text-lg text-gray-300">
              Byte Club is a student-run developer community at NIE Mysore. We
              are a passionate group of budding developers who work together to
              build solutions for local businesses and communities with
              cutting-edge technologies. Our goal is to promote a healthy
              developer culture and empower students through real-world projects
              and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
