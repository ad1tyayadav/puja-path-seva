import { useParams } from "react-router-dom";
import { useState } from "react";
import { Heart, Gift, Users, Clock } from "lucide-react";

export default function DonationDetails() {
  const { id } = useParams();
  const [amount, setAmount] = useState(1100);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    purpose: "",
  });

  const quickAmounts = [501, 1001, 2101, 5001, 11001];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#fffaf5] py-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Left: Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Info Card */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h2 className="text-2xl font-bold text-orange-500 mb-2">About Temple Renovation Fund</h2>
            <p className="text-gray-700">
              Support the restoration and maintenance of ancient temple structures and sacred spaces.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <Heart className="text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1b1c31]">Daily Seva</h4>
                  <p className="text-sm text-gray-600">Support daily temple operations</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <Gift className="text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1b1c31]">Festival Celebrations</h4>
                  <p className="text-sm text-gray-600">Fund special festival arrangements</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <Users className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1b1c31]">Community Service</h4>
                  <p className="text-sm text-gray-600">Support free food distribution</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3">
                <Clock className="text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#1b1c31]">Maintenance</h4>
                  <p className="text-sm text-gray-600">Temple upkeep and preservation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Form */}
          <div className="bg-white p-6 rounded-xl shadow border">
            <h3 className="text-xl font-bold text-red-700 mb-4">Make Your Sacred Contribution</h3>

            {/* Quick Amount */}
            <div className="mb-4 flex flex-wrap gap-3">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`px-4 py-2 border rounded-lg ${amount === amt ? "bg-orange-100 border-orange-500" : "border-gray-300"
                    }`}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            {/* Custom */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-700">Custom Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
            </div>

            {/* Donor Info */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleInput}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleInput}
              className="w-full mb-4 px-3 py-2 border rounded-md"
            />
            <input
              type="text"
              name="address"
              placeholder="Address (Optional)"
              onChange={handleInput}
              className="w-full mb-4 px-3 py-2 border rounded-md"
            />
            <textarea
              name="purpose"
              placeholder="Purpose of Donation (Optional)"
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-md"
              rows={3}
            />
          </div>
        </div>

        {/* Right: Summary */}
        <div className="space-y-4">
          <div className="bg-white border shadow rounded-xl p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Donation Summary</h3>
            <p className="text-sm text-gray-600">Temple:</p>
            <p className="font-semibold text-gray-800 mb-3">Temple Renovation Fund</p>
            <p className="text-sm text-gray-600">Amount:</p>
            <p className="text-2xl font-bold text-orange-600 mb-4">₹{amount.toLocaleString()}</p>
            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded-md">
              Proceed to Payment
            </button>
            <p className="mt-3 text-xs text-gray-500 text-center">
              🔒 Secure payment via Razorpay • Tax benefits available
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-md text-sm text-green-700">
            <strong>🔒 Secure Payment</strong>
            <ul className="mt-1 list-disc list-inside">
              <li>SSL encrypted transactions</li>
              <li>Multiple payment options</li>
              <li>Instant confirmation</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
