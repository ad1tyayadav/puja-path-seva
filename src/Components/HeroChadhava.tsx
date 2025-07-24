import React from "react";

const MALA_URL = "/assets/Mala1.png";
const Ganeshji = "/assets/ganeshji.png"; // Replace with your Chadhava hero image
const MANDALA_1_URL = "/assets/Mandala1.png";
const MANDALA_2_URL = "/assets/Mandala2.png";

const HeroChadhava: React.FC = () => {
  return (
<div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      
      {/* Decorative Background Mandalas */}
      <div aria-hidden className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <img
          src={MANDALA_2_URL}
          alt=""
          className="absolute top-[-10%] left-[-10%] w-[40vw] max-w-[400px] animate-spin-slow"
        />
        <img
          src={MANDALA_1_URL}
          alt=""
          className="absolute bottom-[-10%] right-[-10%] w-[20vw] max-w-[400px] animate-spin-slow-reverse"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          
          {/* Left Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
             style={{ fontFamily: "Playfair Display, serif" }}>
              Offer your heartfelt{" "}
              <span className="block text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text mt-2">
                Chadhava to the Divine
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">
              Direct from your heart to sacred temples across India.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Experience a spiritual connection with your deity. We ensure your
              offerings are delivered with devotion and authenticity.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-300">
                Offer Chadhava Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-40 blur-2xl z-10" />
            
            {/* Decorative Mala */}
            <img
              src={MALA_URL}
              alt="Mandala Decoration"
              className="hidden sm:block absolute -top-28 -right-10 w-80 max-w-lg opacity-30 z-30 pointer-events-none"
            />

            {/* Chadhava Image */}
            <img
              src={Ganeshji}
              alt="Chadhava Offering"
              className="hidden sm:block relative top-20 z-20 w-auto h-88 rounded-full object-contain drop-shadow-2xl transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroChadhava;
