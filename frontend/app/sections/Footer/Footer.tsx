"use client";

// import React from 'react';
import "./footer.scss"; // Optional: Import CSS if needed
import logo from "../../../public/ByteLogo.png";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="">
                <div className="footer-content pt-5 pb-5 -z-10">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-2">
                            <div className="footer-widget">
                                <div
                                    className="footer-logo flex justify-center px-8"
                                    id="logo"
                                >
                                    <a
                                        href="index.html"
                                        className=" a shadowfilter max-[640px]:flex max-[640px]:justify-center "
                                    >
                                        <Image
                                            src={logo}
                                            alt="logo"
                                            className="sm:size-28 md:size-32 max-[640px]:size-28"
                                        />
                                    </a>
                                </div>
                                <div className="footer-text">
                                    <p className="max-[640px]:w-full max-[640px]:text-center lg:text-lg max-[640px]:p-4 w-2/3 mx-auto mt-4 sm:h-24 text-center max-[640px]:text-xs">
                                        The premier technical club of The National Institute of Engineering, fostering innovation and
                                        collaboration in coding, design, and
                                        emerging technologies through hands-on
                                        projects, events, and workshops.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className="px-8">Useful Links</h3>
                                </div>
                                <div className="w-full ">
                                    <ul className="flex md:w-2/3 lg:w-1/2 mx-auto justify-evenly max-[640px]:flex-wrap max-[640px]:gap-x-4">
                                        <li>
                                            <a
                                                className="a ease-in-out duration-300 text-md font-semibold text-gray-400 cursor-pointer hover:text-emerald-300"
                                                onClick={() =>
                                                    (window.location.href =
                                                        "#home")
                                                }
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="a ease-in-out duration-300 text-md font-semibold text-gray-400 cursor-pointer hover:text-emerald-300"
                                                onClick={() =>
                                                    (window.location.href =
                                                        "#about")
                                                }
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="a ease-in-out duration-300 text-md font-semibold text-gray-400 cursor-pointer hover:text-emerald-300"
                                                onClick={() =>
                                                    (window.location.href =
                                                        "#events")
                                                }
                                            >
                                                Events
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="a ease-in-out duration-300 text-md font-semibold text-gray-400 cursor-pointer hover:text-emerald-300"
                                                onClick={() =>
                                                    (window.location.href =
                                                        "#review")
                                                }
                                            >
                                                Reviews
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="a ease-in-out duration-300 text-md font-semibold text-gray-400 cursor-pointer hover:text-emerald-300"
                                                onClick={() =>
                                                    (window.location.href =
                                                        "#feedback")
                                                }
                                            >
                                                Feedback
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 text-center">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className="px-8">Subscribe</h3>
                                </div>
                                <div className="social-links justify-center sm:my-2 flex items-center">
                                    <a
                                        href="https://www.instagram.com/thebyteclubnie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                        className="a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2"
                                    >
                                        <FaInstagram
                                            className="fab size-6"
                                            size="24"
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/TheBYTEClubNIE"
                                        className="a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2"
                                    >
                                        <FaGithub
                                            className="fab size-6"
                                            size="24"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/the-byte-club-nie/posts/?feedView=all"
                                        className="a mx-8 my-0 flex justify-center items-center max-[640px]:mx-2"
                                    >
                                        <FaLinkedinIn
                                            className="fab  size-6"
                                            size="24"
                                        />
                                    </a>
                                </div>
                                <div className="footer-text max-[640px]:text-xs">
                                    <p>
                                        Don’t forget to subscribe to our new
                                        feeds, to not to miss any info.
                                    </p>
                                </div>
                                <div className="copyright-text max-[640px]:text-xs">
                                    <p>
                                        &copy; 2025, All Rights Reserved{" "}
                                        <a
                                            className="a"
                                            target="#blank"
                                        >
                                            The BYTE Club
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
