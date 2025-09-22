import React from "react";
import { Dropdown } from "./IdeaDropdown";

const IdeaProblem = () => {
    return (
        <div className="container mx-auto px-4 lg:px-20 pb-16 pt-24" id="problems">
            <h1 className="mb-4 text-center text-yellow-500 mx-auto text-2xl font-extrabold pb-2 sm:text-4xl md:text-5xl border-b-4 border-yellow-500 ">
                Problem Statement
            </h1>

            <div className="space-y-4 text-white" >
                <Dropdown title="Artificial Intelligence and Machine Learning">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2 ">
                            <li className="font-bold text-yellow-100">
                                The Resume Black Hole
                                <p className="font-normal text-white">
                                    Every job posting receives hundreds of
                                    applications, but most candidates never hear
                                    back. Recruiters spend hours manually
                                    screening resumes, often overlooking great
                                    talent due to keyword mismatches or
                                    unconscious biases. The hiring process
                                    remains slow, inconsistent, and frustrating
                                    for both employers and job seekers. How can
                                    we create a fair, efficient, and scalable
                                    way to match candidates with job openings
                                    while ensuring diversity and inclusion?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                News or Noise?
                                <p className="font-normal text-white">
                                    Social media is flooded with misinformation,
                                    and distinguishing fact from fiction has
                                    become nearly impossible. Fake news spreads
                                    faster than real news, shaping public
                                    opinion and even influencing elections.
                                    Manual fact-checking is too slow to keep up.
                                    How can we build a system that helps people
                                    instantly verify the credibility of news
                                    articles, tweets, and posts before they
                                    share them?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                The Traffic Jam That Shouldn’t Exist
                                <p className="font-normal text-white">
                                    Every day, millions of people waste hours
                                    stuck in traffic due to poorly optimized
                                    traffic signals and outdated road planning.
                                    Many intersections still operate on fixed
                                    timers, even when no cars are present.
                                    Emergency vehicles struggle to get through
                                    congested roads, causing preventable delays.
                                    How can we make traffic management smarter,
                                    more dynamic, and responsive to real-time
                                    road conditions?
                                </p>
                            </li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="Ecommerce">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li className="font-bold text-yellow-100">
                                The Shopping Maze
                                <p className="font-normal text-white">
                                    Online shoppers are bombarded with thousands
                                    of product choices, leading to decision
                                    fatigue. Many rely on fake reviews,
                                    misleading ads, or outdated recommendations.
                                    As a result, people either buy the wrong
                                    product or give up altogether. How can we
                                    create a system that helps shoppers quickly
                                    find the perfect product without wasting
                                    time and money?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                The Discount That Disappeared
                                <p className="font-normal text-white">
                                    Online prices fluctuate constantly, and
                                    shoppers often miss out on the best deals.
                                    Many add items to their carts, only to see
                                    the price increase at checkout. Others spend
                                    hours manually comparing prices across
                                    different websites. How can we ensure that
                                    customers always get the best possible price
                                    without the hassle?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                Reviews You Can’t Trust
                                <p className="font-normal text-white">
                                    Most product reviews are either fake,
                                    biased, or misleading. Some are paid
                                    promotions, while others come from users
                                    with no real experience. Shoppers don’t know
                                    which reviews to trust, leading to bad
                                    purchase decisions and frustration. How can
                                    we create a system that verifies and
                                    prioritizes authentic, unbiased customer
                                    feedback?
                                </p>
                            </li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="Web3/Blockchain">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li className="font-bold text-yellow-100">
                                The Vote That Vanished
                                <p className="font-normal text-white">
                                    Elections and surveys are plagued with
                                    fraud, manipulation, and lack of
                                    transparency. People don’t trust the
                                    process, and results are often disputed.
                                    Voter turnout remains low because the system
                                    is inconvenient or inaccessible. How can we
                                    create a voting system that is secure,
                                    transparent, and fraud-proof?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                Who Owns This?
                                <p className="font-normal text-white">
                                    Digital content—art, music, and documents—is
                                    constantly stolen, copied, and resold
                                    without crediting the original creators.
                                    Musicians lose royalties, artists see their
                                    work used without permission, and businesses
                                    struggle to track ownership of intellectual
                                    property. How can we build a system that
                                    ensures creators get fair recognition and
                                    control over their work?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                Where Did My Donation Go?
                                <p className="font-normal text-white">
                                    People donate millions to charities and
                                    crowdfunding campaigns, yet most never know
                                    how their money is actually used.
                                    Corruption, mismanagement, and high
                                    administrative costs reduce the impact of
                                    donations. How can we build a system that
                                    tracks donations transparently and ensures
                                    funds are used for their intended purpose?
                                </p>
                            </li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="Cybersecurity">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li className="font-bold text-yellow-100">
                                The Link You Shouldn’t Have Clicked
                                <p className="font-normal text-white">
                                    Phishing scams trick millions of people into
                                    giving away sensitive information, leading
                                    to stolen identities and drained bank
                                    accounts. Fake emails and websites look
                                    increasingly real, making them hard to
                                    detect. How can we help users instantly
                                    recognize and avoid phishing attacks?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                The File You Shouldn’t Have Downloaded
                                <p className="font-normal text-white">
                                    Malicious files disguised as documents,
                                    apps, or attachments are one of the biggest
                                    cybersecurity threats. Employees and
                                    individuals frequently download harmful
                                    software without realizing it. How can we
                                    create a system that detects and blocks
                                    suspicious files before they cause damage?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                The Camera That’s Watching You
                                <p className="font-normal text-white">
                                    Smart home devices, security cameras, and
                                    IoT gadgets can be hacked, allowing
                                    attackers to spy on people in their own
                                    homes. Most users don’t know if their
                                    devices have been compromised. How can we
                                    create a system that monitors and alerts
                                    users if their connected devices are being
                                    accessed by unauthorized parties?
                                </p>
                            </li>
                        </ul>
                    </div>
                </Dropdown>

                <Dropdown title="Smart Cities">
                    <div className="space-y-4">
                        <ul className="ml-5 list-disc space-y-2">
                            <li className="font-bold text-yellow-100">
                                The Pollution You Can’t See
                                <p className="font-normal text-white">
                                    Air pollution levels vary across different
                                    city areas, yet most people rely on generic
                                    weather apps that don’t provide real-time,
                                    localized air quality data. How can we
                                    create a system that gives people live,
                                    location-based air pollution updates to help
                                    them make informed decisions?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                The Streetlight That Never Sleeps
                                <p className="font-normal text-white">
                                    Many streetlights remain on during the day,
                                    wasting energy, while others fail at night,
                                    creating unsafe areas. Traditional lighting
                                    systems lack adaptive control, leading to
                                    unnecessary electricity consumption and
                                    increased maintenance costs. How can we
                                    build an intelligent street lighting system
                                    that optimizes energy use and ensures public
                                    safety?
                                </p>
                            </li>
                            <li className="font-bold text-yellow-100">
                                The Parking Spot You’ll Never Find
                                <p className="font-normal text-white">
                                    Drivers spend a significant amount of time
                                    searching for parking, causing unnecessary
                                    congestion and fuel waste. Many available
                                    parking spots remain unused simply because
                                    they are not visible or properly managed.
                                    How can we develop a real-time parking
                                    solution that efficiently guides drivers to
                                    the nearest available spots?
                                </p>
                            </li>
                        </ul>
                    </div>
                </Dropdown>

                <div className="w-full text-center">
                    <button
                        onClick={() => (window.location.href = "https://drive.google.com/file/d/1HEYYnkwAR-Hgz77kqFlzEJcd3t4kAVGu/view")}
                        className="px-4 py-2 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IdeaProblem;
