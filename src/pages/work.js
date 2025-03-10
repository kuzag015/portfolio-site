import React, { useState } from 'react';
import { filmData } from '@/filmData';
import Navbar from '../components/NavBar';
import '../app/globals.css';

const Work = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (index) => {
    setPlayingIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPlayingIndex(null);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center">FILM WORK</h1>

      {/* Navbar component */}
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filmData.map((film, index) => (
          <div
            key={index}
            className={`relative bg-white shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out cursor-pointer rounded-md ${
              film.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1'
            }`}
            onClick={() => handleCardClick(index)}
          >
            {playingIndex === index ? (
              <video
                src={film.video}
                controls
                autoPlay
                className={`w-full ${film.size === 'large' ? 'h-72 sm:h-96' : 'h-48 sm:h-56'} object-cover`}
              />
            ) : (
              <img
                src={film.poster}
                alt={film.title}
                className={`w-full ${film.size === 'large' ? 'h-72 sm:h-96' : 'h-48 sm:h-56'} object-cover`}
              />
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-4 text-white">
              <p className="text-lg font-semibold">{film.title}</p>
              <p className="text-sm">{film.director}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <video
              src={filmData[playingIndex].video}
              controls
              autoPlay
              className="w-full h-96 object-cover"
            />
            <div className="mt-4 text-center">
              <p className="text-2xl font-semibold">{filmData[playingIndex].title}</p>
              <p className="text-lg text-gray-600">{filmData[playingIndex].director}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
