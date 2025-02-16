'use client';
import LeadsCard from "@/app/components/leads card/LeadsCard";
import SvgText from "@/app/components/SvgText/AnimatedText";
import { useState } from "react";
const leads = [
  {
    bio: "Lead",
    name: "Rhea Crasto",
    insta: "https://www.instagram.com/rhheeaaa._/profilecard/?igsh=MXY4cXZtd2IweWQzcg==",
    linkedin: "https://www.linkedin.com/in/rhea-crasto-a972aa294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "rheacrasto04@gmail.com",
    img: "/leads/rhea.jpg",
    bgColor: "bg-red-500"
  },
  {
    bio: "Tech lead",
    name: "Satwik Kini",
    insta: "https://instagram.com/satwik_kini.official",
    linkedin: "https://linkedin.com/in/satwikkini",
    email: "",
    img: "/leads/lead-1.png",
    bgColor: "bg-blue-500"
  },
  {
    bio: "Creative lead",
    name: "Somashekhar G B",
    insta: "https://www.instagram.com/somashekhar_gb",
    linkedin: "https://www.linkedin.com/in/somashekhar-g-b-r",
    email: "",
    img: "/leads/som.jpg",
    bgColor: "bg-green-500"
  },
  {
    bio: "Sponsorship lead",
    name: "Soujanya R",
    insta: "https://instagram.com/",
    linkedin: "https://www.linkedin.com/in/soujanya-r-1a46722a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "rsoujanya404@gmail.com",
    img: "/leads/souj.jpg",
    bgColor: "bg-yellow-500"
  },
  {
    bio: "Management lead",
    name: "Prianshu Sharma",
    insta: "https://www.instagram.com/prianshu_61/profilecard/?igsh=MWh4cGE1bGprcncwNw==",
    linkedin: "https://www.linkedin.com/in/prianshusharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "",
    img: "/leads/pr.jpg",
    bgColor: "bg-yellow-500"
  },
  {
    bio: "Open Source Guru",
    name: "Rohan G",
    insta: "https://www.instagram.com/prianshu_61/profilecard/?igsh=MWh4cGE1bGprcncwNw==",
    linkedin: "https://www.linkedin.com/in/prianshusharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "",
    img: "/leads/rohan.jpeg",
    bgColor: "bg-yellow-500"
  }
];
function Leads() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className={`min-h-screen pt-24 opacity-70 ${hoveredIndex !== null ? leads[hoveredIndex].bgColor : ''}`} id="about">
      <div>
        <SvgText />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-fit mt-20">
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