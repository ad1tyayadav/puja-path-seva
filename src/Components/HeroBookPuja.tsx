import React from 'react';

function BookPuja() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decorative elements - Enhanced for better layering */}
      <div className="absolute top-16 right-32 w-72 h-72 opacity-8">
        <div className="w-full h-full rounded-full border-4 border-orange-200 relative">
          <div className="absolute inset-4 rounded-full border-2 border-orange-300">
            <div className="absolute inset-4 rounded-full border-2 border-orange-400">
              <div className="absolute inset-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-8 w-56 h-56 opacity-8">
        <div className="w-full h-full rounded-full border-4 border-yellow-200 relative">
          <div className="absolute inset-3 rounded-full border-2 border-yellow-300">
            <div className="absolute inset-3 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/4 w-32 h-32 opacity-6">
        <div className="w-full h-full rounded-full border-2 border-orange-200 relative">
          <div className="absolute inset-2 rounded-full border border-orange-300 flex items-center justify-center">
            <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10 overflow-visible">
        <div className="flex flex-col lg:flex-row items-start justify-between min-h-[80vh] relative">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 pt-16">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Book a Sacred Puja for
              </h1>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text leading-tight">
                You & Your Family
              </h2>
            </div>
            
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800">
              Performed at authentic temples by verified pandits
            </h3>
            
            <p className="text-base lg:text-lg text-gray-600 max-w-xl leading-relaxed">
              Let the divine enter your home through live-streamed Vedic ceremonies. 
              Join devotees worldwide in timeless spiritual moments.
            </p>
            
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore puja options
            </button>
          </div>

          {/* Right Content - Images with proper positioning */}
          <div className="lg:w-1/2 relative h-[80vh] mt-12 lg:mt-0 overflow-visible">
            {/* Background Mandalas - positioned behind everything */}
            <div className="absolute inset-0 overflow-visible">
              <img 
                src="../assets/Mandala1.png" 
                alt="Mandala Design" 
                className="absolute top-4 right-12 w-80 h-80 opacity-68 z-5"
              />
              <img 
                src="../assets/Mandala2.png" 
                alt="Mandala Design" 
                className="absolute top-24 left-8 w-64 h-64 opacity-67 z-5"
              />
              <img 
                src="../assets/Mandala3.png" 
                alt="Mandala Design" 
                className="absolute bottom-16 right-4 w-72 h-72 opacity-67 z-5"
              />
            </div>
            
            {/* Marigold Garlands - positioned at the top spanning across */}
            <div className="absolute -top-4 left-0 right-0 w-full overflow-visible z-20">
              <img 
                src="../assets/Mala1.png" 
                alt="Marigold Garland" 
                className="w-full max-w-4xl h-auto mx-auto opacity-95"
              />
            </div>
            
            {/* Shiva Statue - positioned at bottom right */}
            <div className="absolute bottom-0 right-0 z-30">
              <img 
                src="../assets/BookPujaShivji.png" 
                alt="Lord Shiva Statue" 
                className="w-80 h-auto opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPuja;