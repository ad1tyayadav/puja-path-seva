import React, { useState } from 'react';

function Notifications() {
  const [activeTab, setActiveTab] = useState('NEW');

  const notifications = [
    "Lorem ipsum kaksnnianw jenfanienfmaer skjnnaejknvmnae signanenm gina",
    "Lorem ipsum kaksnnianw jenfanienfmaer skjnnaejknvmnae signanenm gina", 
    "Lorem ipsum kaksnnianw jenfanienfmaer skjnnaejknvmnae signanenm gina",
    "Lorem ipsum kaksnnianw jenfanienfmaer skjnnaejknvmnae signanenm gina",
    "Lorem ipsum kaksnnianw jenfanienfmaer skjnnaejknvmnae signanenm gina",
    "Lorem ipsum kaksnnianw jenfanienfmaer skjnnaejknvmnae signanenm gina"
  ];

  return (
    <div>
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Import Playfair Display font */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;800;900&display=swap" rel="stylesheet" />

        {/* Background decorative mandala elements */}
        <div className="absolute top-20 left-8 w-64 h-64 opacity-8">
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

        <div className="absolute bottom-16 right-8 w-80 h-80 opacity-6">
          <div className="w-full h-full rounded-full border-4 border-gray-200 relative">
            <div className="absolute inset-6 rounded-full border-3 border-gray-300">
              <div className="absolute inset-6 rounded-full border-2 border-gray-400">
                <div className="absolute inset-6 rounded-full border-2 border-gray-500 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Decorative petals */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-6 h-12 bg-gray-300 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '3px 50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-100px)`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex justify-center items-center min-h-[80vh]">
            <div className="w-full max-w-4xl">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text mb-8" style={{fontFamily: 'Playfair Display, serif', fontWeight: 800}}>
                  Notifications
                </h1>

                {/* Small decorative mandala */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 opacity-20">
                    <div className="w-full h-full rounded-full border-2 border-gray-300 relative">
                      <div className="absolute inset-1 rounded-full border border-gray-400">
                        <div className="absolute inset-1 rounded-full border border-gray-500 flex items-center justify-center">
                          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications Panel */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200 relative">
                {/* Tab Buttons */}
                <div className="flex justify-center space-x-4 mb-8">
                  <button
                    onClick={() => setActiveTab('NEW')}
                    className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                      activeTab === 'NEW'
                        ? 'bg-gradient-to-r from-orange-300 to-orange-400 text-orange-800 shadow-lg'
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                    }`}
                  >
                    NEW
                  </button>
                  <button
                    onClick={() => setActiveTab('Unread')}
                    className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                      activeTab === 'Unread'
                        ? 'bg-gradient-to-r from-orange-300 to-orange-400 text-orange-800 shadow-lg'
                        : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                    }`}
                  >
                    Unread
                  </button>
                </div>

                {/* Notifications List */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 hover:bg-orange-50 rounded-lg transition-all duration-300">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed flex-1">
                        {notification}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
