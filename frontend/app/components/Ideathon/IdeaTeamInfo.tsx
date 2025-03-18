"use client";
import { motion } from "framer-motion";
import { FaLinkedin,  FaInstagram } from "react-icons/fa";
import "./ideathon.css";

const leads = [
    {
      role: "Lead",
      name: "Rhea Crasto",
      insta: "https://www.instagram.com/rhheeaaa._/profilecard/?igsh=MXY4cXZtd2IweWQzcg==",
      linkedin: "https://www.linkedin.com/in/rhea-crasto-a972aa294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "rheacrasto04@gmail.com",
      image: "/leads/rhea.jpg",
      bgColor: "bg-red-500"
    },
    {
      role: "Tech lead",
      name: "Satwik Kini",
      insta: "https://instagram.com/satwik_kini.official",
      linkedin: "https://linkedin.com/in/satwikkini",
      email: "",
      image: "/leads/lead-1.png",
      bgColor: "bg-blue-500"
    },
    {
      role: "Creative lead",
      name: "Somashekhar G B",
      insta: "https://www.instagram.com/somashekhar_gb",
      linkedin: "https://www.linkedin.com/in/somashekhar-g-b-r",
      email: "",
      image: "/leads/som.jpg",
      bgColor: "bg-green-500"
    },
    {
      role: "Sponsorship lead",
      name: "Soujanya R",
      insta: "https://instagram.com/",
      linkedin: "https://www.linkedin.com/in/soujanya-r-1a46722a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "rsoujanya404@gmail.com",
      image: "/leads/souj.jpg",
      bgColor: "bg-yellow-500"
    },
    {
      role: "Management lead",
      name: "Prianshu Sharma",
      insta: "https://www.instagram.com/prianshu_61/profilecard/?igsh=MWh4cGE1bGprcncwNw==",
      linkedin: "https://www.linkedin.com/in/prianshusharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "",
      image: "/leads/pr.jpg",
      bgColor: "bg-yellow-500"
    },
    {
      role: "Open Source Guru",
      name: "Rohan G",
      insta: "https://www.instagram.com/rohan_g___/",
      linkedin: "https://www.linkedin.com/in/rohan-g-kami/",
      email: "",
      image: "/leads/rohan.jpeg",
      bgColor: "bg-yellow-500"
    }
  ];

const IdeaTeamInfo = () => {
  return (
    <div className="w-full py-16 bg-gray-900 text-white " id="team">
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-600">Meet the Team</h2>
      <div className="h-1 w-72 bg-yellow-500 mx-auto mt-4 bg-gradient-to-r from-red-400 to-blue-600 rounded-full"></div>

      {/* Scrollable Cards Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth mt-10 px-4 py-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center place-items-center gap-12">
          {leads.map((member, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl h-40 shadow-lg min-w-[225px] max-w-[225px] text-center"
            >
              {/* <Image src={member.image} width={100} height={100} alt={member.name} className="w-32 h-32 mx-auto rounded-full border-2 border-yellow-400" /> */}
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>

              {/* Social Media Links */}
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.insta} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-blue-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IdeaTeamInfo;
