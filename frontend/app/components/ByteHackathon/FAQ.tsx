"use client";
import { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import gsap from "gsap";

const faqs = [
  {
    question: "What is Byte?",
    answer:
      "Byte is a 36-hour hackathon with the goal of uniting talented developers and designers under one roof and encouraging healthy competition among them...",
  },
  {
    question: "How many members are allowed in the team?",
    answer: "A team can have a minimum of 2 and a maximum of 4 members.",
  },
  {
    question: "Do I need to pay to register?",
    answer: "No, registration is completely free!",
  },
  {
    question: "Is it necessary for the participants to be from the same university?",
    answer:
      "No, your team can have members from different universities across the globe since it's an offline hack!",
  },
  {
    question: "How do I submit my final product?",
    answer:
      "Your code must be uploaded to a GitHub repo with a detailed README, and you'll need to submit the repo link.",
  },
];

const ByteHackathonFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]); // ✅ Properly typed ref array

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".faq-container",
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
            );
            observer.disconnect(); // Stop observing after animation runs
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);

    if (faqRefs.current[index]) {
      gsap.fromTo(
        faqRefs.current[index],
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  return (
    <div ref={sectionRef} id="FAQs" className="min-h-screen bg-gray-900 text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-8">
          🔥 Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
                faqRefs.current[index] = el; // ✅ Now returns void, fixing TS error
              }}
              className="faq-container border border-gray-700 rounded-lg p-4 bg-gray-900 shadow-md opacity-0"
            >
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-left transition-all duration-300 hover:text-blue-400"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByteHackathonFAQ;
