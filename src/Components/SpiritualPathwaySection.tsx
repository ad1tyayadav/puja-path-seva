import Img from "../assets/Ganesh1.png"
import Img1 from "../assets/Shivji1.png"

const SpiritualPathwaysSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-orange-500 font-medium mb-2">Om Namah Shivay</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Spiritual Pathways We Offer</h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1 */}
          {/* Special Puja Card - Large (spans 7 columns) */}
          <div className="md:col-span-7 rounded-lg overflow-hidden bg-amber-50 flex flex-col md:flex-row">
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Special Puja</h3>
              <p className="text-gray-600 mb-6">
                Book personalized pujas in the names and gotras of your loved ones at the sacred temples of Kashi—performed with devotion, just for you.
              </p>
              <a href="#" className="inline-flex items-center border border-gray-800 rounded-full px-6 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="md:w-2/5 relative">
              <img 
                src={Img}
                alt="Special Puja" 
                className="w-full h-full object-cover"
              />

            </div>
          </div>

          {/* Bhairav Sadhana Card - Small (spans 5 columns) */}
          <div className="md:col-span-5 rounded-lg overflow-hidden bg-amber-50 flex flex-col">
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Bhairav Sadhana</h3>
              <p className="text-gray-600 mb-4">
                Bhairav Sadhana invokes Lord Bhairav for protection, strength, and removal of negativity.
              </p>
              <a href="#" className="inline-flex items-center border border-gray-800 rounded-full px-5 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="relative h-48 md:h-auto">
              <img 
                src={Img1} 
                alt="Bhairav Sadhana" 
                className="w-full h-full object-cover"
              />

            </div>
          </div>

          {/* Row 2 */}
          {/* Kundali Consultation Card - Small (spans 5 columns) */}
          <div className="md:col-span-5 rounded-lg overflow-hidden bg-amber-50 flex flex-col">
            <div className="relative h-48 md:h-auto">
              <img 
                src={Img1} 
                alt="Kundali Consultation" 
                className="w-full h-full object-cover"
              />
    
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Kundali Consultation</h3>
              <p className="text-gray-600 mb-4">
                Consult with Kashi's experienced astrologers for accurate and insightful Kundali readings.
              </p>
              <a href="#" className="inline-flex items-center border border-gray-800 rounded-full px-5 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                Contribute Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Charitable Activity Card - Large (spans 7 columns) */}
          <div className="md:col-span-7 rounded-lg overflow-hidden bg-amber-50 flex flex-col md:flex-row">
            <div className="md:order-2 md:w-2/5 relative">
              <img 
                src={Img} 
                alt="Charitable Activity" 
                className="w-full h-full object-cover"
              />
          
            </div>
            <div className="p-8 flex-1 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Charitable Activity</h3>
              <p className="text-gray-600 mb-6">
                Help nourish Gurukul students, restore ancient temples, and uphold Sanatan Dharma. Join our campaigns and make a meaningful impact.
              </p>
              <a href="#" className="inline-flex items-center border border-gray-800 rounded-full px-6 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                Contribute Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Row 3 */}
          {/* Monthly Puja & Seva Events Card - Large (spans 7 columns) */}
          <div className="md:col-span-7 rounded-lg overflow-hidden bg-amber-50 flex flex-col md:flex-row">
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Monthly Puja & Seva Events</h3>
              <p className="text-gray-600 mb-6">
                Participate monthly pujas, homams, and annadaan sevas in Kashi. Experience sacred rituals performed by Vedic priests at revered temples.
              </p>
              <a href="#" className="inline-flex items-center border border-gray-800 rounded-full px-6 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="md:w-2/5 relative">
              <img 
                src={Img}
                alt="Monthly Puja & Seva Events" 
                className="w-full h-full object-cover"
              />
        
            </div>
          </div>

          {/* Chadhava Card - Small (spans 5 columns) */}
          <div className="md:col-span-5 rounded-lg overflow-hidden bg-amber-50 flex flex-col">
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Chadhava</h3>
              <p className="text-gray-600 mb-4">
                Present Chadhava in your name at holy temples of Kashi and connect with the divine.
              </p>
              <a href="#" className="inline-flex items-center border border-gray-800 rounded-full px-5 py-2 font-medium hover:bg-gray-800 hover:text-white transition-colors">
                Offer Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="relative h-48 md:h-auto">
              <img 
                src={Img1} 
                alt="Chadhava" 
                className="w-full h-full object-cover"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiritualPathwaysSection;