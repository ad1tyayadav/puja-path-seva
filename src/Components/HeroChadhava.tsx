import Kedarnath from "/assets/Kedarnath.jpg"
import Ganesh from "/assets/Ganesh1.png"
import Shivji from "/assets/Shivji1.png"

function HeroChadhava() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Decorative Mandalas */}
      <div className="absolute top-20 left-16 w-40 h-40 lg:w-64 lg:h-64 opacity-30">
        <img
          src="/assets/Mandala2.png"
          alt=""
          className="w-full h-full object-contain animate-spin-slow"
        />
      </div>

      <div className="absolute bottom-20 right-16 w-48 h-48 lg:w-80 lg:h-80 opacity-20">
        <img
          src="/assets/Mandala2.png"
          alt=""
          className="w-full h-full object-contain animate-spin-slow-reverse"
        />
      </div>

      {/* Decorative Lotus Circle */}
      <div className="hidden md:block absolute bottom-20 right-16 w-80 h-80 opacity-6">
        <div className="w-full h-full rounded-full border-4 border-red-200 relative">
          <div className="absolute inset-6 rounded-full border-3 border-red-300">
            <div className="absolute inset-6 rounded-full border-2 border-red-400">
              <div className="absolute inset-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-red-300 rounded-full"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-red-300 rounded-full"></div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-6 bg-red-300 rounded-full"></div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-6 bg-red-300 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh]">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 pt-8 lg:pt-16 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-4">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-snug sm:leading-tight"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 800,
                }}
              >
                Join Sacred Chadhava
              </h1>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text leading-snug sm:leading-tight"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 800,
                }}
              >
                Ceremonies & Rituals
              </h2>
            </div>

            <h3
              className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-800 max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Experience divine blessings through authentic traditions
            </h3>

            <p
              className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-xl leading-relaxed font-extrabold mx-auto lg:mx-0"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              performed by experienced practitioners worldwide
            </p>
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-1/2 relative h-[60vh] sm:h-[70vh] lg:h-[85vh] mt-10 lg:mt-0 flex items-center justify-center">
            {/* All Three Images */}
            <div className="relative z-20 flex items-center justify-center">
              <img
                src={Shivji}
                alt="Chadhava Ceremony with Sacred Offerings"
                className="relative w-56 sm:w-64 lg:w-80 h-auto -top-20 sm:top-0 sm:h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>

            <div className="hidden md:block absolute top-10 right-4 z-15">
              <div className="bg-gradient-to-br from-red-400 to-orange-400 p-1 rounded-2xl shadow-xl">
                <img
                  src={Ganesh}
                  alt="Sacred Ritual Space"
                  className="w-60 h-40 object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="hidden md:block absolute bottom-16 left-4 z-15">
              <div className="bg-gradient-to-br from-red-400 to-orange-400 p-1 rounded-2xl shadow-xl">
                <img
                  src={Kedarnath}
                  alt="Traditional Prayer Ceremony"
                  className="w-60 h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-2 lg:mt-0 absolute bottom-20 lg:bottom-10 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto z-30">
          <button
            className="bg-gradient-to-r from-red-400 to-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-extrabold hover:from-red-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            📿 Explore Chadhava Events
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroChadhava;
