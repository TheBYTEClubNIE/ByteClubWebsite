"use client";
import React from "react";
import events from "@/app/sections/events/event.json";

interface Member {
  name: string;
  image: string;
}



interface WinnersProps {
  eventId: number;
}

const Winners = ({ eventId }: WinnersProps) => {
  const event = events.find((event) => event.id === eventId);

  // Check if there are winners for this event
  if (!event || !event.winner || Object.keys(event.winner).length === 0) {
    return null; // Don't render anything if no winners
  }



  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-600 p-8 relative">
      {/* Background Image */}
      <div
        className="md:block hidden absolute inset-0 bg-cover bg-center z-0"
        
      >
        <div className="absolute inset-0 bg-gradient-to-t from-purple-800 to-purple-500 opacity-40 z-10"></div>
      </div>

      {/* Winners Section */}
      <div className="max-w-6xl mx-auto relative z-20 bg-white/20 backdrop-blur-lg shadow-lg rounded-lg p-8 border border-white/30">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 ">
          🏆 Winners Teams 🏆
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-20">
          {Object.entries(event.winner).map(([teamName, members], index) => (
            <div key={index} className="bg-black/20 p-6 md:w-44 lg:w-52 gap-32 rounded-xl shadow-lg">
              <h2 className=" md:text-2xl text-xl font-semibold text-center text-white mb-4">
                {teamName}
              </h2>
              <div className="space-y-4">
                {members.map((member: Member, idx: number) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-40 object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <p className="text-white text-lg font-semibold">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Winners;
