import { useLocation } from "react-router-dom";
import WaysToParticipate from "../../ui/WaysToParticipate";

const PujaDetailsPage = () => {
  const location = useLocation();
  const puja = location.state;

  if (!puja) return <div className="text-center mt-10">No puja data found.</div>;

  return (
    <div className="bg-[#fffaf5] min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-bold text-orange-600 mb-2">{puja.title}</h1>
          <p className="text-lg font-medium text-gray-700 mb-2">Temple: {puja.temple}</p>
          <p className="text-md text-gray-600 mb-1">Location: {puja.location}</p>
          <p className="text-md text-gray-600 mb-1">Date: {puja.date}</p>
          <p className="text-md text-gray-600">Ceremony: {puja.ceremonyType}</p>
        </div>
        <div>
          <img src={puja.image} alt={puja.title} className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* About Puja Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">About the Puja</h2>
          <p className="text-gray-700 mb-6">
            {puja.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, fuga.
          </p>
          {/* Carousel (placeholder) */}
          <div className="flex overflow-x-auto gap-4 hide-scrollbar">
            {[1, 2, 3, 4].map((img) => (
              <img
                key={img}
                src={puja.image} // Replace with actual carousel images later
                alt={`carousel-${img}`}
                className="w-64 h-40 object-cover rounded-xl shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Temple Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">About the Temple</h2>
          <p className="text-gray-700">
            {puja.temple} is a sacred temple where thousands of devotees gather for spiritual upliftment.
            The temple is known for its historic significance and spiritual energy.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6">Benefits of This Puja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Peace of Mind", "Removal of Doshas", "Spiritual Growth", "Family Harmony"].map((benefit, i) => (
              <div
                key={i}
                className="p-4 bg-orange-50 border border-orange-200 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold text-orange-700 text-lg mb-2">{benefit}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, laborum.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Options */}
    <WaysToParticipate />
    </div>
  );
};

export default PujaDetailsPage;
