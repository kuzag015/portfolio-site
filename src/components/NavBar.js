import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-transparent relative top-0 left-0 right-0 z-50 mb-16">
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold text-black">
        <span className="text-xl font-semibold">GK</span>
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden" onClick={toggleMenu}>
        <button className="text-3xl text-black">
          {isMenuOpen ? '×' : '☰'} {/* Toggle between hamburger and close icon */}
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block lg:space-x-8 space-y-6 lg:space-y-0 flex-col lg:flex-row items-center`}
      >
        <Link href="/about" className="text-lg text-black hover:text-gray-700 transition-colors duration-300 px-4 py-2">
          About
        </Link>
        <Link href="/services" className="text-lg text-black hover:text-gray-700 transition-colors duration-300 px-4 py-2">
          Services
        </Link>
        <Link href="/work" className="text-lg text-black hover:text-gray-700 transition-colors duration-300 px-4 py-2">
          Work
        </Link>
        <Link href="/music" className="text-lg text-black hover:text-gray-700 transition-colors duration-300 px-4 py-2">
          Music Production
        </Link>
        <Link href="/contact" className="text-lg text-black hover:text-gray-700 transition-colors duration-300 px-4 py-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
