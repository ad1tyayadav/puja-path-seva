import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

interface DonationItem {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
}

const donationList: DonationItem[] = [
  {
    id: 1,
    title: "Temple Renovation Fund",
    description:
      "Support the restoration and maintenance of ancient temple structures and sacred spaces.",
    location: "Kashi Vishwanath Temple",
    image: "/assets/Kedarnath.jpg",
  },
  {
    id: 2,
    title: "Annadanam Service",
    description:
      "Contribute to the daily food service that feeds thousands of devotees and those in need.",
    location: "Padmanabhaswamy Temple",
    image: "/assets/HeroPhoto.png",
  },
  {
    id: 3,
    title: "Priest Education Fund",
    description:
      "Help preserve ancient knowledge by supporting the education of young priests.",
    location: "Siddhivinayak Temple",
    image: "/assets/Shivji1.png",
  },
  {
    id: 4,
    title: "Cultural Heritage",
    description:
      "Support initiatives to document and preserve ancient rituals, mantras, and temple arts.",
    location: "Multiple Temples",
    image: "/assets/Donation.png",
  },
];

const DonationCards: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#fffaf5]">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {donationList.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-snug">
                {item.description}
              </p>
              <p className="text-sm text-orange-600 font-medium flex items-center gap-1 pt-2">
                <MapPin className="w-4 h-4" /> {item.location}
              </p>
              <Link
                to={`/donation-details/${item.id}`}
                className="block mt-4 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-lg font-semibold transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationCards;
