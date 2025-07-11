import { useState, useEffect } from "react";
import Img from "../assets/Ganesh.png"
import Img1 from "../assets/Shivji1.png"
import Img2 from "../assets/templeBorder.png"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-r from-orange-50 to-orange-100 relative overflow-hidden">
      {/* Temple skyline silhouette at bottom */}
      <div className="absolute bottom-0 left-0 w-full pt-10">
        <img 
          src={Img2}
          alt="Temple Silhouette" 
          className="w-full h-auto object-cover"
         
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* About Us Header with Om symbol */}
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-orange-500 text-2xl font-medium flex items-center">
            
              About Us
            </h2>
          </div>
          
          {/* Foundation Title with Swastik symbols */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10">
             PujaPathSeva Foundation 
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left side images */}
            <div className="relative w-full lg:w-1/2 aspect-square max-w-lg">
              {/* Main Shiva image */}
              <div className="w-full h-full overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src={Img1} 
                  alt="Lord Shiva" 
                  className="w-full h-full object-cover"
                 
                />
              </div>
              
              {/* Overlapping Ganesha circle image */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={Img}
                  alt="Lord Ganesha" 
                  className="w-full h-full object-cover"
                 
                />
              </div>
            </div>

            {/* Right side text content */}
            <div className="w-full lg:w-1/2 pt-16 lg:pt-0 pl-10">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  PujaPathSeva Foundation is an online devotional platform that connects the divine to the devotees. It allows you to book different kinds of sevas at various temples of your choice, across India. We offer a large list of spiritual sevas that hold an extreme importance in the Hindu culture.
                </p>
                
                <p className="text-gray-700 text-lg">
                  PujaPathSeva Foundation (Adhyatmik Darshan Foundation) also organizes Sanyasi Bhojan, Brahmin Bhojan, Sadhu Bhojan, Maha Annadaan Sewa and Gau Sewa every day or Specially on some Auspicious Days Like Amawasya, Poornima, Ekadashi, Pradosh and other auspicious days in the Name and Gotra of Devotee on precious Teerth Kshetras i.e. Varanasi, Prayagraj, Haridwar, Ayodhya and Ujjain
                </p>
                
                <div className="pt-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;