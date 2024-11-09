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
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="h-fit">
      <div className="container w-full">
        <div className="box">
          <div className="imgBox">
            <Image
              src={img}
              alt={name}
              width={600}
              height={500}
            />
          </div>
          <div className="glass">
            <h3>
              {name}
              <br />
              <p>{bio}</p>
            </h3>
            <ul className="flex justify-center items-center gap-4 pb-2">
              <a className="cursor-pointer" href={`mailto:${email}`}>
                <CiMail size={24} />
              </a>
              <a href={linkedin} className="cursor-pointer" target="_blank">
                <GrLinkedinOption size={24} />
              </a>
              <a href={insta} className="cursor-pointer" target="_blank">
                <LuInstagram size={24} />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadsCard;
