import React, { useState, useEffect } from 'react';
import { Play, Radio, Users, MapPin, Clock } from 'lucide-react';
import Img from "../../public/assets/Shivji1.png"
const LiveStreamingHero: React.FC = () => {
  const [liveViewers, setLiveViewers] = useState(1247);
  
  // Simulate live viewer count changes
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Decorative mandala patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="absolute top-20 left-20 w-96 h-96" viewBox="0 0 400 400">
          <defs>
            <pattern id="mandala-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f97316" strokeWidth="2"/>
              <circle cx="50" cy="50" r="25" fill="none" stroke="#f97316" strokeWidth="1"/>
              <circle cx="50" cy="50" r="10" fill="none" stroke="#f97316" strokeWidth="1"/>
              <path d="M50,10 L55,35 L50,50 L45,35 Z" fill="#f97316"/>
              <path d="M50,90 L55,65 L50,50 L45,65 Z" fill="#f97316"/>
              <path d="M10,50 L35,55 L50,50 L35,45 Z" fill="#f97316"/>
              <path d="M90,50 L65,55 L50,50 L65,45 Z" fill="#f97316"/>
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#mandala-pattern)"/>
        </svg>
        
        <svg className="absolute bottom-20 right-20 w-64 h-64" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3"/>
          <circle cx="100" cy="100" r="20" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-5">
            {/* Temple icon */}
            <div className="flex items-center gap-3 mb-6">
             
              
                <div className="flex items-center gap-2">
                
                  <span className="text-red-600 font-medium">LIVE NOW</span>
                </div>
                <p className="text-gray-600 text-sm">Sacred Rituals in Progress</p>
              
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gray-800">Witness</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Sacred</span>
                <br />
                <span className="text-gray-800">Rituals</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> Live</span>
                <span className="text-gray-800"> from</span>
                <br />
                <span className="text-gray-800">Temples Across India</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Let the divine enter your home through live-streamed Vedic ceremonies. Join devotees worldwide in timeless spiritual moments.
              </p>
            </div>
            
            {/* Live Stats */}
            <div className="flex items-center gap-6 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-800">{liveViewers.toLocaleString()}</span>
                <span className="text-gray-600 text-sm">watching now</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-800">4h 23m</span>
                <span className="text-gray-600 text-sm">duration</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-gray-800">Vrindavan</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Join Live Stream
              </button>
              
              <button className="group flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm text-orange-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transform hover:scale-105 transition-all duration-300">
                <Radio className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Browse All Streams
              </button>
            </div>
          </div>
          
          {/* Right Content - Live Stream Preview */}
          <div className="relative">
            {/* Main video container */}
            <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-4 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl bg-black">
                <img
                  src={Img}
                  alt="Live Temple Stream"
                  className="w-full h-[400px] object-cover"
                />
                
                {/* Video overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                
                {/* Live indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE
                </div>
                
                {/* Viewer count */}
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {liveViewers.toLocaleString()} viewers
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                
                {/* Bottom info bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm text-white rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Mangal Aarti</h3>
                      <p className="text-sm opacity-90">Banke Bihari Temple, Vrindavan</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-90">Started</div>
                      <div className="font-semibold">6:30 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Smaller temple preview cards */}
            
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-orange-300 to-red-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamingHero;