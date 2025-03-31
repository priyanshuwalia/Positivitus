import React from "react";

const ContactUs = () => {
  return (
    <div
      className="bg-gray-100 py-12 px-6 md:px-16 flex justify-center items-center min-h-screen "
      id="contact-us-container"
    >
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Left - Form */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-500 mt-2">
            Connect with us; let's discuss your digital marketing needs.
          </p>

          {/* Radio Selection */}
          <div className="flex space-x-4 mt-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contact-type"
                defaultChecked
                className="hidden peer"
              />
              <span className="w-4 h-4 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition"></span>
              <span className="text-gray-700">Say Hi</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact-type" className="hidden peer" />
              <span className="w-4 h-4 rounded-full border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 transition"></span>
              <span className="text-gray-700">Get a Quote</span>
            </label>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message*"
              required
              className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Image or Placeholder */}
        <div className="hidden md:block flex-1">
          <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
