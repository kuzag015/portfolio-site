import React from "react";
import Link from "next/link";
import "../app/globals.css"; // Adjust path if needed
import Navbar from "../components/NavBar";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-between px-4 py-12 lg:py-20 overflow-hidden"
      style={{ backgroundImage: "url(/filmClips/background.jpg)" }} // Updated to use background.jpg
    >
      <Navbar />
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full relative z-10">
        {/* Image container with link */}
        <div className="col-span-1 md:col-span-5 relative flex justify-center mb-8 md:mb-0">
          <Link href="/" className="block group">
            <div className="absolute -top-4 -left-4 w-48 h-48 border-4 border-black"></div>
            <Image
              src="/filmClips/bio.jpg"
              alt="About me"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-md object-cover shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500"
              width={200}
              height={200}
            />
          </Link>
        </div>

        {/* Text container */}
        <div className="col-span-1 md:col-span-7">
          <h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            style={{ color: "white" }}
          >
            Gabe
          </h1>
          <p
            className="text-lg md:text-xl mt-6 leading-relaxed max-w-full md:max-w-2xl"
            style={{ color: "white" }}
          >
            Gabriel Kuzava is a composer, producer, and multi-instrumentalist
            whose work blends modern aesthetics with classical sensibilities.
            With a BFA in Jazz Studies from The New School for Jazz and
            Contemporary Music and a BA in Media Studies from Eugene Lang
            College, he draws from a wide range of influences, including jazz,
            R&B, ambient, and avant-garde music. His compositions balance
            complexity with accessibility, creating immersive, emotionally
            resonant scores that enhance the storytelling experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
