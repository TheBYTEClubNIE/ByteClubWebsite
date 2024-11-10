"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function BgTransition() {
  const img = [
    { url: "/review/slideshow/0.png" },
    { url: "/review/slideshow/1.jpg" },
    { url: "/review/slideshow/2.jpg" },
    { url: "/review/slideshow/3.jpg" },
    { url: "/review/slideshow/4.jpg" },
    { url: "/review/slideshow/5.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [img.length]);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden m-0">
      <ul className="relative w-full h-full m-0 p-0">
        {img.map((image, index) => (
          <li
            key={index}
            className={`absolute top-0 w-full h-full transition-opacity duration-1000
               ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'} ${index !== 0 ? 'filter blur-sm' : ''}`}
          >
            <Image
              src={image.url}
              alt={`Image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BgTransition;
