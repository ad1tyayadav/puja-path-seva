import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Dot } from 'lucide-react';

interface Stream {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  isLive: boolean;
  views: number;
}

const LiveStreamCard: React.FC<{ stream: Stream }> = ({ stream }) => {
  const navigate = useNavigate();

  const handleWatchNow = () => {
    navigate(`/live-stream/${stream.id}`, { state: stream });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto group transition-all duration-300 hover:shadow-lg">
      {/* Thumbnail with overlays */}
      <div className="relative">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-48 object-cover"
        />
        {/* Live Badge */}
        {stream.isLive && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            LIVE
          </div>
        )}
        {/* Views Overlay */}
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {stream.views}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 min-h-[48px]">
          {stream.title}
        </h3>
        <p className="text-sm text-orange-600 font-semibold mt-1">{stream.category}</p>

        <div className="flex justify-between items-center mt-4">
          {/* Live Status */}
          <div
            className={`text-xs font-medium px-3 py-1.5 rounded-full ${
              stream.isLive
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {stream.isLive ? 'Live Now' : 'Offline'}
          </div>

          {/* Viewer Count */}
          <div className="flex items-center text-sm text-gray-600 font-medium">
            <Eye className="w-4 h-4 mr-1" />
            {stream.views} watching
          </div>
        </div>

        {/* Watch Now Button */}
        <button
          onClick={handleWatchNow}
          className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center text-base shadow hover:shadow-md transform hover:scale-105"
        >
          Watch Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LiveStreamCard;
