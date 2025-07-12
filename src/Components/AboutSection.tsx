import { useState, useEffect } from "react";
import Img from "/assets/Ganesh1.png";
import Img1 from "/assets/Shivji1.png";
import Img2 from "/assets/templeBorder.png";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-r from-orange-50 to-white relative overflow-hidden z-10">
      {/* Temple Silhouette */}
      <div className="absolute bottom-0 left-0 w-full z-0 opacity-40">
        <img src={Img2} alt="Temple Silhouette" className="w-full h-auto object-cover" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ease-in-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
            {/* Right: Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Top Heading */}
              <div className="flex items-center gap-2 text-orange-600 font-semibold text-xl mb-2">
                <span>About Us</span>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
               Puja Path Seva
              </h2>

              <div className="space-y-6 text-gray-700 text-lg">
                <p>
                 Puja Path seva is an online devotional platform that connects the divine to
                  the devotees. It allows you to book different kinds of sevas at various temples of your
                  choice, across India. We offer a large list of spiritual sevas that hold an extreme
                  importance in the Hindu culture.
                </p>
                <p>
                  Puja Path Seva also organizes Sanyasi
                  Bhojan, Brahmin Bhojan, Sadhu Bhojan, Maha Amaddan Sewa and Gau Sewa every day
                  or Specially on some Auspicious Days Like Annawasya, Poomima, Ekadashi, Pradesh and
                  other auspicious days in the Name and Gatra of Devatee on precious Teerth Kehetras i.e.
                  Varanasi, Prayagraj, Haridwar, Ayadhya and Ujjam
                </p>
              </div>
              
              <div className="pt-4">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  More About Us
                </button>
              </div>
            </div>

            {/* Left: Images */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative w-full max-w-[500px]">
                {/* Pinkish Shadow */}
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-pink-200 via-orange-200 to-yellow-100 transform -rotate-3 z-0 opacity-80"></div>
                
                {/* Main Image Container */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={Img1}
                    alt="Lord Shiva"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Circular Image Overlay */}
                <div className="absolute -bottom-8 -left-8 w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 bg-white">
                  <img 
                    src={Img} 
                    alt="Lord Ganesha" 
                    className="w-full h-full object-cover" 
                  />
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