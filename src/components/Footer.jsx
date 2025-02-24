import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#191A23] text-white px-6 md:px-16 py-10 font-['Space_Grotesk']">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">★ Positivus</h1>
          <button className="bg-[#B9FF66] text-black font-semibold px-4 py-1 rounded-md">
            Contact us:
          </button>
          <p className="text-gray-300">Email: info@positivus.com</p>
          <p className="text-gray-300">Phone: 555-567-8901</p>
          <p className="text-gray-300">
            Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
          {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white transition duration-300"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-[#23242C] p-4 rounded-lg flex items-center space-x-3">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border border-gray-500 text-white px-3 py-2 rounded-md focus:outline-none"
          />
          <button className="bg-[#B9FF66] text-black px-4 py-2 rounded-md font-semibold">
            Subscribe to news
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between text-gray-400 text-xs">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#" className="hover:text-white transition duration-300">
          Privacy Policy
        </a>
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://linkedin.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="LinkedIn"
              className="w-5 opacity-80 hover:opacity-100"
            />
          </a>
          <a href="https://facebook.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-5 opacity-80 hover:opacity-100"
            />
          </a>
          <a href="https://twitter.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-5 opacity-80 hover:opacity-100"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
