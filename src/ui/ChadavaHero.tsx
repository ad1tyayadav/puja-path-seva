import { Check } from "lucide-react";

const ChadhavaSection = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg mx-auto my-10 overflow-visible w-full max-w-6xl">
            <div className="px-6 pb-6">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">
                    Offer Your Chadhava to <span className="text-orange-500">Hanumangarhi</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                    🌸 Send your devotion to the deity through sacred offerings from anywhere in India.
                </p>
            </div>
            <div className="relative flex items-center justify-center">
                <div className="w-[55vw]">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6f/BAPS_Swaminarayan_Mandir%2C_Pune.jpg"
                        alt="Hanumangarhi Temple"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
                <div className="absolute left-1/2 -bottom-20 transform -translate-x-1/2 bg-white p-6 w-80 rounded-xl shadow-xl text-center z-20">
                    <h3 className="text-xl font-semibold mb-2">Book Your Chadhava</h3>
                    <div className="flex items-center justify-center text-green-600 mb-4">
                        <Check className="w-4 h-4 mr-1" />
                        <span className="text-sm">Ready to book</span>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition">
                        Donate Now
                    </button>
                    <p className="text-xs text-gray-500 mt-2">Secured Payment</p>
                </div>
            </div>
            <div className="pt-28 pb-10 px-6 sm:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center justify-center text-sm text-gray-700">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        Your offering is placed by temple priests
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-700">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        Receive confirmation and blessings at home
                    </div>
                    <div className="flex items-center justify-center text-sm text-gray-700">
                        <Check className="w-5 h-5 text-green-600 mr-2" />
                        Secure, verified payment gateway
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChadhavaSection;
