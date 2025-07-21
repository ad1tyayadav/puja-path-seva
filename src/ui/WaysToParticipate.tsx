import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PujaSankalpState {
  id: string;
  title: string;
  ceremonyType: string;
  pujaType: string;
  price: number;
}

const participationOptions = [
  {
    type: "Basic Seva",
    image: "/assets/Shivji1.png",
    price: 501,
    points: [
      "Individual Sankalp",
      "Prasad delivery at home",
      "Name gotra pujan",
    ],
  },
  {
    type: "Family Seva",
    image: "/assets/HeroPhoto.png",
    price: 1100,
    points: [
      "Family Sankalp for 4",
      "Prasad & Raksha thread",
      "Live Darshan link",
      "Name & gotra announcement",
    ],
  },
  {
    type: "Group Seva",
    image: "/assets/Ganesh1.png",
    price: 2100,
    points: [
      "Group puja for wellbeing",
      "Mention during sankalp",
      "Prasad for group leader",
      "Special blessings message",
    ],
  },
  {
    type: "Special Sankalp",
    image: "/assets/BookPujaShivji.png",
    price: 5100,
    points: [
      "Dedicated priest",
      "Special rituals for your family",
      "Home delivery of Maha Prasad",
      "Custom wishes during puja",
    ],
  },
];

const WaysToParticipate = () => {
  const location = useLocation();
  const puja = location.state as PujaSankalpState;
  const navigate = useNavigate();

  const handleBookNow = (option: { type: string; price: number }) => {
    navigate(`/puja-details/${puja.id}/sankalp`, {
      state: {
        ...puja,
        pujaType: option.type,
        price: option.price,
      },
    });
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-orange-600 mb-6">
          Ways to Participate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {participationOptions.map((option, i) => (
            <div
              key={i}
              className="bg-orange-50 border border-orange-200 rounded-xl shadow p-4 flex flex-col transition hover:shadow-lg"
            >
              <img
                src={option.image}
                alt={option.type}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-orange-700 mb-1">{option.type}</h3>
              <p className="text-gray-800 font-semibold mb-2">₹{option.price}</p>
              <ul className="text-sm text-gray-600 list-disc list-inside text-left mb-4 space-y-1">
                {option.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button
                onClick={() => handleBookNow(option)}
                className="mt-auto px-4 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-600"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToParticipate;
