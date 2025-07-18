import { useState } from 'react';

function ChadavaOffering() {
    const [selectedOffering, setSelectedOffering] = useState('Peda Bhog');
    const [selectedTab, setSelectedTab] = useState('Individual');

    const offerings = [
        {
            id: 'laddu',
            name: 'Laddu',
            description: 'Laddus, especially boondi or besan variant laddus, are sumptuous.',
            price: 25,
            type: 'Individual'
        },
        {
            id: 'hanuman-chola',
            name: 'Hanuman Ji Chola',
            description: 'Offer Chola to Hanuman Ji to connect your soul with the divine energy and feel present.',
            price: 25,
            type: 'Individual'
        },
        {
            id: 'peda-bhog',
            name: 'Peda Bhog',
            description: 'Offering peda to Hanuman Ji is considered highly auspicious and fills devotees with spiritual energy.',
            price: 25,
            type: 'Combination'
        },
        {
            id: 'offer-sindoor',
            name: 'Offer Sindoor',
            description: 'Offering sindoor to Lord Hanuman is one of the most powerful forms of worship.',
            price: 100,
            type: 'Individual'
        }
    ];

    const individualCount = offerings.filter(o => o.type === 'Individual').length;
    const combinationCount = offerings.filter(o => o.type === 'Combination').length;

    const filteredOfferings = offerings.filter(offering =>
        selectedTab === 'Individual' ? offering.type === 'Individual' : offering.type === 'Combination'
    );

    return (
        <div className="bg-white rounded-lg shadow-lg mx-4 my-8 p-8 max-w-6xl">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                    Choose Your Sacred <span className="text-orange-500">Offerings</span>
                </h2>
                <p className="text-gray-600">Select sacred items to offer at the temple</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
                <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setSelectedTab('Individual')}
                        className={`px-6 py-2 rounded-md font-medium transition-colors ${selectedTab === 'Individual'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Individual
                    </button>
                    <button
                        onClick={() => setSelectedTab('Combination')}
                        className={`px-6 py-2 rounded-md font-medium transition-colors ${selectedTab === 'Combination'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        Combination
                    </button>
                </div>
            </div>

            <p className="text-center text-gray-600 mb-8">
                Choose specific items according to your devotion
            </p>

            {/* Offerings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {filteredOfferings.map((offering) => (
                    <div
                        key={offering.id}
                        className={`border rounded-lg p-6 cursor-pointer transition-all ${selectedOffering === offering.name
                            ? 'border-orange-500 bg-orange-50 shadow-lg'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                            }`}
                        onClick={() => setSelectedOffering(offering.name)}
                    >
                        <h3 className="font-semibold text-lg mb-3">{offering.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {offering.description}
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-2xl font-bold">${offering.price}</span>
                                <span className="text-gray-500 ml-1">Month</span>
                            </div>
                        </div>
                        <button
                            className={`w-full mt-4 py-2 px-4 rounded-md font-medium transition-colors ${selectedOffering === offering.name
                                ? 'bg-orange-500 text-white'
                                : 'bg-orange-500 hover:bg-orange-600 text-white'
                                }`}
                        >
                            Get Now
                        </button>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Available for this event:</span>
                <span> {individualCount} Individual • {combinationCount} Combination</span>
            </div>
        </div>
    )
}

export default ChadavaOffering