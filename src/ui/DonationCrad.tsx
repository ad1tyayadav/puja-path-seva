// /donation.tsx
import { Link } from "react-router-dom";

const donationList = [
  {
    id: 1,
    title: "Temple Renovation Fund",
    description: "Help restore and maintain ancient temple structures.",
    image: "/assets/Kedarnath.jpg",
    location: "Ayodhya, India",
  },
];

export default function DonationCard() {
  return (
    <section className="py-10 px-4 bg-[#fffaf5]">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {donationList.map((item) => (
          <div
            key={item.id}
            className="bg-white border shadow rounded-xl overflow-hidden"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-1">
              <h2 className="text-xl font-semibold text-red-700">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-sm text-gray-500">📍 {item.location}</p>
              <Link
                to={`/donation-details/${item.id}`}
                className="block mt-3 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-lg font-medium"
              >
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
