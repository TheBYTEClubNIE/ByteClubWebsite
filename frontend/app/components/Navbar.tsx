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
        <button type="button">
          <span className="material-symbols-outlined">
            <MdHome />
          </span>
        </button>
        <button type="button">
          <span className="material-symbols-outlined">
            <MdInfo />
          </span>
        </button>
        <button type="button" className="active">
          <span className="material-symbols-outlined">
            <MdEmojiEvents />
          </span>
        </button>
        <button type="button">
          <span className="material-symbols-outlined">
            <MdRateReview />
          </span>
        </button>
        <button type="button">
          <span className="material-symbols-outlined">
            <MdEmail />
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
