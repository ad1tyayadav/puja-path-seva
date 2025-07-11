
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ScrollToTopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

// Decorative element component
const DiamondDivider = () => (
  <div className="flex items-center justify-center space-x-2 my-6">
    <div className="w-2 h-2 bg-orange-300 transform rotate-45"></div>
    <div className="w-3 h-3 bg-orange-400 transform rotate-45"></div>
    <div className="w-4 h-4 bg-orange-500 transform rotate-45"></div>
    <div className="w-3 h-3 bg-orange-400 transform rotate-45"></div>
    <div className="w-2 h-2 bg-orange-300 transform rotate-45"></div>
  </div>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-cream-50 pt-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 h-full">
        <div className="h-full border-l border-dashed border-orange-200 ml-8">
          <div className="absolute top-8 w-3 h-3 bg-orange-300 rounded-full -ml-1.5"></div>
          <div className="absolute top-24 w-3 h-3 bg-orange-300 rounded-full -ml-1.5"></div>
          <div className="absolute top-40 w-6 h-6 bg-yellow-400 transform rotate-45 -ml-3"></div>
          <div className="absolute top-60 w-3 h-3 bg-orange-300 rounded-full -ml-1.5"></div>
          <div className="absolute top-80 w-4 h-4 bg-yellow-300 transform rotate-45 -ml-2"></div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 h-full">
        <div className="h-full border-r border-dashed border-orange-200 mr-8">
          <div className="absolute top-20 right-8 w-3 h-3 bg-orange-300 rounded-full -mr-1.5"></div>
          <div className="absolute top-40 right-8 w-4 h-4 bg-yellow-300 transform rotate-45 -mr-2"></div>
        </div>
      </div>

      {/* Decorative floral design on right */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none">
          <path d="M180,150 Q220,100 180,50 T180,0 M180,150 Q140,100 180,50" stroke="#f97316" strokeWidth="2" fill="none" />
          <path d="M160,200 Q200,170 160,140 T160,110 M160,200 Q120,170 160,140" stroke="#f97316" strokeWidth="2" fill="none" />
          <path d="M140,250 Q180,220 140,190 T140,160 M140,250 Q100,220 140,190" stroke="#f97316" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-800">About PujaPathSeva</h2>
            </div>
            <p className="text-gray-700 mb-6">
              PujaPathSeva plays a key role in connecting the devotees 
              with the Avimukta Kashi Kshetra of Kashi and facilitating to 
              them the Worship, Puja, Yatra, and Anusthan.
            </p>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow us on</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <FacebookIcon />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <div>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
                </li>
                <li>
                  <a href="/our-puja" className="text-gray-700 hover:text-orange-500 transition-colors">Our Puja</a>
                </li>
                <li>
                  <a href="/offerings" className="text-gray-700 hover:text-orange-500 transition-colors">Offerings</a>
                </li>
                <li>
                  <a href="/temples" className="text-gray-700 hover:text-orange-500 transition-colors">Temples</a>
                </li>
                <li>
                  <a href="/campaigns" className="text-gray-700 hover:text-orange-500 transition-colors">Campaigns</a>
                </li>
                <li>
                  <a href="/events" className="text-gray-700 hover:text-orange-500 transition-colors">Events</a>
                </li>
                <li>
                  <a href="/about-us" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-orange-500">
                  <PhoneIcon />
                </div>
                <span className="text-gray-700">8470930672</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-orange-500">
                  <EmailIcon />
                </div>
                <span className="text-gray-700">Support@Pujapathseva.Com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 text-orange-500">
                  <LocationIcon />
                </div>
                <span className="text-gray-700">
                  B-1-K31/40, Bhogabir, Saket Nagar Colony, Lanka, Varanasi, Uttar Pradesh 221005
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <DiamondDivider />
        
        {/* Copyright */}
        <div className="text-center text-gray-700 pb-8">
          Copyright 2025 @ PujaPathSeva Foundation || All Rights Reserved
        </div>
      </div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors z-20"
        aria-label="Scroll to top"
      >
        <ScrollToTopIcon />
      </button>
    </footer>
  );
};

export default Footer ;