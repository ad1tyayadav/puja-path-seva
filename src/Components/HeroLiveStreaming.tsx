import React, { useState, useEffect } from 'react';
import { Play, Users, MapPin, Clock, Circle } from 'lucide-react';

const LiveStreamingHero: React.FC = () => {
  const [liveViewers, setLiveViewers] = useState(1247);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-16 left-16 w-64 h-64 md:w-96 md:h-96 md:top-32 md:left-32">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <pattern id="lotus" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 5 L25 15 L20 20 L15 15 Z M20 35 L25 25 L20 20 L15 25 Z M5 20 L15 25 L20 20 L15 15 Z M35 20 L25 25 L20 20 L25 15 Z" 
                      fill="#f97316" fillOpacity="0.4"/>
                <circle cx="20" cy="20" r="8" fill="none" stroke="#f97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#lotus)"/>
          </svg>
        </div>
        
        <div className="absolute bottom-12 right-12 w-48 h-48 md:w-64 md:h-64 md:bottom-24 md:right-24">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#dc2626" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="#ea580c" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="#f97316" strokeWidth="0.5"/>
            <path d="M50 20 L55 40 L50 50 L45 40 Z M50 80 L55 60 L50 50 L45 60 Z M20 50 L40 55 L50 50 L40 45 Z M80 50 L60 55 L50 50 L60 45 Z" 
                  fill="#f97316" fillOpacity="0.6"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Status indicator */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md rounded-full px-3 md:px-4 py-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-600 font-medium text-sm">LIVE</span>
              </div>
              <div className="h-px bg-gradient-to-r from-orange-300 to-transparent flex-1"></div>
              <span className="text-gray-500 text-sm font-light hidden sm:block">Sacred Darshan</span>
            </div>

            {/* Main heading */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[0.9] tracking-tight">
                <span className="block">Divine</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 font-normal">Darshan</span>
                <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-600 mt-2">from sacred temples</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg font-light">
                Experience the divine presence through live temple ceremonies. 
                Join devotees worldwide in authentic spiritual moments.
              </p>
            </div>
            
            {/* Live stats - minimal design */}
            <div className="flex items-center gap-4 md:gap-8 py-4 md:py-6 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-600" />
                <span className="font-medium text-gray-900">{liveViewers.toLocaleString()}</span>
                <span className="text-gray-500 text-sm hidden sm:inline">devotees</span>
              </div>
              <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-600" />
                <span className="font-medium text-gray-900">4h 23m</span>
              </div>
              <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span className="font-medium text-gray-900">Vrindavan</span>
              </div>
            </div>
            
            {/* CTA Buttons - minimal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 pt-2 md:pt-4">
              <button className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                <Play className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" />
                Join Darshan
              </button>
              
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 text-gray-700 px-4 md:px-6 py-3 md:py-4 rounded-full font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-300">
                <Circle className="w-4 h-4" />
                All Temples
              </button>
            </div>
          </div>
          
          {/* Right Content - Premium video player */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main video container */}
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-1.5 md:p-2 shadow-2xl shadow-orange-200/20">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-900 to-red-900 aspect-[4/3] md:aspect-[5/4]">
                  {/* Temple image placeholder */}
                  <div className="absolute inset-1.5 md:inset-2 bg-gradient-to-br from-orange-800 via-red-800 to-orange-900 rounded-lg md:rounded-xl flex items-center justify-center">
                    <div className="text-center text-white/80">
                      <div className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-8 md:w-10 h-8 md:h-10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                          <path d="M2 17L12 22L22 17"/>
                          <path d="M2 12L12 17L22 12"/>
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-light mb-1 md:mb-2">Banke Bihari Temple</h3>
                      <p className="text-xs md:text-sm opacity-75">Vrindavan, Uttar Pradesh</p>
                    </div>
                  </div>
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl md:rounded-2xl"></div>
                  
                  {/* Live indicator */}
                  <div className="absolute top-3 md:top-4 left-3 md:left-4 flex items-center gap-2 bg-red-500 text-white px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs font-medium">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                  
                  {/* Viewer count */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/30 backdrop-blur-sm text-white px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs">
                    {liveViewers.toLocaleString()}
                  </div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-12 md:w-16 h-12 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group border border-white/20">
                      <Play className="w-5 md:w-6 h-5 md:h-6 text-white ml-0.5" fill="currentColor" />
                    </button>
                  </div>
                  
                  {/* Bottom info */}
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <div className="bg-black/40 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-4 text-white">
                      <div className="flex justify-between items-end">
                        <div>
                          <h4 className="font-medium text-sm">Mangal Aarti</h4>
                          <p className="text-xs opacity-80">Morning Prayers</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xs opacity-80">Started</div>
                          <div className="text-sm font-medium">6:30 AM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating temple cards - responsive positioning */}
              <div className="absolute -right-2 md:-right-4 top-12 md:top-16 bg-white rounded-xl md:rounded-2xl p-2 md:p-3 shadow-lg w-24 md:w-32 hidden sm:block">
                <div className="h-12 md:h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-2 flex items-center justify-center">
                  <div className="w-4 md:w-6 h-4 md:h-6 bg-orange-500 rounded-full"></div>
                </div>
                <p className="text-xs font-medium text-gray-800">Golden Temple</p>
                <p className="text-xs text-gray-500">Amritsar</p>
              </div>
              
              <div className="absolute -left-3 md:-left-6 bottom-20 md:bottom-24 bg-white rounded-xl md:rounded-2xl p-2 md:p-3 shadow-lg w-20 md:w-28 hidden sm:block">
                <div className="h-10 md:h-14 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg mb-2 flex items-center justify-center">
                  <div className="w-4 md:w-5 h-4 md:h-5 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-xs font-medium text-gray-800">Tirupati</p>
                <p className="text-xs text-gray-500">Andhra Pradesh</p>
              </div>
            </div>
            
            {/* Subtle decorative elements */}
            <div className="absolute -top-8 md:-top-12 -right-8 md:-right-12 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 md:-bottom-12 -left-8 md:-left-12 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-15 blur-xl"></div>
          </div>
        </div>
      </div>
  
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 opacity-5">
        <svg className="w-20 md:w-32 h-20 md:h-32" viewBox="0 0 100 100" fill="currentColor">
          <path d="M20 60 C20 45, 35 30, 50 30 C65 30, 80 45, 80 60 C80 75, 70 85, 60 85 L40 85 C30 85, 20 75, 20 60 Z M35 50 C40 45, 45 50, 50 55 C55 50, 60 45, 65 50 M35 70 L65 70" 
                stroke="#f97316" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default LiveStreamingHero;