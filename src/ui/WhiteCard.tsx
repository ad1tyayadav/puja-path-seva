import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Import navigate

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

const MALA_URL = "/assets/Mala1.png";

const WhiteCard: React.FC<{ puja: Puja }> = ({ puja }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/puja-details/${puja.id}`, { state: puja });
  };

  return (
    <div className="bg-white text-gray-800 rounded-2xl p-5 shadow-xl w-[90%] mx-auto -mt-16 relative z-[1000]">
      <h3 className="text-lg font-bold line-clamp-2 min-h-[56px]">{puja.title}</h3>
      <p className="text-sm text-orange-600 font-semibold mt-1 line-clamp-1">{puja.ceremonyType}</p>

      <div className="text-xs mt-4 space-y-1 text-gray-600">
        <p className="truncate"><span className="font-bold">Temple:</span> {puja.temple}</p>
        <p className="truncate"><span className="font-bold">Location:</span> {puja.location}</p>
        <p className="truncate"><span className="font-bold">Date:</span> {puja.date}</p>
      </div>

      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center text-xs text-gray-500">
          <img src={MALA_URL} alt="joined" className="w-5 h-5 mr-2 rounded-full object-contain" />
          {puja.joined ?? 0} Joined
        </div>

        <button
          onClick={handleBookNow}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-xl transition flex items-center"
        >
          Book Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WhiteCard;
