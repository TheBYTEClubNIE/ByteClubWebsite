import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SVGAnimation = () => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svgContainer = svgContainerRef.current;
    const svgHeight = 160; // Height of the SVG
    const minY = 5; // Minimum Y value for the curve (moving upwards more)
    const maxY = svgHeight - 5; // Maximum Y value for the curve (moving downwards more)

    let pathString = "M 120 60 Q 500 60 1400 60"; // Initial path

    if (svgContainer) {
      svgContainer.addEventListener("mousemove", (event) => {
        // Get the bounding box of the container
        const rect = svgContainer.getBoundingClientRect();

        // Calculate the mouse Y position relative to the container
        let mouseY = event.clientY - rect.top; // Subtract the container's top position

        // Scale the mouseY value to fill the desired range
        const scaleY = svgHeight / rect.height; // Scaling factor
        mouseY = mouseY * scaleY; // Scale mouseY to fit within SVG height

        // Ensure mouseY stays within bounds, clamping between minY and maxY
        mouseY = Math.min(Math.max(mouseY, minY), maxY);

        // Update the path string to reflect the mouse position
        pathString = `M 120 60 Q 500 ${mouseY} 1400 60`;

        // Animate the path using GSAP with no delay, making it smooth and seamless
        gsap.to(".string path", {
          duration: 0.05, // Short duration for seamless animation
          attr: { d: pathString },
        });
      });

      // Reset the path when the mouse leaves the container
      svgContainer.addEventListener("mouseleave", () => {
        pathString = "M 120 60 Q 500 60 1400 60"; // Reset to original path
        gsap.to(".string path", {
          duration: 0.6, // Slightly longer duration for smooth transition back
          ease: "elastic.out(1, 0.1)", // Apply rubberband easing
          attr: { d: pathString },
        });
      });

      // Cleanup event listeners when the component unmounts
      return () => {
        if (svgContainer) {
          svgContainer.removeEventListener("mousemove", () => {});
          svgContainer.removeEventListener("mouseleave", () => {});
        }
      };
    }
  }, []);

  return (
    <div
      ref={svgContainerRef}
      className="string z-1 w-full h-36 hidden lg:block"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Pseudo-element for background image */}
      <style>
        {`
          .string::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/SVGImage2.jpg');
            background-size: cover;
            background-position: center;
            opacity: 0.6; /* Set opacity of the background image here */
            z-index: -1; /* Make sure it's behind other content */
          }
        `}
      </style>

      <svg
        className="string"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 160" // Ensure responsive scaling
        width="100%" // Make SVG responsive
        height="160"
      >
        <path
          d="M 120 60 Q 500 60 1400 60"
          stroke="white"
          fill="transparent"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default SVGAnimation;
