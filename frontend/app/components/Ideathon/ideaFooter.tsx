import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section - About */}
        <div>
          <h3 className="text-2xl font-bold text-orange-400">Byte Ideathon</h3>
          <p className="mt-2 text-sm text-gray-400">
            A premier national-level hackathon fostering innovation, collaboration, and technology-driven problem-solving.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-teal-400">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#about" className="hover:text-orange-400 transition">About Us</a></li>
            <li><a href="#schedule" className="hover:text-orange-400 transition">Schedule</a></li>
            <li><a href="#faq" className="hover:text-orange-400 transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-purple-400">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-500 transition text-xl"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-xl"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-pink-500 transition text-xl"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-600 transition text-xl"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Byte Ideathon. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
