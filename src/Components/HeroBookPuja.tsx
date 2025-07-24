const MALA_URL = "/assets/Mala1.png";
const SHIVA_URL = "/assets/BookPujaShivji.png";
const MANDALA_1_URL = "/assets/Mandala1.png";
const MANDALA_2_URL = "/assets/Mandala2.png";

function HeroBookPuja() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      
      {/* Background Decorative Mandalas */}
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-50 pointer-events-none">
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
          
          {/* Left Content Area */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
             style={{ fontFamily: "Playfair Display, serif" }}>
              Book a Sacred Puja for
              <span className="block text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text mt-2">
                You & Your Family
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">
              Performed at authentic temples by verified pandits.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Let the divine enter your home through live-streamed Vedic ceremonies. 
              Join devotees worldwide in timeless spiritual moments.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-300">
                Explore Puja Options
              </button>
            </div>
          </div>

          {/* Right Content Area - Shiva Image + Backgrounds */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">
            
            {/* Background Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-40 blur-2xl z-10"></div>
            
            {/* Mandala above the image */}
            <img 
              src={MALA_URL}
              alt="Mandala Decoration"
              className="hidden sm:block absolute -top-28 -right-10 w-80 max-w-lg opacity-30 z-30 pointer-events-none"
            />

            {/* Shiva Statue - no extra height around it */}
            <img 
              src={SHIVA_URL}
              alt="Lord Shiva Statue"
              className="hidden sm:block relative top-20 z-20 w-auto max-h-screen h-auto object-contain drop-shadow-2xl transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HeroBookPuja;
