"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading/loading";
import Navbar from "./components/Navbar/Navbar";
import Leads from "./sections/leads/Leads";
import Footer from "./sections/Footer/Footer";
import FrontLogo from "./components/FrontLogo/FrontLogo";
import ReviewSection from "./sections/review/ReviewSection";
import SVGAnimation from "./components/SVGAnimation";
import EventCards from "./sections/events/EventCards";
// import WriteReview from "./sections/WriteReview/WriteReview";
import SendReview from "./sections/WriteReview/SendReview";

const content: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#000',
  position: 'relative',
  zIndex: 1,
};


export default function Home() {


  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1900);
  }, []);

  return loader ? (
    <Loading />
  ) : (
    <div>
      <div style={content}>
      <Navbar />
      <FrontLogo />
      <SVGAnimation/>
      <Leads />
      <SVGAnimation/>
      <EventCards/>
      <SVGAnimation/>
      <ReviewSection />
      <SVGAnimation/>
      <SendReview/>
      </div>
      <Footer/>
    </div>
  );
}
