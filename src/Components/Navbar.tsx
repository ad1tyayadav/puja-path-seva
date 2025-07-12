import { useState } from 'react';
import LogoImg from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// --- ICONS ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);
const ChevronDownIcon = () => (
    <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const navLinkClasses = "text-gray-800 hover:text-orange-500 transition-colors duration-200";
  const mainNavLinks = [
    { path: "/", label: "Home" },
    { path: "/BookPuja", label: "Book Puja" },
    { path: "/LiveStreaming", label: "Live Streaming" },
    { path: "/Chadhava", label: "Chadhava" },
    { path: "/Donations", label: "Donations" },
    { path: "/Notifications", label: "Notifications" },
    
  ];


  // Custom Logo component - styled to match the image
  const Logo = () => (
    <div className="flex items-center">
        <img src={LogoImg} alt="PujaPathSeva" className="w-20 h-20" />
      <div className="text-orange-500 font-cursive pl-2">
        <span className="text-xl font-cursive tracking-wide">PujaPathSeva</span>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => navigate('/')} className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {mainNavLinks.map(link => (
              (
                <a key={link.path} href={link.path} className={`${navLinkClasses} font-medium`}>
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* User actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/Auth" className="text-orange-500 border border-orange-500 rounded-full px-5 py-2 text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
              Login/Register
            </a>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors duration-300">
              <UserIcon />
            </div>
            <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors duration-300">
              <MenuIcon />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {mainNavLinks.map(link => (
              <a key={link.path} href={link.path} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-orange-500">
                {link.label}
              </a>
            ))}
            {/* Mobile dropdown items displayed flat */}
           
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5 flex items-center justify-between">
              <a href="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 text-gray-700">
                <div className="p-2 bg-gray-100 rounded-full">
                  <UserIcon />
                </div>
                <span className="font-medium">Your Profile</span>
              </a>
              <a href="/login" onClick={() => setIsMenuOpen(false)} className="text-orange-500 border border-orange-500 rounded-full px-4 py-2 text-sm font-medium">
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;