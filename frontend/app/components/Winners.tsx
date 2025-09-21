"use client";
import React from "react";
import events from "../sections/Events/event.json";

interface Member {
  name: string;
  image: string;
}

interface WinnersProps {
  eventId: number;
}

const Winners = ({ eventId }: WinnersProps) => {
  const event = events.find((event) => event.id === eventId);

  if (!event || !event.winner || Object.keys(event.winner).length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen rounded-lg  border border-white/30 py-12 px-4 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          🏆 Winning Teams 🏆
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(event.winner).map(([teamName, members], index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-center mb-6">
                {teamName}
              </h2>
              <div className="flex flex-col gap-6">
                {members.map((member: Member, idx: number) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg transition-transform hover:scale-105 duration-300"
                    />
                    <p className="mt-4 text-lg font-medium">{member.name}</p>
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
