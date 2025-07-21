import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

const offerings = [
  { id: 1, title: "Ghee Diya", price: 101, image: "https://bansiwalaproducts.com/wp-content/uploads/2023/05/Tirupati-900ml.jpg", description: "Light a ghee diya in temple." },
  { id: 2, title: "Fresh Flowers", price: 51, image: "/assets/Mala1.png", description: "Offer fragrant flowers to deity." },
  { id: 3, title: "Coconut", price: 151, image: "https://media.istockphoto.com/id/175554153/photo/fresh-coconut.jpg?s=2048x2048&w=is&k=20&c=9KRCLRy3VM5hYX-o5ETWx3_7ilCw99U2QxssFsPQEx8=", description: "Break coconut as offering." },
  { id: 4, title: "Ladoo Prasad", price: 81, image: "https://www.agarwalbhavansweets.com/cdn/shop/files/besanladdu.jpg?v=1713938291", description: "Offer sweets to the deity." },
];

const ChadhavaDetails = () => {
  const { state: puja } = useLocation();
  const [selectedOfferings, setSelectedOfferings] = useState<number[]>([]);

  const toggleOffering = (id: number) => {
    setSelectedOfferings((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const total = useMemo(() => {
    const offeringsTotal = selectedOfferings.reduce((sum, id) => {
      const item = offerings.find((o) => o.id === id);
      return sum + (item?.price || 0);
    }, 0);
    return puja.price + offeringsTotal;
  }, [selectedOfferings]);

  return (
    <section className="bg-[#fffaf5] min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          {/* Main Puja Info */}
          <div className="bg-white p-6 rounded-2xl border shadow">
            <img src={puja?.image} alt={puja?.title} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-bold text-red-700">{puja?.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{puja?.description}</p>
            <p className="text-sm text-gray-600 mt-2">📍 {puja.location}</p>
            <p className="text-sm text-gray-600">📅 {puja.date}</p>
            <p className="text-lg text-orange-600 mt-4 font-semibold">Base Price: ₹{puja?.price}</p>
          </div>

          {/* Offerings */}
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">Choose Your Sacred Offerings</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {offerings.map((item) => (
                <div
                  key={item.id}
                  className={`border rounded-xl p-3 cursor-pointer hover:shadow-md ${
                    selectedOfferings.includes(item.id)
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200"
                  }`}
                >
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded mb-2" />
                  <h4 className="font-semibold text-orange-700">{item.title} - ₹{item.price}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <button
                    onClick={() => toggleOffering(item.id)}
                    className={`mt-2 w-full py-1.5 rounded-md text-sm font-medium ${
                      selectedOfferings.includes(item.id)
                        ? "bg-gray-300 text-gray-700"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    {selectedOfferings.includes(item.id) ? "Added" : "Add"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl border p-6 shadow sticky top-10">
            <h4 className="text-lg font-semibold text-red-700 mb-4">📋 Chadhava Summary</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>{puja?.title} - ₹{puja?.price}</p>
              {selectedOfferings.map((id) => {
                const item = offerings.find((o) => o.id === id);
                return item && (
                  <p key={id}>
                    {item.title} - ₹{item.price}
                  </p>
                );
              })}
            </div>
            <div className="border-t my-4 border-orange-200"></div>
            <div className="flex justify-between text-lg font-bold text-red-700">
              <span>Total Amount:</span>
              <span>₹{total}</span>
            </div>
            <button className="mt-6 w-full bg-orange-400 hover:bg-orange-600 text-white py-2 rounded-md">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChadhavaDetails;
