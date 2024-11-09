'use client'
import gsap from "gsap";
import { useEffect } from "react";
function ReviewAnimation() {
    useEffect(() => {
        const t1 = gsap.timeline();
        t1.from(".review-card", {
          x: "-450%", // Use 'x' for horizontal translation
          duration: 10,
          delay: 1,
          scrollTrigger: {
            trigger: ".main-review-card-container",
            markers: true, // Useful for debugging
            start: "top 0%",
            end: "bottom top",
            pin: true,
            scrub: 3,
          },
        });
      });
  return (
    <>

    </>
  )
}

export default ReviewAnimation