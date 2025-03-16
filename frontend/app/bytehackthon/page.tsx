import React from "react";
import ByteHackathonNavbar from "@/app/components/ByteHackathon/ByteHackathonNavbar";
import ByteHackathonHeroSection from "../components/ByteHackathon/ByteHackathonHeroSection";
import { ByteTimeline } from "../components/ByteHackathon/ByteTimeline";
import AboutUs from "../components/ByteHackathon/AboutUs";
import { ByteFooter } from "../components/ByteHackathon/hackathonFooter";

const Page = () => {
  return (
    <>
      <div className="relative h-max overflow-hidden">
        {/* Celebration Confetti */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full confetti"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] [&>div]:bg-[size:14px_24px]">
            <div></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-screen h-screen flex flex-col items-center justify-center">
          <ByteHackathonNavbar />
          <ByteHackathonHeroSection />
        </div>
      </div>
      <AboutUs/>

     
        <ByteTimeline/>

        <ByteFooter/>
      
    </>
  );
};

export default Page;
