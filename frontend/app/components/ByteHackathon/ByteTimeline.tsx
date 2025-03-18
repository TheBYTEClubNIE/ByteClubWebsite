import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function ByteTimeline() {
  const data = [
    {
      title: "FinTech",
      content: (
        <div className="transition-all duration-300 hover:scale-105">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 text-lg md:text-xl font-bold">
            TRACK #01
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base border-b border-gray-300 dark:border-gray-700 pb-4">
            Break free from the ordinary! Our FinTech track empowers you to
            redefine financial systems. Dive into the world of digital payments,
            lending, and financial inclusion to create scalable and secure
            solutions for the future.
          </p>
        </div>
      ),
    },
    {
      title: "AR/VR",
      content: (
        <div className="transition-all duration-300 hover:scale-105">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-lg md:text-xl font-bold">
            TRACK #02
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base border-b border-gray-300 dark:border-gray-700 pb-4">
            Step into the future! Our AR/VR track invites you to craft immersive
            experiences and simulations. Explore how augmented and virtual
            realities can revolutionize industries and redefine human
            interaction.
          </p>
        </div>
      ),
    },
    {
      title: "Environmental Sustainability",
      content: (
        <div className="transition-all duration-300 hover:scale-105">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-600 text-lg md:text-xl font-bold">
            TRACK #03
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base border-b border-gray-300 dark:border-gray-700 pb-4">
            Build a sustainable tomorrow! In the Environmental Sustainability
            track, leverage cutting-edge technology to tackle environmental
            challenges. Innovate eco-friendly solutions that contribute to a
            greener, healthier planet.
          </p>
        </div>
      ),
    },
    {
      title: "Blockchain and DApps",
      content: (
        <div className="transition-all duration-300 hover:scale-105">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 text-lg md:text-xl font-bold">
            TRACK #04
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base border-b border-gray-300 dark:border-gray-700 pb-4">
            Embrace decentralization! The Blockchain and DApps track empowers
            you to create transparent, secure, and decentralized ecosystems.
            Dive into smart contracts and blockchain technology to shape the
            future.
          </p>
        </div>
      ),
    },
    {
      title: "IoT and Smart Devices",
      content: (
        <div className="transition-all duration-300 hover:scale-105">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600 text-lg md:text-xl font-bold">
            TRACK #05
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base border-b border-gray-300 dark:border-gray-700 pb-4">
            Connect the world around you! The IoT and Smart Devices track is
            your chance to develop intelligent solutions for a seamlessly
            connected future. Create smart technologies that simplify and
            enhance everyday life.
          </p>
        </div>
      ),
    },
    {
      title: "Open Innovation",
      content: (
        <div className="transition-all duration-300 hover:scale-105">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 text-lg md:text-xl font-bold">
            TRACK #06
          </p>
          <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base border-b border-gray-300 dark:border-gray-700 pb-4">
            Innovate without boundaries! The Open Innovation track is your
            playground to dream big. Collaborate with diverse minds, tackle
            real-world challenges, and create groundbreaking solutions that defy
            convention.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div id="timeline" className="w-full bg-gray-100 dark:bg-gray-900 py-12 px-6 rounded-lg">
      
      <Timeline data={data} />
    </div>
  );
}
