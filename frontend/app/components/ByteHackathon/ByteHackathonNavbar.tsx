"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const ByteHackathonNavbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  // 🔥 Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className="text-white px-auto sm:p-4 h-20 flex justify-center items-center fixed top-0 left-0 w-full backdrop-blur-xl bg-white/10 border-b border-white/20" style={{
        zIndex: 1000,
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8">
        {/* 🔥 Brand Logo */}
        <h1
          className="text-4xl tracking-tighter font-mono text-center w-full sm:w-max font-extrabold bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <Link href={"/bytehackathon"}>Beyond Byte</Link>
        </h1>
        {/* 🌟 Navigation Links */}
        <div className="hidden sm:flex space-x-6 text-lg font-semibold">
          <NavItem label="About" sectionId="about" scrollToSection={scrollToSection} />
          <NavItem label="Track" sectionId="timeline" scrollToSection={scrollToSection} />
          <NavItem label="FAQs" sectionId="faqs" scrollToSection={scrollToSection} />
        </div>

       
      </div>
    </nav>
  );
};

// 🔥 Define the prop types for NavItem
type NavItemProps = {
  label: string;
  sectionId: string;
  scrollToSection: (id: string) => void;
};

// 🔥 Reusable Nav Item with Hover & Scroll
const NavItem = ({ label, sectionId, scrollToSection }: NavItemProps) => {
  return (
    <button
      className="relative group text-white transition-all duration-300 group-hover:text-cyan-400"
      onClick={() => scrollToSection(sectionId)}
    >
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
};

export default ByteHackathonNavbar;