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
    <section onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="h-fit">
      <div className="lead-container w-full">
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
              <span>{bio}</span>
            </h3>
            <ul className="flex justify-center items-center gap-4 pb-2">
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
}
export default LeadsCard;