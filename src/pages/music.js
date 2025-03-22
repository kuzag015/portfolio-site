import React from "react";
import "../app/globals.css";
import Navbar from "../components/NavBar";
import { musicData } from "@/musicData";

const Music = () => {
  return (
    <div className="min-h-screen bg-cream py-16 px-6 lg:px-20">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-semibold font-serif text-center text-gray-900 mb-16 leading-snug tracking-wide">
        Concepts
      </h1>

      {/* Music Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {musicData.map((track, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-102 border-2 border-gray-300"
          >
            {/* Track Description */}
            <p className="text-lg text-gray-800 mb-5 leading-relaxed">
              {track.description}
            </p>

            {/* Audio Player */}
            <audio
              controls
              className="w-full rounded-lg bg-gray-100 border border-gray-300 shadow-sm hover:border-gray-500 transition-all duration-300 ease-in-out"
              aria-label={`Audio player for ${track.title}`}
            >
              <source src={track.audioUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
