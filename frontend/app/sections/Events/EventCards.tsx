import React, { useEffect } from "react";
import "./Events.css";
import events from "./event.json";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";
import Link from "next/link";
// Extend HTMLElement to include the vanillaTilt property
interface TiltHTMLElement extends HTMLElement {
    vanillaTilt?: VanillaTilt;
}

const EventCards = () => {
    useEffect(() => {
        const eventCards = document.querySelectorAll(
            ".shape-box_half"
        ) as NodeListOf<TiltHTMLElement>;

        eventCards.forEach((card) => {
            VanillaTilt.init(card, {
                max: 15,
                speed: 300,
                glare: true,
                "max-glare": 1,
            });
        });

        // Cleanup on component unmount
        return () => {
            eventCards.forEach((card) => {
                card.vanillaTilt?.destroy(); // Safely call destroy if vanillaTilt exists
            });
        };
    }, []);

    return (
        <div className="box-wrapper w-full min-h-screen" id="events">
            <div className="w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex justify-center items-center flex-col">
                <div className="main lg:h-72 h-44 flex justify-center items-center text-6xl lg:text-8xl m-0 relative w-full">
                    <Image
                        width={450}
                        height={50}
                        className="imgg h-36 lg:h-56"
                        src="/textBackground2.png"
                        alt=""
                    />
                    <h2 className="first absolute">Events</h2>
                    <h2 className="second absolute">Events</h2>
                </div>

                <div className="event-grid flex flex-wrap justify-center gap-6">
                    {events.map((event) => (
                        <figure
                            key={event.id}
                            className="shape-box shape-box_half w-full md:w-1/2 lg:w-1/3 2xl:w-1/4"
                        >
                            <img
                                className="imgg h-36 lg:h-56"
                                src={event.imageUrl}
                                alt=""
                            />
                            <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                            <figcaption>
                                <div className="show-cont">
                                    <h3 className="card-no">{event.cardNo}</h3>
                                    <Link href={`/sections/events/${event.id}`}>
                                    <h4 className="card-main-title">
                                        {event.title}
                                    </h4>
                                    </Link>
                                </div>
                                <p className="card-content">{event.content}</p>
                                {/* <a href="#" className="read-more-btn">
                                    Read More
                                </a> */}
                            </figcaption>
                            <span className="after"></span>
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventCards;
