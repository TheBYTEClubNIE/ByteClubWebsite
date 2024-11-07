'use client';

import LeadsCard from "@/app/components/leads card/LeadsCard";
import { useState } from "react";

const leads = [
  {
    bio: "Tech lead of our club",
    name: "Rhea Crasto",
    insta: "https://instagram.com/satwik",
    linkedin: "https://linkedin.com/in/satwik",
    email: "satwik@example.com",
    img: "/leads/lead-1.png",
    bgColor: "bg-red-500"
  },
  {
    bio: "Tech lead of our club",
    name: "Satwik Kini",
    insta: "https://instagram.com/satwik",
    linkedin: "https://linkedin.com/in/satwik",
    email: "satwik@example.com",
    img: "/leads/lead-1.png",
    bgColor: "bg-blue-500"
  },
  {
    bio: "Tech lead of our club",
    name: "Som",
    insta: "https://instagram.com/satwik",
    linkedin: "https://linkedin.com/in/satwik",
    email: "satwik@example.com",
    img: "/leads/lead-1.png",
    bgColor: "bg-green-500"
  },
  {
    bio: "Tech lead of our club",
    name: "Priyanshu",
    insta: "https://instagram.com/satwik",
    linkedin: "https://linkedin.com/in/satwik",
    email: "satwik@example.com",
    img: "/leads/lead-1.png",
    bgColor: "bg-yellow-500"
  }
];

function Leads() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`w-screen min-h-screen pt-14 opacity-50 ${hoveredIndex !== null ? leads[hoveredIndex].bgColor : ''}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit mt-10">
        {leads.map((lead, index) => (
          <LeadsCard
            key={index}
            name={lead.name}
            insta={lead.insta}
            linkedin={lead.linkedin}
            email={lead.email}
            img={lead.img}
            bio={lead.bio}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
}

export default Leads;
