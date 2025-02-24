import React from "react";
import "./HeroSection.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }, // Controls delay per letter
  },
};
const letterVariants = {
  hidden: { opacity: 0, y: 10 }, // Letters start faded & slightly lower
  visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
};

export function HeroSection({ text }) {
  return (
    <>
      <div className="hero-section relative w-fit">
        {/* Left Content */}
        <div className="hero-content">
          <h1>Navigating the digital landscape for success</h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xs font-bold text-black gap-1"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <button className="hero-button">Book a consultation</button>
        </div>

        {/* Right Illustration */}
        <div className="hero-illustration">
          <img
            src="./src/assets/herosection.png"
            alt="Digital Marketing Illustration"
            className="illustration"
          />
        </div>
      </div>
      <div className="client-logos">
        <img src="./src/assets/amazon.png" alt="Amazon" />
        <img src="./src/assets/dribble.png" alt="Dribbble" />
        <img src="./src/assets/hubspot.png" alt="HubSpot" />
        <img src="./src/assets/notion.png" alt="Notion" />
        <img src="./src/assets/Netflix.png" alt="Netflix" />
        <img src="./src/assets/zoom.png" alt="Zoom" />
      </div>
    </>
  );
}

export default HeroSection;
