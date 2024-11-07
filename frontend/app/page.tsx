"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading/loading";
import Navbar from "./components/Navbar";
import ReviewSection from "./sections/review/ReviewSection";
import Leads from "./sections/leads/Leads";

export default function Home() {
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 5500);
  // }, []);
  // if (loader) return <Loading />;

  return (
    <div>

      <Navbar />
      <Leads />
      <ReviewSection />
    </div>
  );
}
