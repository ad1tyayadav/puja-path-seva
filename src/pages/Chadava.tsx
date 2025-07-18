import React, { useState } from 'react';
import { Check, MapPin, Calendar, Users, Star } from 'lucide-react';
import ChadhavaSection from '../ui/ChadavaHero';
import ChadavaOffering from '../ui/ChadavaOffering';

const Chadhava = () => {
  const [selectedOffering, setSelectedOffering] = useState('Peda Bhog');
  const [selectedTab, setSelectedTab] = useState('Individual');

  const offerings = [
    {
      id: 'laddu',
      name: 'Laddu',
      description: 'Laddus, especially boondi or besan variant laddus, are sumptuous.',
      price: 25,
      type: 'Individual'
    },
    {
      id: 'hanuman-chola',
      name: 'Hanuman Ji Chola',
      description: 'Offer Chola to Hanuman Ji to connect your soul with the divine energy and feel present.',
      price: 25,
      type: 'Individual'
    },
    {
      id: 'peda-bhog',
      name: 'Peda Bhog',
      description: 'Offering peda to Hanuman Ji is considered highly auspicious and fills devotees with spiritual energy.',
      price: 25,
      type: 'Combination'
    },
    {
      id: 'offer-sindoor',
      name: 'Offer Sindoor',
      description: 'Offering sindoor to Lord Hanuman is one of the most powerful forms of worship.',
      price: 100,
      type: 'Individual'
    }
  ];

  const filteredOfferings = offerings.filter(offering =>
    selectedTab === 'Individual' ? offering.type === 'Individual' : offering.type === 'Combination'
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Hero Section */}
      <ChadhavaSection />

      {/* Offerings Selection */}
      <ChadavaOffering />

      {/* Event Details */}
      <div className="bg-white rounded-lg shadow-lg mx-4 my-8 p-8 max-w-6xl">
        <div className="mb-4">
          <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
            Sacred Ceremony
          </span>
        </div>

        <h2 className="text-3xl font-bold mb-6">
          Chadhava At <span className="text-orange-500">Hanumangarhi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">Hanumangarhi Ayodhya</span>
            </div>

            <div className="flex items-center mb-6">
              <Calendar className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">15 July 2025</span>
            </div>

            <p className="text-gray-600 mb-6">
              Experience the divine blessings of Chadhava At Hanumangarhi at Hanumangarhi Ayodhya
            </p>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>248 Reviews</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-gray-500 mr-1" />
                <span>548 Devotees Joined</span>
              </div>
              <div className="flex items-center">
                <span>452 Slots Left</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-4">About This Sacred Ceremony</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Experience the divine blessings of Chadhava At Hanumangarhi at Hanumangarhi Ayodhya.
              This sacred ceremony connects devotees with the powerful energy of Lord Hanuman through
              traditional offerings and prayers conducted by experienced temple priests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chadhava;