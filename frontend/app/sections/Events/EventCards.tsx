import React from "react";
import "./Events.css";
import events from "./event.json";

const EventCards = () => {
  return (
    <div className="box-wrapper w-full min-h-screen p-4 flex justify-center items-center flex-col">
      <div className="main h-72 flex justify-center items-center text-8xl m-0 relative">
        <h2 className="first absolute">Events</h2>
        <h2 className="second absolute">Events</h2>
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
  );
};

export default EventCards;
