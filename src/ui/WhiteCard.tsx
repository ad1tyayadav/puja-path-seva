import { Calendar, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Puja {
  id: number;
  title: string;
  date: string;
  temple: string;
  ceremonyType: string;
  description: string;
  image: string;
  joined: number;
}

const WhiteCard: React.FC<{ puja: Puja }> = ({ puja }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/puja-details/${puja.id}`, { state: puja });
  };

 return (
    <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-xl w-full max-w-sm mx-auto -mt-16 relative z-10">
      <h3 className="text-xl font-bold line-clamp-2 min-h-[56px] text-gray-900">{puja.title}</h3>
      <p className="text-sm text-orange-600 font-semibold mt-1 line-clamp-1">{puja.ceremonyType}</p>
      
      <div className="text-sm mt-4 text-gray-600">
        <p className="truncate"><span className="font-semibold">Temple:</span> {puja.temple}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full">
          <Calendar/> {puja.date}
          
        </div>
        
        {/* Joined Count */}
        <div className="flex items-center text-sm text-gray-600 font-medium">
        <User />
          {puja.joined ?? 0} Joined
        </div>
      </div>

      {/* Book Now Button */}
      <div className="mt-6">
        <button
          onClick={handleBookNow}
          className="w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center text-lg shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Book Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default WhiteCard;
