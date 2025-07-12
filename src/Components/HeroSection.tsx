import React from 'react';
import { Play, MapPin } from 'lucide-react';
import Img from "../../public/assets/HeroPhoto.png"

const HeroSection: React.FC = () => {
  return (
    <div className="relative z-[10] min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-300 to-red-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full blur-3xl"></div>
      </div>
      
      {/* Ornamental patterns */}
      <div className="absolute top-10 right-10 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-orange-300">
          <defs>
            <pattern id="mandala" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="25" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="25" cy="25" r="5" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#mandala)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-gray-800">PujaPathSeva —</span>
                <br />
                <span className="text-gray-800">Bringing the</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Sacred Rituals
                </span>
                <span className="text-gray-800"> of </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Sanatan Dharma
                </span>
                <br />
                <span className="text-gray-800">to Your Home, No Matter Where You Are</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                From Online Puja Bookings to Live Darshan & Prasad Delivery,
                <br />
                Stay Spiritually Connected with Just a Click
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Watch Live
              </button>
              
              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-orange-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 transform hover:scale-105 transition-all duration-300">
                <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Explore Temples
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">1000+</div>
                <div className="text-gray-600 text-sm">Temples Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50K+</div>
                <div className="text-gray-600 text-sm">Devotees Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24/7</div>
                <div className="text-gray-600 text-sm">Live Darshan</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Temple Image */}
          <div className="relative">
          
            
            {/* Main image container */}
            <div className="relative p-3 ">
              <div className="relative  ">
                <img
                  src= {Img}
                  alt="Temple Deities"
                  className="w-full  object-cover "
                />
               
              </div>
            </div>
            
            {/* Decorative elements around image */}
       
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default HeroSection;