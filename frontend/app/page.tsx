'use client'

import Image from "next/image";
import {useEffect, useState } from "react";
import Loading from "./loading";

const Page = () => {

  const [loader, setLoader] = useState(true)

  useEffect(()=>{

    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
  
  },[])


  if(loader) return <Loading/>

export default function Home() {
  return (
    <>
      <h1>home</h1>
      
    </>
  );
}
