import { useLocation, useNavigate, Link } from "react-router-dom";

const PujaSankalp = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const puja = location.state;

  if (!puja) {
    navigate("/BookPuja");
    return null;
  }

  return (
    <section className="min-h-screen bg-[#fffaf5] px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Form Section */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
          <h2 className="text-2xl font-bold text-red-700 mb-1"> <span className="text-orange-400 mr-3">卐</span> Complete Your Sankalp</h2>
          <p className="text-sm text-gray-600 mb-6">Fill your details for personalized puja participation</p>

          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="font-semibold">Full Name <span className="text-red-600">*</span></label>
              <input
                type="text"
                placeholder="Enter your complete name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-orange-400"
              />
            </div>

            {/* Gotra */}
            <div>
              <label className="font-semibold">Gotra <span className="text-gray-400 text-sm">(Optional)</span></label>
              <input
                type="text"
                placeholder="e.g., Kashyap, Vashisht, Bharadwaj"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-orange-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-semibold">Phone Number <span className="text-red-600">*</span></label>
              <input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email Address <span className="text-red-600">*</span></label>
              <input
                type="email"
                placeholder="Enter your active email address"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-orange-400"
              />
            </div>
          </div>

          {/* Family Member + Prasad */}
          <div className="mt-6 space-y-4">
            <div>
              <p className="font-semibold">Family Members (Max 1)</p>
              <button className="mt-2 bg-orange-400 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md">
                Add Family Member
              </button>
            </div>

            <div className="flex items-center">
              <input id="prasad" type="checkbox" className="mr-2" />
              <label htmlFor="prasad" className="text-sm">Do you want Prasad also?</label>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 h-fit">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
          <p className="text-sm text-red-700 font-medium leading-relaxed mb-3">
            {puja.title}
          </p>
          <p className="text-sm text-gray-700 mb-2">{puja.ceremonyType}</p>

          <div className="border-t border-orange-200 my-4"></div>
          <div className="flex justify-between items-center text-lg font-bold text-red-700">
            <span>Total Amount:</span>
            <span>₹{puja.price || 751}</span>
          </div>
          <button
            onClick={() =>
              navigate("/chadhava-selection", {
                state: {
                  pujaImage: puja.image,
                  pujaTitle: puja.title,
                  pujaPrice: puja.price,
                  pujaType: puja.ceremonyType,
                },
              })
            }
            className="mt-6 w-full bg-orange-400 hover:bg-orange-600 text-white text-sm py-3 rounded-lg font-semibold"
          >
            Proceed to Chadhava Selection
          </button>
        </div>
      </div>
    </section>
  );
};

export default PujaSankalp;
