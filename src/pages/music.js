import React from "react";
import "../app/globals.css"; // Adjust path if needed
import Navbar from "../components/NavBar";
import { musicData } from '@/musicData';

const music = () => {
  return (
    <div className="min-h-screen bg-cream py-20 px-8 lg:px-16">
      {/* Navbar Section */}
      <div className="m-10">
        <Navbar />
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl font-serif text-center text-gray-900 mb-20 leading-tight tracking-wide">
        Concepts
      </h1>

      {/* Music Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {musicData.map((track, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Track Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-opacity-80">{track.description}</p>

            {/* Audio Player */}
            <audio controls className="w-full rounded-lg bg-gray-100 border-2 border-gray-200 shadow-md hover:border-gray-400 transition-all duration-300 ease-in-out">
              <source src={track.audioUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default music;
