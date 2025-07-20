import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Recomendation() {
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
    <div className="lg:w-1/3 space-y-4">
      <div className="bg-[#fff4e5] p-4 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-center text-orange-800">
          Recommended Live Streams
        </h3>

        {Array(5)
          .fill(stream)
          .map((item, idx) => (
            <Link
              key={idx}
              to={`/live-stream/${item.id}`}
              state={item}
              className="flex items-center gap-4 cursor-pointer p-2 rounded-lg hover:bg-orange-100 transition"
            >
              <img
                src={item.thumbnail}
                alt="Stream"
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">
                  {item.isLive ? 'Live' : 'Offline'} • {item.views.toLocaleString()} watching
                </p>
              </div>
            </Link>
          ))}
      </div>

      <Link
        to="/live-stream"
        className="w-[15vw] flex items-center m-auto block text-center py-2 mt-2 bg-orange-600 text-white hover:bg-orange-700 flex items-center justify-center gap-2 rounded-full"
      >
        View All Streams <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}

export default Recomendation;
