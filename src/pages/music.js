import React, { useState } from "react";
import { Howl } from "howler";
import Navbar from "../components/NavBar";
import { musicData } from "@/musicData";
import "../app/globals.css";

const Music = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [audioInstance, setAudioInstance] = useState(null);

  const handleTogglePlayPause = (index, audioUrl) => {
    if (playingIndex === index) {
      // If the same track is clicked again, pause it
      if (audioInstance) {
        audioInstance.pause();
      }
      setPlayingIndex(null); // Reset playing index
    } else {
      // Play a new track
      if (audioInstance) {
        audioInstance.stop();
      }
      const newAudio = new Howl({
        src: [audioUrl],
        html5: true, // Use HTML5 Audio for better compatibility
      });
      newAudio.play();
      setPlayingIndex(index);
      setAudioInstance(newAudio);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6 lg:px-20">
      <Navbar />

      <h1 className="text-5xl md:text-6xl font-semibold font-serif text-center text-black mb-16 leading-snug tracking-wide">
        Concepts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {musicData.map((track, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-200"
          >
            <div className="mb-5">
              <p className="text-lg text-black font-medium">{track.title}</p>
              <p className="text-sm text-gray-500">{track.mood}</p>
            </div>

            <p className="text-base text-gray-800 leading-relaxed mb-5">{track.description}</p>

            <div className="flex space-x-4">
              <button
                onClick={() => handleTogglePlayPause(index, track.audioUrl)}
                className="py-2 px-4 text-sm font-semibold border-2 border-black rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                {playingIndex === index ? "Pause" : "Play"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
