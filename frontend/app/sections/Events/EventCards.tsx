import React, { useEffect } from "react";
import "./Events.css";
import events from "./event.json";
import VanillaTilt from "vanilla-tilt";

const EventCards = () => {
  useEffect(() => {
    // Initialize VanillaTilt on all event cards
    const eventCards = document.querySelectorAll(".shape-box_half"); // Target individual event cards instead of the grid
    const eventCardsArray = Array.from(eventCards) as HTMLElement[]; // Convert NodeList to HTMLElement array

    eventCardsArray.forEach((card) => {
      VanillaTilt.init(card, {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 1,
      });
    });

    // Clean up on component unmount
    return () => {
      eventCardsArray.forEach((card) => {
        // Use 'as any' to bypass TypeScript checking for vanillaTilt
        if ((card as any).vanillaTilt) {
          (card as any).vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="box-wrapper w-full min-h-screen   ">
      <div className="w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] flex justify-center items-center flex-col">
        <div className="main lg:h-72 h-44 flex justify-center items-center text-6xl lg:text-8xl m-0 relative w-full">
          <img className="imgg h-36 lg:h-56" src="/textBackground2.png" alt="" />
          <h2 className="first absolute">Events</h2>
          <h2 className="second absolute ">Events</h2>
        </div>

        {/* Event Cards */}
        <div className="event-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <figure key={event.id} className="shape-box shape-box_half">
              <img src={event.imageUrl} alt="" />
              <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
              <figcaption>
                <div className="show-cont">
                  <h3 className="card-no">{event.cardNo}</h3>
                  <h4 className="card-main-title">{event.title}</h4>
                </div>
                <p className="card-content">{event.content}</p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
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