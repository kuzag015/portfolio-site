// Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8">
      <Link href="/" className="text-3xl font-bold text-black">
        <span className="text-xl font-semibold">GK</span> {/* Replace with the "GK" monogram */}
      </Link>

      <div className="flex space-x-6">
        <Link href="/about" className="text-lg text-gray-900 hover:text-black">About</Link>
        <Link href="/services" className="text-lg text-gray-900 hover:text-black">Services</Link>
        <Link href="/work" className="text-lg text-gray-900 hover:text-black">Work</Link>
        <Link href="/music" className="text-lg text-gray-900 hover:text-black">Music Production</Link> {/* Added Music Production link */}
        <Link href="/contact" className="text-lg text-gray-900 hover:text-black">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
