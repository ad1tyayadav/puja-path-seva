import React from "react";

const HeroDonations: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden sm:h-[75vh] h-sauto">

      {/* Decorative Background Mandalas */}
      <div aria-hidden className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <img
          src="/assets/Mandala2.png"
          alt=""
          className="absolute top-[-10%] left-[-10%] w-[40vw] max-w-[400px] animate-spin-slow"
        />
        <img
          src="/assets/Mandala1.png"
          alt=""
          className="absolute bottom-[-10%] right-[-10%] w-[20vw] max-w-[400px] animate-spin-slow-reverse"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 min-h-[85vh]">

          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-6 max-w-2xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Empower Seva &
              <span className="block text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text mt-2">
                Temple Donations
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">
              Support rituals, annadan, and sacred traditions across India.
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Your donation uplifts temple communities through pujas, Gaushala seva, and food offerings.
              Let your generosity reach holy places and sustain the divine spirit.
            </p>
            <div className="space-y-4 pt-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-200 focus:outline-none focus:ring-4 focus:ring-orange-300 m-2">
                View Upcoming Chadhava
              </button>
              <button className="border-2 border-orange-400 text-orange-600 bg-orange-50 px-8 py-3 rounded-full text-lg font-medium hover:bg-orange-100 hover:border-orange-500 transition-all duration-300">
                How It Works
              </button>
            </div>
          </div>

          {/* Kite Style - styling */}
          {/* <div className="hidden lg:block  lg:w-1/2 h-[80vh] mt-12 lg:mt-0 flex items-center justify-center">
            <div className="relative w-[340px] h-[340px] rotate-45  -right-32 top-36"> */}

          {/* Top Left */}
          {/* <div className="kite-wrapper" style={{ top: 0, left: 0 }}>
                <div className="kite-border" style={{ borderColor: '#fb923c' }}></div>
                <img
                  src="/assets/Kedarnath.jpg"
                  alt="Kite Temple"
                  className="kite-image"
                />
              </div> */}

          {/* Top Right */}
          {/* <div className="kite-wrapper" style={{ top: 0, right: 0 }}>
                <div className="kite-border" style={{ borderColor: '#f97316' }}></div>
                <img
                  src="/assets/Donation.png"
                  alt="Palace Temple"
                  className="kite-image"
                />
              </div> */}

          {/* Bottom Left */}
          {/* <div className="kite-wrapper" style={{ bottom: 0, left: 0 }}>
                <div className="kite-border" style={{ borderColor: '#60a5fa' }}></div>
                <img
                  src="/assets/Shivji1.png"
                  alt="Golden Temple"
                  className="kite-image"
                />
              </div> */}

          {/* Bottom Right */}
          {/* <div className="kite-wrapper" style={{ bottom: 0, right: 0 }}>
                <div className="kite-border" style={{ borderColor: '#facc15' }}></div>
                <img
                  src="/assets/Ganesh1.png"
                  alt="Ganga Aarti"
                  className="kite-image"
                />
              </div>

            </div>
          </div> */}

          {/* Currently Image section */}
          <div className="lg:w-1/2 relative flex items-center justify-center w-full">

            <div className="absolute w-72 sm:w-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-40 blur-2xl z-10" />

            <img
              src="/assets/Mala1.png"
              alt="Mandala Decoration"
              className="hidden sm:block absolute -top-24 -right-8 w-80 max-w-lg opacity-30 z-30 pointer-events-none"
            />
            {/* Chadhava Image */}
            <img
              src="/assets/Donation.png"
              alt="Chadhava Offering"
              className="hidden sm:block relative top-20 z-20 w-auto h-80 rounded-full object-contain drop-shadow-2xl transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroDonations;
