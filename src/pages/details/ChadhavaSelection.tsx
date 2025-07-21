import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const offerings = [
  {
    id: "vastra",
    title: "Vastra",
    price: 751,
    description: "Offering vastra helps reduce graha doshas and karmic burdens.",
    image: "https://servdharm.com/cdn/shop/files/PilaPoojaVastra-3_800x.png?v=1693335087",
  },
  {
    id: "sringar",
    title: "Sringar",
    price: 551,
    description: "Symbolizes honoring feminine energy and attracts blessings.",
    image: "https://m.media-amazon.com/images/I/A1OwEqj928L.jpg",
  },
  {
    id: "bhog",
    title: "Bhog",
    price: 1101,
    description: "Bhog offered with mannat helps in wish fulfillment.",
    image: "https://assets.mypandit.com/wp-content/uploads/2025/02/Navratri_Pooja_Bhog.webp",
  },
];

const ChadhavaSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pujaImage, pujaTitle, pujaPrice, pujaType } = location.state || {};

  const [includeChadhava, setIncludeChadhava] = useState(true);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [dakshina, setDakshina] = useState("");
  const [message, setMessage] = useState("");

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const total = pujaPrice +
    selectedItems.reduce((acc, id) => acc + (offerings.find(o => o.id === id)?.price || 0), 0) +
    (parseInt(dakshina || "0") || 0);

  if (!pujaImage || !pujaTitle || !pujaPrice || !pujaType) {
    navigate("/BookPuja");
    return null;
  }

  return (
    <section className="bg-[#fffaf5] px-4 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-red-700 mb-2">🪔 Send Sacred Chadhava to Temple</h1>
        <p className="text-gray-600 mb-6">Support the temple by sending offerings with your puja.</p>

        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 flex justify-between items-center">
          <div>
            <p className="text-red-700 font-semibold">{pujaTitle}</p>
            <p className="text-sm text-gray-700">{pujaType} - ₹{pujaPrice}</p>
          </div>
          <img src={pujaImage} alt="deity" className="w-12 h-12 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Chadhava Selection */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeChadhava}
                  onChange={() => setIncludeChadhava(!includeChadhava)}
                  className="accent-orange-500"
                />
                <span className="text-sm font-medium">
                  Include Chadhava with my Puja
                </span>
              </label>
            </div>

            {includeChadhava && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {offerings.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`border rounded-xl cursor-pointer p-3 hover:shadow ${selectedItems.includes(item.id)
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200"
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-36 object-cover rounded-lg mb-3"
                    />
                    <h3 className="font-semibold text-orange-700 mb-1">
                      {item.title} - ₹{item.price}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Dakshina */}
            <div>
              <label className="block font-medium mb-1">Dakshina for Pandit</label>
              <input
                type="number"
                placeholder="Enter amount"
                value={dakshina}
                onChange={(e) => setDakshina(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-orange-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">Message for Temple / Pandit</label>
              <textarea
                placeholder="Optional message or special instructions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-orange-500"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <p className="text-gray-700 text-sm mb-2">{pujaType}</p>
            <p className="text-sm text-red-700 font-medium mb-4">{pujaTitle}</p>

            <div className="border-t border-orange-200 my-3"></div>

            {selectedItems.length > 0 && (
              <div className="mb-3">
                {selectedItems.map((id) => {
                  const item = offerings.find((o) => o.id === id);
                  return (
                    <p key={id} className="text-sm text-gray-700 flex justify-between">
                      <span>{item?.title}</span>
                      <span>₹{item?.price}</span>
                    </p>
                  );
                })}
              </div>
            )}

            {dakshina && (
              <p className="text-sm text-gray-700 flex justify-between mb-2">
                <span>Dakshina</span>
                <span>₹{dakshina}</span>
              </p>
            )}

            <div className="border-t border-orange-200 my-3"></div>

            <div className="flex justify-between items-center text-lg font-bold text-red-700">
              <span>Total Amount:</span>
              <span>₹{total}</span>
            </div>

            <button
             
              className="mt-6 w-full bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
             Proceed to Payment
            </button>

            <p className="text-xs text-green-600 mt-2 text-center">🔒 Secure Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChadhavaSelection;
