function HeroDonations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Import Playfair Display font */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&display=swap" rel="stylesheet" />

      {/* Background decorative mandala elements */}
      <div className="absolute top-20 left-16 w-48 h-48 opacity-6">
        <div className="w-full h-full rounded-full border-4 border-orange-200 relative">
          <div className="absolute inset-4 rounded-full border-2 border-orange-300">
            <div className="absolute inset-4 rounded-full border-2 border-orange-400">
              <div className="absolute inset-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-8 w-32 h-32 opacity-8">
        <div className="w-full h-full rounded-full border-3 border-gray-200 relative">
          <div className="absolute inset-3 rounded-full border-2 border-gray-300">
            <div className="absolute inset-2 rounded-full border border-gray-400 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 w-96 h-96 opacity-5">
        <div className="w-full h-full rounded-full border-4 border-gray-300 relative">
          <div className="absolute inset-8 rounded-full border-3 border-gray-400">
            <div className="absolute inset-8 rounded-full border-2 border-gray-500">
              <div className="absolute inset-8 rounded-full border-2 border-gray-600 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Decorative petals for large mandala */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className={`absolute w-8 h-16 bg-gray-300 rounded-full`}
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '4px 50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-120px)`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[85vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 pt-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
                Support Seva & Annadan —
              </h1>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
                Spread Blessings Across
              </h2>
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
                Sacred Temples
              </h3>
            </div>
            
            <p className="text-base lg:text-lg text-gray-700 max-w-2xl leading-relaxed font-normal">
              Offer your Shraddha in the form of donation and seva—support temple rituals, daily pujas, annadanam (food donation), and Gaushala seva. Your contribution sustains sacred practices and illuminates lives across India.
            </p>

            <div className="space-y-4">
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl block w-fit">
                View Upcoming Chadava
              </button>
              
              <button className="border-2 border-orange-400 text-orange-600 bg-orange-50 px-8 py-3 rounded-full text-lg font-medium hover:bg-orange-100 hover:border-orange-500 transition-all duration-300 block w-fit">
                How it works
              </button>
            </div>
          </div>

          {/* Right Content - Temple Images Collage */}
          <div className="lg:w-1/2 relative h-[85vh] mt-12 lg:mt-0 flex items-center justify-end">
            
            {/* Top Right - Mountain Temple */}
            <div className="absolute top-8 right-12 z-20">
              <div className="bg-gradient-to-br from-orange-300 to-orange-400 p-1 rounded-2xl shadow-xl transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=280&h=180&fit=crop&crop=center" 
                  alt="Mountain Temple" 
                  className="w-72 h-44 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Top Right Small - Palace/Temple */}
            <div className="absolute top-4 right-4 z-15">
              <div className="bg-gradient-to-br from-orange-400 to-red-400 p-1 rounded-xl shadow-lg transform -rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=200&h=140&fit=crop&crop=center" 
                  alt="Palace Temple" 
                  className="w-48 h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Center Large - Ganga Aarti/River Scene */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-25">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-1 rounded-2xl shadow-2xl transform rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1558431382-27e303142719?w=320&h=240&fit=crop&crop=center" 
                  alt="Ganga Aarti Evening" 
                  className="w-80 h-56 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Bottom Right - Golden Temple */}
            <div className="absolute bottom-12 right-16 z-20">
              <div className="bg-gradient-to-br from-blue-300 to-blue-400 p-1 rounded-2xl shadow-xl transform -rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1609825488888-3a766db05542?w=260&h=160&fit=crop&crop=center" 
                  alt="Golden Temple" 
                  className="w-64 h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroDonations;