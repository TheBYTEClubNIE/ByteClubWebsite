"use client";

import "./navbar.css";
import React, { useEffect, useState } from "react";
import {
  MdHome,
  MdInfo,
  MdEmail,
  MdEmojiEvents,
  MdRateReview,
} from "react-icons/md";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const sections = ["home", "about", "events", "review", "write-review"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-fit z-50 absolute">
      <nav className="navbar fixed w-max backdrop:blur-md bg-transparent mt-28 shadow-sm backdrop-blur-md">
        <button
          type="button"
          title="About"
          className={`btn ${activeSection === "about" ? "active" : ""}`}
          onClick={() => (window.location.href = "#about")}
        >
          <MdInfo />
        </button>
        <button
          type="button"
          title="Events"
          className={`btn ${activeSection === "events" ? "active" : ""}`}
          onClick={() => (window.location.href = "#events")}
        >
          <MdEmojiEvents />
        </button>
        <button
          type="button"
          title="Home"
          className={`btn ${activeSection === "home" ? "active" : ""}`}
          onClick={() => {
            window.location.href = "#home";
            window.location.href = "#home-mb";
          }}
        >
          <MdHome />
        </button>
        <button
          type="button"
          title="Review"
          className={`btn ${activeSection === "review" ? "active" : ""}`}
          onClick={() => (window.location.href = "#review")}
        >
          <MdRateReview />
        </button>
        <button
          type="button"
          title="Feedback"
          className={`btn ${activeSection === "write-review" ? "active" : ""}`}
          onClick={() => (window.location.href = "#write-review")}
        >
          <MdEmail />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;