import React from "react";
import "./UpcomingEvents.css";

function UpcomingEvents() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 md:p-8 upcoming-main relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Floating Balloons */}
      <img
        src="/balloon1.svg"
        alt="Balloon"
        className="floating-balloon balloon-1 hidden md:block"
      />
      <img
        src="/balloon2.svg"
        alt="Balloon"
        className="floating-balloon balloon-2 hidden md:block"
      />
      <img
        src="/balloon3.svg"
        alt="Balloon"
        className="floating-balloon balloon-3 hidden md:block"
      />

      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 animate-fade-in bg-gradient-to-r from-purple-700 to-green-500 bg-clip-text text-transparent py-2 md:py-4 main-text glow z-10">
        Upcoming Events
      </h1>

      {/* Event Cards */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl px-4 z-10"> */}
      <div className="flex justify-center items-center w-full max-w-xl px-4 z-10">
        <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition-all md:hover:scale-105 md:animate-slide-in-left upcoming-card-1">
            {/* Event 2: Hackathon */}
          <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 md:mb-4" style={{textShadow : "black 0px 0px 50px"}}>
              Ideathon
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
              Unleash your creativity and pitch your groundbreaking ideas. Join
              us for an exciting ideathon where innovation meets opportunity.
            </p>
            
            <a onClick={()=>{window.location.href="/Ideathon"}} className="cursor-pointer bg-blue-500 text-white px-2 py-2 rounded-full hover:bg-blue-600 transition-colors font-semibold text-sm md:text-base tracking-wider shadow-lg hover:shadow-blue-500/50">
              Learn More
            </a>
          </div>
        </div>

        {/* Event 2: Hackathon */}
        {/* <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden transform transition-all md:hover:scale-105 md:animate-slide-in-right upcoming-card-2">
          <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-2 md:mb-4" style={{textShadow : "black 0px 0px 50px"}}>
              Hackathon
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
              Code, collaborate, and create. Participate in our hackathon to
              build innovative solutions and compete for amazing prizes.
            </p>
            
            <a onClick={()=>{window.location.href="/bytehackathon"}} className="cursor-pointer bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600 transition-colors font-semibold text-sm md:text-base tracking-wider shadow-lg hover:shadow-green-500/50">
              Learn More
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default UpcomingEvents;
