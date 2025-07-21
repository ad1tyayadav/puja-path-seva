import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";

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

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
          <MapPin className="w-4 h-4" />
          <span>{data.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <CalendarDays className="w-4 h-4" />
          <span>{data.date}</span>
        </div>

        {/* Capsules */}
        <div className="flex gap-2 text-xs mb-4">
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
            {data.joined} joined
          </span>
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
