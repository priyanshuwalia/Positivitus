const Navbar = () => {
  return (
    <nav className="bg-[#191A23] text-white py-4 px-6 md:px-16 flex justify-between items-center font-['Space_Grotesk']">
      <h1 className="text-2xl font-bold">★ Positivitus</h1>
      <div className="space-x-6 hidden md:flex">
        {["Home", "Courses", "About", "Contact"].map((link, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            {link}
          </a>
        ))}
      </div>
      <button className="bg-[#B9FF66] text-black px-4 py-2 rounded-md font-semibold">
        Sign Up
      </button>
    </nav>
  );
};
export default Navbar;
