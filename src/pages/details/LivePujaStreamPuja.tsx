import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Share2,
  Heart,
  Calendar,
  Eye,
  User,
  MapPin,
  Dot,
  Gift,
} from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-b from-[#fff5e5] to-[#fffaf5] py-10 px-4 md:px-12 font-[Inter]">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Main Section */}
        <div className="lg:w-2/3 space-y-6">
          {/* Live Video */}
          <div className="overflow-hidden rounded-2xl shadow-lg border border-orange-100">
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

          {/* Title & Metadata */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-orange-700 tracking-wide">{stream.title}</h2>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <User size={16} className="text-orange-600" />
                <span>{stream.pandit}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-orange-600" />
                <span>{stream.date}</span>
              </div>
              {stream.isLive && (
                <div className="flex items-center gap-2">
                  <Dot className="text-red-600 animate-pulse" />
                  <span className="text-red-600 font-medium">Live</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Eye size={16} className="text-orange-600" />
                <span>{stream.views.toLocaleString()} watching</span>
              </div>
            </div>
          </div>

          {/* Temple Info Box */}
          <div className="bg-[#fff3e0] border border-orange-200 rounded-xl p-5 shadow-sm text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin size={18} className="text-orange-700" />
              <p className="text-lg font-semibold text-orange-700">
                {stream.location}
              </p>
            </div>
            <p className="text-sm text-gray-800 leading-relaxed">
              Sacred live ceremony streamed directly from one of the holiest temples in India.
              Experience divine blessings and Vedic rituals from the spiritual city of Varanasi.
            </p>
          </div>

          {/* Call-To-Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link
              to=""
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full shadow-md flex items-center gap-2 transition"
            >
              <Gift size={18} />
              Make a Donation
            </Link>

            <button className="border border-orange-400 text-orange-700 hover:bg-orange-100 px-6 py-2 rounded-full flex items-center gap-2 transition">
              <Heart size={18} />
              Save to Favourites
            </button>

            <button className="border border-orange-400 text-orange-700 hover:bg-orange-100 px-6 py-2 rounded-full flex items-center gap-2 transition">
              <Share2 size={18} />
              Share
            </button>
          </div>
        </div>

        {/* Right Side: Recommendations */}
        <Recomendation />
      </div>
    </div>
  );
};

export default LiveStreamPage;
