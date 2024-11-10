"use client";
import "./index.css";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { GrLinkedinOption } from "react-icons/gr";

interface LeadsCardProps {
  name: string;
  insta: string;
  linkedin: string;
  email: string;
  img: string;
  bio: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const LeadsCard: React.FC<LeadsCardProps> = ({ name, insta, linkedin, email, img, bio, onMouseEnter, onMouseLeave }) => {
  return (
    <section onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="h-fit overflow-hidden">
      <div className="lead-container w-full">
        <div className="box flex flex-col items-center">
          <div className="imgBox w-full overflow-hidden">
            <Image
              src={img}
              alt={name}
              width={550}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="glass p-4 w-full">
            <h3 className="text-center">
              {name}
              <br />
              <span>{bio}</span>
            </h3>
            <ul className="flex justify-center items-center gap-4 pt-2 -translate-y-2">
              <a className="cursor-pointer" href={`mailto:${email}`} rel="noopener noreferrer">
                <CiMail size={24} />
              </a>
              <a href={linkedin} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                <GrLinkedinOption size={24} />
              </a>
              <a href={insta} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                <LuInstagram size={24} />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadsCard;
