// src/pages/LiveStreaming.tsx
import React from 'react';
import LiveCategoryTabs from './Livectgtab';
import LiveStreamCard from './LiveStreamCard';
const dummyStreams = [
    {
        id: 1,
        title: 'LIVE Darshan with Bhakti Live',
        thumbnail: 'https://i.ytimg.com/vi/cWlagqX0BJQ/sddefault.jpg?v=68698441',
        category: 'Abhishekam',
        isLive: true,
        views: 1200,
    },
    {
        id: 2,
        title: 'First Vlog Journey',
        thumbnail: 'https://i.ytimg.com/vi/cWlagqX0BJQ/sddefault.jpg?v=68698441',
        category: 'Aarti',
        isLive: true,
        views: 980,
    },
    {
        id: 3,
        title: 'धाम दर्शन से आरती लाइव',
        thumbnail: 'https://i.ytimg.com/vi/cWlagqX0BJQ/sddefault.jpg?v=68698441',
        category: 'Puja',
        isLive: true,
        views: 3000,
    },
    {
        id: 4,
        title: 'धाम दर्शन से आरती लाइव',
        thumbnail: 'https://i.ytimg.com/vi/cWlagqX0BJQ/sddefault.jpg?v=68698441',
        category: 'Puja',
        isLive: true,
        views: 3000,
    },
    {
        id: 5,
        title: 'धाम दर्शन से आरती लाइव',
        thumbnail: 'https://i.ytimg.com/vi/cWlagqX0BJQ/sddefault.jpg?v=68698441',
        category: 'Puja',
        isLive: true,
        views: 3000,
    },
];

const LiveStreamComponent = () => {
  return (
    <div className="bg-white">
      {/* Live Now Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-1">Live Now</h2>
        <p className="text-gray-600 mb-6">
          Experience divine ceremonies happening right now
        </p>

        <LiveCategoryTabs />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
          {dummyStreams.map((stream) => (
            <LiveStreamCard key={stream.id} stream={stream} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LiveStreamComponent;
