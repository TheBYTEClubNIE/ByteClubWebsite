"use client";

import "./navbar.css";

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
      const target = (e.target as HTMLElement).closest("button");

      if (!target) return;

      const activeButton = document.querySelector(".btn.active");
      if (activeButton) {
        activeButton.classList.remove("active");
      }

      target.classList.add("active");
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
    <div className="flex items-center justify-center w-full h-fit z-50 absolute">
      <nav className="navbar fixed w-max backdrop:blur-md bg-transparent mt-28 shadow-sm backdrop-blur-md">
        <button type="button" title="About" className="btn" onClick={() => window.location.href = "#about"}>
          <MdInfo />
        </button>
        <button type="button" title="Events" className="btn" onClick={() => window.location.href = "#events"}>
          <MdEmojiEvents />
        </button>
        <button type="button" className="active btn" title="Home" onClick={() => window.location.href = "#home"}>
          <MdHome />
        </button>
        <button type="button" title="Review" className="btn" onClick={() => window.location.href = "#review"}>
          <MdRateReview />
        </button>
        <button type="button" title="Feedback" className="btn" onClick={() => window.location.href = "#write-review"}>
          <MdEmail />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
