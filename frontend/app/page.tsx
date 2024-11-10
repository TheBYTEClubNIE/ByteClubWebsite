"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading/loading";
import Navbar from "./components/Navbar";
import ReviewSection from "./sections/review/ReviewSection";
import Leads from "./sections/leads/Leads";
import Footer from "./sections/Footer/Footer";
import FrontLogo from "./components/FrontLogo/FrontLogo";
import WriteReview from "./sections/WriteReview/WriteReview";

const content: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#000',
  position: 'relative',
  zIndex: 1,
};


export default function Home() {


  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5500);
  }, []);

  return loader ? (
    <Loading />
  ) : (
    <div>
      <div style={content}>
      <Navbar />
      <FrontLogo/>
      <Leads />
      <WriteReview/>
      <ReviewSection />
      </div>
      <Footer/>
    </div>
  );
}
