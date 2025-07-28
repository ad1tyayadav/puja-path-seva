import React from "react";

const Kundli: React.FC = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <img
        src="/assets/bgdecore.png"
        alt="decoration"
        className="hidden md:block absolute -top-20 left-[600px] w-[300px] h-[300px] object-contain opacity-20 pointer-events-none"
      />
      <img
        src="/assets/bgdecore.png"
        alt="decoration"
        className="hidden md:block absolute bottom-0 right-0 w-[300px] h-[300px] object-contain opacity-20 pointer-events-none rotate-180"
      />
      <img
        src="/assets/bgdecore.png"
        alt="decoration"
        className="hidden md:block absolute -bottom-28 -left-16 w-[300px] h-[300px] object-contain opacity-20 pointer-events-none rotate-180"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-orange-500">Kundli</span>{" "}
            <span className="text-gray-900">Calculator</span>
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg mb-10">
            It is a unique astrological chart that provides insights into your
            life events, personality, and destiny. By creating a horoscope, aka
            Janam Kundli, with the help of a person's date of birth, place, and
            time, astrologers can analyze the positions of celestial bodies,
            including planets and constellations, at the exact moment of your
            birth. This ancient practice allows you to understand yourself
            better and navigate life's unexpected twists and turns.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition">
              Generate Kundli
            </button>
            <button className="bg-orange-50 text-orange-600 px-6 py-3 rounded-full font-medium border border-orange-200 hover:bg-orange-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#fbe7da] to-[#fcd9b5] p-6">
            <img
              src="/assets/HeroKundali.png"
              alt="Ganesh Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kundli;