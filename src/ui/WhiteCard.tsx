import React from "react";

interface Puja {
  id: number;
  title: string;
  location: string;
  date: string;
  temple: string;
  ceremonyType: string;
  description: string;
  image: string;
}

const WhiteCard: React.FC<{ puja: Puja }> = ({ puja }) => {
  return (
  <div className="bg-white text-gray-800 rounded-2xl p-4 shadow-xl w-[90%] mx-auto -mt-16 relative z-[1000]">
      <h3 className="text-lg font-bold">{puja.title}</h3>
      <p className="text-sm text-orange-600 font-semibold mt-1">{puja.ceremonyType}</p>
      <p className="text-sm mt-2 text-gray-700">{puja.description}</p>

      <div className="text-xs mt-3 space-y-1 text-gray-600">
        <p><strong>Temple:</strong> {puja.temple}</p>
        <p><strong>Location:</strong> {puja.location}</p>
        <p><strong>Date:</strong> {puja.date}</p>
      </div>

      <button className="w-full relative -20 mt-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-xl transition">
        Book Now
      </button>
    </div>
  );
};

export default WhiteCard;
