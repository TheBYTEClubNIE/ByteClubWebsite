"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import byteLogo from "@/public/NoBgLogo.png"

export default function AboutUs() {
  return (
<section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-900 text-white px-8 lg:px-16 py-12" id="about">
  {/* Image at the top on smaller screens */}
  <motion.div 
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
  >
    <Image 
      src={byteLogo} 
      alt="About Us"
      width={100}
      height={100}
      className="w-[80%] max-w-md rounded-xl shadow-lg"
    />
  </motion.div>

  {/* Content below image on smaller screens */}
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
  >
    <h2 className="text-4xl lg:text-5xl font-extrabold text-yellow-400">About Us</h2>
    <div className="h-1 w-24 bg-yellow-500 mx-auto lg:mx-0"></div>
    <p className="text-lg text-gray-300 leading-relaxed">
      <span className="text-orange-400 font-extrabold">Byte Ideathon</span> is a premier 
      <span className="text-teal-400 font-bold"> national-level hackathon</span> that brings together 
      <span className="text-purple-400 font-bold"> students, developers, and tech enthusiasts</span> 
      to <span className="text-pink-400 font-bold"> innovate, collaborate,</span> and solve 
      <span className="text-yellow-400 font-bold"> real-world challenges</span>. It serves as a platform for 
      <span className="text-green-400 font-bold"> problem-solvers and creative minds</span> to showcase their skills, 
      learn from <span className="text-red-400 font-bold"> industry experts</span>, and compete for 
      <span className="text-blue-400 font-bold"> exciting rewards</span>.
    </p>

    <p className="text-lg text-gray-300 leading-relaxed mt-4">
      🚀 <span className="text-orange-400 font-extrabold text-2xl">Why Participate?</span>  
      <br />✅ <span className="text-teal-400 font-bold"> Innovate & Build</span> – Transform ideas into reality.  
      <br />✅ <span className="text-purple-400 font-bold"> Collaborate & Network</span> – Connect with peers & industry leaders.  
      <br />✅ <span className="text-pink-400 font-bold"> Learn & Grow</span> – Gain hands-on experience & mentorship.  
      <br />✅ <span className="text-yellow-400 font-bold"> Compete & Win</span> – Unlock career opportunities & exciting prizes.  
    </p>
  </motion.div>
</section>

  );
}
