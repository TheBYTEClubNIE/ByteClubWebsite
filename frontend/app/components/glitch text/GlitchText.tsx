"use client";
import React from 'react';
import './index.css'; // Ensure the path to your CSS file is correct

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return (
    <div className="glitch-container text-5xl lg:text-6xl">
      <div className="glitch ">
        {text}
        <span className=' text-5xl lg:text-6xl'>{text}</span>
        <span className=' text-5xl lg:text-6xl'>{text}</span>
      </div>
    </div>
  );
}

export default GlitchText;
