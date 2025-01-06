import React from 'react';
import './HeroSection.css';

export function HeroSection() {
  return (
    <>
    <div className="hero-section">
      {/* Left Content */}
      <div className="hero-content">
        <h1>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media marketing,
          and content creation.
        </p>
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
