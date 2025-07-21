import { useState } from 'react';
import LogoImg from '/assets/LoginPuja.png';
import LogoImg2 from '/assets/Logo.png';
import { useNavigate } from 'react-router-dom';
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

const AuthModal = () => {
  const [mode, setMode] = useState('register');
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('91');

  const navigate = useNavigate()

  const handleMobileChange = (e: any) => {
    setMobileNumber(e.target.value);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleCountryCodeChange = (e: any) => {
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
        onClick={() => { navigate('/') }}
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