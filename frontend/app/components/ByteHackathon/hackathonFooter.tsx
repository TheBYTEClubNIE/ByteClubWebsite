import React from "react";
import {  FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function ByteFooter() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-8 px-6 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Name */}
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
          © {new Date().getFullYear()} <span className="font-bold text-black dark:text-white">ByteClub</span>. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          
          <Link
            href="https://www.linkedin.com/company/the-byte-club-nie/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin size={22} />
          </Link>

          <Link
            href="https://www.instagram.com/thebyteclubnie/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all transform hover:scale-110 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400"
          >
            <FaInstagram size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
