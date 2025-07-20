import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Stream {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  isLive: boolean;
  views: number;
}

const LiveStreamCard: React.FC<{ stream: Stream }> = ({ stream }) => {

  const navigate = useNavigate()

  const handleWatchNow = () => {
    navigate(`/live-stream/${stream.id}`, { state: stream });
  }

  return (
    <div className="w-[300px] min-w-[300px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img
          src={stream.thumbnail}
          alt={stream.title}
          className="w-full h-48 object-cover"
        />
        {/* Live indicator - top left */}
        {stream.isLive && (
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-sm flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            LIVE
          </div>
        )}

        {/* Viewer count - top right */}
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-sm flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          {stream.views}
        </div>

        {/* Live label - bottom right */}
        {stream.isLive && (
          <div className="absolute bottom-3 right-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-sm">
            Live
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-3 line-clamp-2 min-h-[2.5rem]">
          {stream.title}
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
            {stream.category}
          </span>
          <span className="text-gray-500 text-xs font-medium">
            {stream.isLive ? 'Live' : 'Offline'}
          </span>
        </div>

        <div className="flex items-center text-gray-500 text-xs mb-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {stream.views} watching
        </div>

        <button onClick={handleWatchNow} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default LiveStreamCard;