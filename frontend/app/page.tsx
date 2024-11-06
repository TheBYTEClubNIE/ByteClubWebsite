"use client";

import { useEffect, useState } from "react";
import Loading from "./components/Loading/loading";
import Navbar from "./components/Navbar";

export default function Home() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5500);
  }, []);
  if (loader) return <Loading />;

  return (
    <>
      <Navbar />
      <h1>home</h1>
    </>
  );
}
