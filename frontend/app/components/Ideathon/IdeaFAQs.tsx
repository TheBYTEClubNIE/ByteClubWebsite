import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQ {
    question: string;
    answer: string;
  }


const faqs : FAQ[] =[
  {
    question: "What is BeyondBYTE Ideathon?",
    answer: "BeyondBYTE Ideathon is a premier national-level hackathon where students, developers, and tech enthusiasts collaborate to solve real-world problems through technology and innovation."
  },
  {
    question: "Who can participate?",
    answer: "Anyone passionate about technology, innovation, and problem-solving can participate! Whether you're a beginner or an experienced coder, Byte Ideathon welcomes everyone."
  },
  {
    question: "Do I need to have a team?",
    answer: "You can participate solo or in a team (typically 2-4 members). If you don’t have a team, we’ll help you find one!"
  },
  {
    question: "What are the prizes?",
    answer: "Exciting prizes, certificates, and networking opportunities with industry experts await the winners and participants!"
  },
  {
    question: "Will there be mentorship?",
    answer: "Yes! Experienced mentors will guide you throughout the event to refine your ideas and projects."
  },
];

const IdeaFAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-4 bg-gray-900 text-white text-center px-6 h-screen" id="faqs">
      <h2 className="text-5xl font-extrabold  text-yellow-400">FAQs</h2>
      <div className="h-1 w-32 bg-yellow-500 mb-20 mx-auto mt-2 rounded-full"></div>

      <div className="max-w-3xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-5 rounded-xl shadow-md">
            <button
              className="flex justify-between items-center w-full text-lg font-semibold text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-teal-400">{faq.question}</span>
              <FaChevronDown
                className={`text-yellow-400 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-3 text-left text-[1rem] text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdeaFAQs;
