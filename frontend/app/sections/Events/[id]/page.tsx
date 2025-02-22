"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import events from "../event.json";
import Link from "next/link";
import Winners from "@/app/components/Winners";

const Page = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id.toString() === id);

  return (
    <div className="h-full w-screen bg-[url('/dotted-pattern.svg')]  p-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900 to-purple-600 backdrop-blur-lg shadow-lg rounded-lg p-8 border border-white/30">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6 drop-shadow-lg">
          {event?.title}
        </h1>
        <p className="text-gray-200 text-lg text-center mb-8 px-6">
          {event?.content}
        </p>

        {/* Pass event ID to Winners */}
        {event && <Winners eventId={event.id} />}

        <h1 className="text-4xl my-16 font-extrabold text-center text-white drop-shadow-lg">
          Gallery
        </h1>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {event?.images?.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg w-full">
              <Image
                src={img}
                alt={`Event ${index + 1}`}
                width={500}
                height={350}
                className="object-cover w-full h-64 md:h-80 lg:h-96 transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 ease-in-out">
                <Link href={"https://www.instagram.com/thebyteclubnie/"}>
                  <p className="text-white text-lg font-semibold">View Image</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
