import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ContactUs from "./components/Contactus";
import { Services } from "./components/Services";
import HeroSection from "./components/HeroSection";
import CardContainer from "./CardContainer";
import LoadingWave from "./components/LoadingWave";
// import ScrollProgress from "./components/ScrollProgress"; // Import the progress bar
import Footer from "./components/Footer";

import "./App.css";
import WorkingProcess from "./components/WorkingProcess";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <LoadingWave />
        </div>
      ) : (
        <>
          {/* <ScrollProgress />  */}
          <Navbar />
          <HeroSection text="Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation." />
          <Services />
          <CardContainer />
          <WorkingProcess />
          <ContactUs />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
