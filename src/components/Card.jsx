import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
const Card = ({
  image,
  title,
  onLearnMore,
  backgroundColor,
  textbackgroundColor,
}) => {
  return (
    <div className="card" style={{ backgroundColor }}>
      <h2
        className="card-title"
        style={{ backgroundColor: textbackgroundColor }}
      >
        {title}
      </h2>
      <img src={image} alt="Illustration" className="card-image" />
      <button
        className=" text-black font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-[#A8F055] hover:shadow-lg active:scale-95"
        onClick={onLearnMore}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
