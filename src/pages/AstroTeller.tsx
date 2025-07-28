import React from "react";

const AstroTellerSection: React.FC = () => {
    return (
        <div className="relative sm:h-[70vh] w-full bg-white overflow-hidden px-4 py-24">
            <img
                src="/assets/bgdecore.png"
                alt="Center decoration"
                className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
            />

            {/* Astrodecore Images */}
            {/* Top Left */}
<img
  src="/assets/astrodecore.png"
  alt="Top Left"
  className="hidden md:block absolute -top-40 -left-60 w-[400px] h-[400px] object-contain rotate-0"
/>

{/* Top Right */}
<img
  src="/assets/astrodecore.png"
  alt="Top Right"
  className="hidden md:block absolute -top-40 -right-60 w-[400px] h-[400px] object-contain rotate-90"
/>

{/* Bottom Left */}
<img
  src="/assets/astrodecore.png"
  alt="Bottom Left"
  className="hidden md:block absolute -bottom-40 -left-60 w-[400px] h-[400px] object-contain -rotate-90"
/>

{/* Bottom Right */}
<img
  src="/assets/astrodecore.png"
  alt="Bottom Right"
  className="hidden md:block absolute -bottom-40 -right-60 w-[400px] h-[400px] object-contain rotate-180"
/>


            {/* Main Content */}
            <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-orange-500">Astro</span>
                    <span className="text-gray-900"> Teller</span>
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    It is a unique astrological chart that provides insights into your
                    life events, personality, and destiny. By creating a horoscope, aka
                    Janam Kundli, with the help of a person's date of birth, place, and
                    time, astrologers can analyze the positions of celestial bodies,
                    including planets and constellations, at the exact moment of your
                    birth. This ancient practice allows you to understand yourself better
                    and navigate life's unexpected twists and turns.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default AstroTellerSection;