import React from "react";
import Link from "next/link";
import "../app/globals.css"; // Adjust path if needed
import Navbar from '../components/NavBar'; 
import Image from 'next/image';

const About = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-between px-4 py-20 overflow-hidden"
      style={{ backgroundImage: "url(/filmClips/background.jpg)" }} // Updated to use background.jpg
    >
      <Navbar />
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full relative z-10">
        {/* Image container with link */}
        <div className="col-span-1 md:col-span-5 relative flex justify-center">
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
            is a versatile composer, producer, and
            multi-instrumentalist whose work seamlessly blends modern aesthetics
            with timeless, classical sensibilities. With a deep understanding of
            musical tradition and a keen ear for contemporary sound, Gabriel
            creates immersive, dynamic scores that resonate emotionally with
            audiences. Drawing from a broad palette of genres—ranging from jazz
            and R&B to ambient and avant-garde music—his compositions tell
            stories that feel both fresh and familiar. Known for his graceful,
            understated approach, Gabriel’s work speaks with a quiet confidence,
            always in service of the narrative. Whether crafting delicate
            atmospheres or bold sonic landscapes, he possesses a rare ability to
            balance complexity with accessibility, offering nuanced layers
            without overwhelming the listener. Gabriel’s deep connection to
            music and its potential to evoke profound emotions has made him a
            trusted collaborator for filmmakers, content creators, and artists
            looking for soundtracks that enhance and elevate their vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
