import { useState } from 'react';
import LogoImg from '../assets/LoginPuja.png';
import LogoImg2 from '../assets/Logo.png';
// Close icon component
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Dropdown/Chevron icon component
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

// WhatsApp icon component
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="#25D366" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const AuthModal = () => {
  const [mode, setMode] = useState('register');
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('91');

  const handleMobileChange = (e:any) => {
    setMobileNumber(e.target.value);
  };

  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };

  const handleCountryCodeChange = (e:any) => {
    setCountryCode(e.target.value);
  };

  const handleSubmit = () => {
    // Handle registration logic here
    console.log({
      mode,
      countryCode,
      mobileNumber,
      name
    });
  };

  const switchToLogin = () => {
    setMode('login');
  };

  const switchToRegister = () => {
    setMode('register');
  };

  return (
    <div className="bg-white rounded-xl max-w-md w-full relative shadow-2xl">
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <div className="p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src={LogoImg2} 
            alt="PujaPathSeva" 
            className="h-16"
            // Fallback style if image not available
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#f97316',
              fontFamily: 'cursive',
              fontSize: '1.5rem'
            }}
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Register for Your PujaPathSeva Account
        </h2>
        
        <p className="text-gray-600 text-center mb-6">
          Create an account to begin your spiritual journey with PujaPathSeva.
        </p>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <div className="flex">
              {/* Country code selector */}
              <div className="relative">
                <select
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  className="appearance-none rounded-l-lg border border-gray-300 py-3 px-4 bg-white text-gray-700 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="91">+91</option>
                  <option value="1">+1</option>
                  <option value="44">+44</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDownIcon />
                </div>
              </div>
              {/* Mobile input */}
              <input
                type="tel"
                id="mobile"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                className="flex-1 rounded-r-lg border border-gray-300 py-3 px-4 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Name field - only shown in register mode */}
          {mode === 'register' && (
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleNameChange}
                className="w-full rounded-lg border border-gray-300 py-3 px-4 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          )}

          {/* Terms and conditions - only shown in register mode */}
          {mode === 'register' && (
            <div className="text-gray-600 text-sm text-center">
              By proceeding you agree to the{' '}
              <a href="#" className="text-orange-500 hover:underline">Terms & Condition</a>
              {' '}and{' '}
              <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
              {' '}of PujaPathSeva.
            </div>
          )}

          {/* Register Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-full font-medium transition duration-200 mt-4"
          >
            {mode === 'register' ? 'Register Now' : 'Login'}
          </button>

          {/* Login Button */}
          <button
            onClick={mode === 'register' ? switchToLogin : switchToRegister}
            className="w-full bg-orange-100 hover:bg-orange-200 text-orange-600 py-3 px-4 rounded-full font-medium transition duration-200 mt-2"
          >
            {mode === 'register' ? 'Login' : 'Register'}
          </button>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <div className="absolute bottom-6 right-6">
        <a 
          href="https://wa.me/918470930672" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};

// For demonstration purposes
export default function Auth() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundImage: `url(${LogoImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <AuthModal />
    </div>
  );
}