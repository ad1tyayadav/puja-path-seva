// WhiteCard.tsx
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
  joined: number;
}

const WhiteCard: React.FC<{ puja: Puja }> = ({ puja }) => {
  return (
    <div className="bg-white text-gray-800 rounded-2xl p-4 shadow-xl w-[90%] mx-auto -mt-16 relative z-[1000]">
      {/* Title with line clamping */}
      <h3 className="text-lg font-bold line-clamp-2 min-h-[56px]">
        {puja.title}
      </h3>
      
      {/* Ceremony Type with line clamping */}
      <p className="text-sm text-orange-600 font-semibold mt-1 line-clamp-1">
        {puja.ceremonyType}
      </p>

      {/* Temple/Location/Date details */}
      <div className="text-xs mt-3 space-y-1 text-gray-600">
        <p className="truncate">
          <span className="font-bold">Temple:</span> {puja.temple}
        </p>
        <p className="truncate">
          <span className="font-bold">Location:</span> {puja.location}
        </p>
        <p className="truncate">
          <span className="font-bold">Date:</span> {puja.date}
        </p>
      </div>

      {/* Joined count and Book Now button */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-gray-500 flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 mr-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
            />
          </svg>
            {puja.joined ?? 0} Joined
        </div>
        
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-xl transition flex items-center">
          Book Now
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhiteCard;