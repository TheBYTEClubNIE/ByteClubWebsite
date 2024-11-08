'use client';

// import React from 'react';
import './footer.scss'; // Optional: Import CSS if needed
import logo from "../../../public/ByteLogo.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="">
                <div className="footer-content pt-5 pb-5 -z-10">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-4">
                            <div className="footer-widget">
                                <div className="footer-logo inline-block float-left px-8" id='logo'>
                                    <a href="index.html" className='shadowfilter'><Image  src={logo} alt="logo" className="size-24" /></a>
                                </div>
                                <div className="footer-text">
                                    <p className='w-2/3 h-24 content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Cras quis elit sit amet turpis dictum placerat. Curabitur vehicula eros vitae lacus volutpat, a convallis erat facilisis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='px-8'>Useful Links</h3>
                                </div>
                                <div className='grid grid-cols-2 w-full justify-between '>
                                    <ul className='inline-block text-center'>
                                        <li><p className='ease-in-out duration-300 text-lg font-bold underline foot-subhead'>Navigate</p></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/home">Home</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/events">Events</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/about">About</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/contact">Contact</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/review">Review</a></li>
                                    </ul>
                                    <ul  className='inline-block text-center'>
                                        <li><p className='ease-in-out duration-300 text-lg font-bold underline foot-subhead'>More Info</p></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/home">Term & Services</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/events">Sponsors</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/about">Privacy Policy</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/contact">Know More</a></li>
                                        <li><a className='ease-in-out duration-300 text-md font-semibold' href="/review">Review</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-2 text-center">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className='px-8'>Subscribe</h3>
                                </div>
                                <div className="social-links justify-center my-2">
                                    <a href=""><i className="fab fa-facebook-f z-50"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-github"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <div className="footer-text">
                                    <p>Don’t forget to subscribe to our new feeds, to not to miss any info.</p>
                                </div>
                                <div className="copyright-text">
                <p>&copy; 2024, All Rights Reserved <a href="https://en.wikipedia.org/wiki/Sean_Combs" target='#blank'>Diddy</a></p>
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
