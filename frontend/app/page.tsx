'use client'

import Image from "next/image";
import {useEffect, useState } from "react";
import Loading from "./components/Loading/loading";


export default function Home() {

  const [loader, setLoader] = useState(true)
  useEffect(()=>{

    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
  
  },[])
  if(loader) return <Loading/>

  return (
    <>
      <h1>home</h1>
      
    </>
  );
}

