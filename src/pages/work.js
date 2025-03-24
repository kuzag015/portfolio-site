import React, { useState } from "react";
import ReactPlayer from "react-player";
import { filmData } from "@/filmData";
import Navbar from "../components/NavBar";
import "../app/globals.css";

const Work = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleCardClick = (film) => {
    setSelectedFilm(film);
  };

  const handleCloseModal = () => {
    setSelectedFilm(null);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center">
        FILM WORK
      </h1>

      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filmData.map((film, index) => (
          <div
            key={index}
            className="relative bg-white transform transition-transform duration-300 ease-in-out cursor-pointer rounded-none"
            onClick={() => handleCardClick(film)}
          >
            <img
              src={film.poster}
              alt={film.title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-4 text-white">
              <p className="text-lg font-semibold">{film.title}</p>
              <p className="text-sm">{film.director}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Video Modal */}
      {selectedFilm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full h-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            <ReactPlayer
              url={selectedFilm.video}
              controls
              playing
              width="90vw"
              height="90vh"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
