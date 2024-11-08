"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading/loading";
import Navbar from "./components/Navbar";
// import ReviewSection from "./sections/review/ReviewSection";
import Leads from "./sections/leads/Leads";
import Footer from "./sections/Footer/Footer";

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
    }, 5500);
  }, []);
  if (loader) return <Loading />;



  return (
    <div>
      <div style={content}>
      <Navbar />
      <Leads />
      {/* <ReviewSection /> */}
      </div>
      <Footer/>
    </div>
  );
}
