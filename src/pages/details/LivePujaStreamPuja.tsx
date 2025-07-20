import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Share2 } from 'lucide-react';
import Recomendation from '../../ui/Recomendation';

const LiveStreamPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stream = location.state;

  useEffect(() => {
    if (!stream) navigate('/');
  }, [stream, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!stream) return null;

  return (
    <div className="min-h-screen bg-[#fffaf5] py-10 px-4 md:px-12">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Main Visual Section */}
        <div className="lg:w-2/3 relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <video
              src={stream.videoSrc}
              autoPlay
              controls
              loop
              muted
              playsInline
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>

          {/* Diya + Om */}
          <div className="flex justify-center mt-4">
            <div className="text-center">
              {/* <img src="/assets/diya.png" alt="Diya" className="w-10 mx-auto mb-1" /> */}
              <div className="text-2xl text-orange-600 font-bold">ॐ</div>
            </div>
          </div>

          {/* Stream Title + Meta */}
          <h2 className="text-xl md:text-2xl font-semibold text-center mt-4">
            {stream.title}
          </h2>
          <p className="text-center text-sm text-gray-600 mt-1">
            🏷 Category: {stream.category} &nbsp;&nbsp;•&nbsp;&nbsp; {stream.isLive ? 'Live' : 'Offline'} &nbsp;&nbsp;•&nbsp;&nbsp; {stream.views.toLocaleString()} watching
          </p>

          {/* Actions */}
          <div className="flex justify-center gap-4 mt-6">
            <Link
              to=""
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full shadow-md"
            >
              🪔 Make a Donation
            </Link>
            <Link
              to=""
              className="flex items-center gap-2 rounded-full px-6 py-2 border-orange-300 text-orange-600 hover:bg-orange-100"
            >
              <Share2 size={16} />
              Share
            </Link>
          </div>
        </div>

        {/* Recommended Streams */}
        <Recomendation />
      </div>
    </div>
  );
};

export default LiveStreamPage;
