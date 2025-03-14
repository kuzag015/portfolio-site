import React from 'react';
import "../app/globals.css";
import Navbar from '../components/NavBar';

const Services = () => {
  return (
    <div className="min-h-screen bg-cream py-16 px-6 sm:px-12 lg:px-16 relative">
      <Navbar />

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-6xl font-serif text-center text-gray-900 mb-16 sm:mb-20 leading-tight tracking-wide">
        Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
        {/* Film Composition Card */}
        <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-none">
          <h2 className="text-7xl sm:text-5xl lg:text-6xl font-serif text-[#333] mb-6 sm:mb-8 leading-tight">Film Composition</h2>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            As a composer for film, I work closely with filmmakers to craft soundtracks that align with the visual narrative, enhancing the emotional depth of the story. My approach blends traditional orchestration with modern soundscapes to create a cohesive, impactful soundtrack.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
            Whether creating cinematic scores or experimental sound design, I ensure every composition feels unique while seamlessly fitting into the project. I prioritize clear communication with directors and producers to guarantee the music enhances the vision and resonates with the audience.
          </p>
        </div>

        {/* Editing & Mixing Card */}
        <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-none mt-8">
          <h2 className="text-7xl sm:text-5xl lg:text-7xl font-serif text-[#333] mb-6 sm:mb-8 leading-tight">Editing & Mixing</h2>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            With years of experience using industry-standard tools like Pro Tools, Logic Pro, and Ableton Live, I offer expert audio editing and mixing services for a variety of media. I ensure each track is polished, balanced, and optimized for the best possible sound quality.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
            Whether it’s for a film soundtrack, commercial project, or personal music, I meticulously work with each element to ensure clarity and sonic integrity. Utilizing cutting-edge technology, I deliver high-quality results, ensuring your project sounds as professional as possible.
          </p>
        </div>

        {/* Music Production Card */}
        <div className="bg-white p-8 sm:p-10 lg:p-12 rounded-none mt-4 lg:mt-8">
          <h2 className="text-7xl sm:text-5xl lg:text-6xl font-serif text-[#333] mb-6 sm:mb-8 leading-tight">Music Production</h2>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            With over a decade of experience in music production across genres like hip hop, R&B, and pop, I bring a wealth of knowledge and creativity to every project. I specialize in blending innovative sound design with refined production techniques to create tracks that stand out.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
            I collaborate closely with artists to bring their musical visions to life, offering sound design, arrangement, and engineering expertise. My goal is to produce music that is dynamic, commercially viable, and ready for global audiences.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mt-4">
            Equipped with industry-standard tools like Logic Pro, Ableton Live, and top-tier VST plugins, I ensure each track is crafted with the highest production values, from the initial idea to the final mix.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;