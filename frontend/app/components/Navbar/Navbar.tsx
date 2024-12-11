'use client'

import "./navbar.css"

import React, { useEffect } from "react";
import {
  MdHome,
  MdInfo,
  MdEmail,
  MdEmojiEvents,
  MdRateReview,
} from "react-icons/md";

const Navbar: React.FC = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON") {
        const activeButton = document.querySelector("nav .active");
        if (activeButton) {
          activeButton.classList.remove("active");
        }
        target.classList.add("active");
      }
    };

    const nav = document.querySelector("nav");
    if (nav) {
      nav.addEventListener("click", handleClick);
    }

    return () => {
      if (nav) {
        nav.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-fit z-50 absolute ">
      <nav className="navbar fixed w-max backdrop:blur-md bg-transparent mt-28 shadow-sm backdrop-blur-md">
        <button type="button" title="Events">
          <a className="material-symbols-outlined" href="#events">
            
            <MdEmojiEvents />
          </a>
        </button>
        <button type="button" title="About">
          <a className="material-symbols-outlined" href="#about">
            <MdInfo />
          </a>
        </button>
        <button type="button" className="active" title="Home">
          <a className="material-symbols-outlined" href="#home">
            <MdHome />
          </a>
        </button>
        <button type="button" title="Review">
          <a className="material-symbols-outlined" href="#review">
            <MdRateReview />
          </a>
        </button>
        <button type="button" title="Feedback">
          <a className="material-symbols-outlined" href="#WriteReview">
            <MdEmail />
          </a>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
