import React from 'react';

function HeroChadhava() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Import Playfair Display font */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&display=swap" rel="stylesheet" />
      {/* Background decorative mandala elements */}
      <div className="absolute top-20 left-16 w-64 h-64 opacity-8">
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

      <div className="absolute bottom-20 right-16 w-80 h-80 opacity-6">
        <div className="w-full h-full rounded-full border-4 border-gray-200 relative">
          <div className="absolute inset-6 rounded-full border-3 border-gray-300">
            <div className="absolute inset-6 rounded-full border-2 border-gray-400">
              <div className="absolute inset-6 rounded-full border-2 border-gray-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Additional decorative petals */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gray-300 rounded-full"></div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-6 bg-gray-300 rounded-full"></div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-6 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 pt-16">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800, lineHeight: '80px'}}>
                Offer Chadhava as per
              </h1>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text leading-tight" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800, lineHeight: '80px'}}>
                Vedic Rituals
              </h2>
            </div>
            
            <h3 className="text-xl lg:text-2xl font-extrabold text-gray-800 max-w-xl" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
              Connect with divine blessings from anywhere in the world
            </h3>
            
            <p className="text-base lg:text-lg text-gray-700 max-w-xl leading-relaxed font-extrabold" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
              through authentic temple offerings
            </p>
          </div>

          {/* Right Content - Images and Central Figure */}
          <div className="lg:w-1/2 relative h-[85vh] mt-12 lg:mt-0 flex items-center justify-center">
            {/* Background Large Mandala behind the girl */}
            <div className="absolute inset-0 flex items-center justify-center z-5">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&crop=center" 
                alt="Mandala Design Background" 
                className="w-96 h-96 opacity-10 object-cover rounded-full"
              />
            </div>

            {/* Central Girl with Offering Plate */}
            <div className="relative z-20 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba34d46?w=400&h=500&fit=crop&crop=center" 
                alt="Traditional Girl with Offerings" 
                className="w-80 h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>

            {/* Top Right Temple Image */}
            <div className="absolute top-8 right-8 z-15">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-1 rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=300&h=200&fit=crop&crop=center" 
                  alt="Temple" 
                  className="w-72 h-48 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Bottom Left Temple Image */}
            <div className="absolute bottom-8 left-8 z-15">
              <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-1 rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=300&h=200&fit=crop&crop=center" 
                  alt="Mountain Temple" 
                  className="w-72 h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* View More Button - positioned at bottom right */}
        <div className="absolute bottom-16 right-16 z-30">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full text-lg font-extrabold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroChadhava;