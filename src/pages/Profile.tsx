import  { useState } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Import Playfair Display font */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&display=swap" rel="stylesheet" />

      {/* Background decorative mandala elements */}
      <div className="absolute top-20 left-16 w-64 h-64 opacity-8">
        <div className="w-full h-full rounded-full border-4 border-orange-200 relative">
          <div className="absolute inset-4 rounded-full border-2 border-orange-300">
            <div className="absolute inset-4 rounded-full border-2 border-orange-400">
              <div className="absolute inset-4 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 right-20 w-80 h-80 opacity-6">
        <div className="w-full h-full rounded-full border-4 border-gray-200 relative">
          <div className="absolute inset-6 rounded-full border-3 border-gray-300">
            <div className="absolute inset-6 rounded-full border-2 border-gray-400">
              <div className="absolute inset-6 rounded-full border-2 border-gray-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Sidebar */}
          <div className="lg:w-1/4 mb-8 lg:mb-0">
            <div className="space-y-8 pt-16">
              {/* My Account Header */}
              <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
                My Account
              </h1>

              {/* Navigation Menu */}
              <div className="space-y-4">
                {/* Profile Button - Active */}
                <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg w-full text-left">
                  Profile
                </button>

                {/* My Puja Bookings */}
                <button className="text-orange-500 hover:text-orange-600 px-8 py-3 text-lg font-medium transition-all duration-300 w-full text-left">
                  My Puja Bookings
                </button>

                {/* My Chadava Bookings */}
                <button className="text-orange-500 hover:text-orange-600 px-8 py-3 text-lg font-medium transition-all duration-300 w-full text-left">
                  My Chadava Bookings
                </button>

                {/* Logout */}
                <button className="text-red-500 hover:text-red-600 px-8 py-3 text-lg font-medium transition-all duration-300 w-full text-left">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4 flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Central Mandala Background */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-15 z-5">
                <div className="w-full h-full rounded-full border-4 border-gray-300 relative">
                  <div className="absolute inset-2 rounded-full border-2 border-gray-400">
                    <div className="absolute inset-2 rounded-full border border-gray-500 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information Form */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200 relative z-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text mb-8 text-center" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
                  Personal Information
                </h2>

                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/90"
                      placeholder=""
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/90"
                      placeholder="@"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-gray-800 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/90"
                      placeholder="#"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Kalash Image - Bottom Right */}
              <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center" 
                  alt="Traditional Kalash with Coins" 
                  className="w-32 h-32 object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;