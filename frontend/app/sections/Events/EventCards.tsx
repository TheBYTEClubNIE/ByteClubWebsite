import React from "react";
import "./Events.css";
import events from "./event.json";

const EventCards = () => {
  return (
    <div className="box-wrapper w-full min-h-screen">
      <div className="main h-72 flex justify-center items-center text-8xl m-0">
        <h2 className="first absolute">Events</h2>
        <h2 className="second absolute">Events</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {events.map((event) => (
          <figure key={event.id} className="shape-box relative overflow-hidden">
            <img className="w-full h-60 object-cover" src={event.imageUrl} alt="" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <figcaption className="absolute bottom-0 p-4 text-white z-10">
              <div className="show-cont">
                <h3 className="card-no text-2xl">{event.cardNo}</h3>
                <h4 className="card-main-title text-xl font-semibold">{event.title}</h4>
              </div>
              <p className="card-content mt-2 text-sm">{event.content}</p>
              <a href="#" className="read-more-btn text-blue-300 mt-4 inline-block">
                Read More
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default EventCards;
