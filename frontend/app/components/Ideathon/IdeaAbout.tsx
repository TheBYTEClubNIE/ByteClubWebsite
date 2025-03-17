"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import byteLogo from "@/public/NoBgLogo.png"

export default function AboutUs() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white px-16">
      {/* Left: Image */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-1/2 flex justify-center"
      >
        <Image 
          src={byteLogo} 
          alt="About Us"
          width={100}
          height={100}
          className="w-[80%] rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Right: Content */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-1/2 text-left space-y-6"
      >
        <h2 className="text-5xl font-extrabold text-yellow-400">About Us</h2>
        <div className="h-1 w-24 bg-yellow-500"></div>
        <p className="text-lg text-gray-300 leading-relaxed">
          Byte Ideathon is a premier national-level event where students, developers, and tech enthusiasts come together to 
          showcase their innovative skills. Compete, learn, and celebrate technology with like-minded peers from across the country.
        </p>
      </motion.div>
    </section>
  );
}
