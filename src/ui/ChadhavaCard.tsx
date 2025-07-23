import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin, User } from "lucide-react";

interface ChadhavaItem {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  joined: number;
  price: number;
}

const ChadhavaCard: FC<{ data: ChadhavaItem }> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100 flex flex-col">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-red-700">{data.title}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-3">{data.description}</p>

        <div className="flex items-center text-orange-400 gap-2 text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{data.location}</span>
        </div>

        {/* Date and Joined aligned on same line */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full">
            <CalendarDays className="w-4 h-4" />
            <span>{data.date}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-gray-600 font-medium">
            <User className="w-4 h-4" />
            <span>{data.joined} Joined</span>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => navigate(`/chadhava-details/${data.id}`, { state: data })}
          className="mt-auto bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold text-sm"
        >
          📿 Book Now
        </button>
      </div>
    </div>
  );
};

export default ChadhavaCard;