import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative flex justify-between bg-black px-6 py-4 lg:px-24 lg:py-12 gap-x-12 text-white">
      <div className="flex items-center justify-between gap-x-6 w-full lg:w-auto">
        <p className="text-4xl font-semibold">Wefo</p>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
        {/* Menu Items for Desktop */}
        <div className="hidden lg:flex items-center gap-x-8 border rounded-full px-4 py-1">
          <div className="hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>
          <div className="hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>
          <div className="hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>
          <div className="hover:bg-gray-700 rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>
        </div>
      </div>

      <button className="hidden lg:flex bg-blue-700 text-white items-center justify-center gap-x-4 py-3 px-4 rounded-full border border-black">
        <p>Start a Project</p>
        <img src="./arrow.png" alt="" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full bg-black text-white w-1/2 p-6 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-y-6">
          {/* Close Button */}
          <button className="self-end mb-6" onClick={toggleMobileMenu}>
            <FiX size={28} />
          </button>
          {/* Mobile Menu Items */}
          <div className="hover:bg-gray-700 w-full text-left rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>
          <div className="hover:bg-gray-700 w-full text-left rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>
          <div className="hover:bg-gray-700 w-full text-left rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>
          <div className="hover:bg-gray-700 w-full text-left rounded-full px-4 py-2 cursor-pointer">
            Menu Item
          </div>

          <button className="bg-blue-700 text-white flex items-center gap-x-4 py-2 px-4 rounded-full border border-black">
            <p>Start a Project</p>
            <img src="./arrow.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
