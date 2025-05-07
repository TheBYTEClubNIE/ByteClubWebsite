import React from "react";
import ByteHackathonNavbar from "@/app/components/ByteHackathon/ByteHackathonNavbar";
import ByteHackathonHeroSection from "../components/ByteHackathon/ByteHackathonHeroSection";
import { ByteTimeline } from "../components/ByteHackathon/ByteTimeline";
import AboutUs from "../components/ByteHackathon/AboutUs";
import { ByteFooter } from "../components/ByteHackathon/hackathonFooter";
import ByteHackathonFAQ from "../components/ByteHackathon/FAQ";
import IdeaTeamInfo from "../components/Ideathon/IdeaTeamInfo";

const Page = () => {
  return (
    <>
      <div className=" h-screen w-screen z-[-1]">
        <video src="beyondbyte/byte_rain.mp4" className="absolute object-cover w-screen h-screen z-[-1]" muted autoPlay loop/>
        
  
        <div className="relative z-50 w-screen h-screen flex flex-col items-center justify-center">
          <ByteHackathonNavbar />
          <ByteHackathonHeroSection />
        </div>
      </div>
      <AboutUs/>

     
        <ByteTimeline/>
        <ByteHackathonFAQ/>
        <IdeaTeamInfo/>
        <ByteFooter/>
      
    </>
  );
};

export default Page;
