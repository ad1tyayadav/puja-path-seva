import LiveCategoryTabs from './Livectgtab';
import LiveStreamCard from './LiveStreamCard';

export interface Stream {
  id: number;
  title: string;
  location?: string;
  thumbnail: string;
  videoSrc?: string;
  category?: string;
  isLive: boolean;
  views: number;
  date?: string;
}

export const streamData: Stream[] = [
  {
    id: 1,
    title: 'Shri Vitthal darshan Pandharpur today',
    location: 'Pandharpur',
    thumbnail: 'https://placehold.co/600x400/E2E8F0/4A5568?text=Live+Darshan+1',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    category: 'Abhishekam',
    isLive: true,
    views: 5500,
    date: '04/07/2025',
  },
  {
    id: 2,
    title: 'Ganga Aarti at Dashashwamedh Ghat',
    location: 'Varanasi',
    thumbnail: 'https://placehold.co/600x400/E2E8F0/4A5568?text=Live+Darshan+2',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    category: 'Aarti',
    isLive: true,
    views: 8200,
    date: '04/07/2025',
  },
  {
    id: 3,
    title: 'Morning Prayers from Golden Temple',
    location: 'Amritsar',
    thumbnail: 'https://placehold.co/600x400/E2E8F0/4A5568?text=Live+Darshan+3',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    category: 'Puja',
    isLive: true,
    views: 12300,
    date: '04/07/2025',
  },
  {
    id: 4,
    title: 'Siddhivinayak Temple Aarti Live',
    location: 'Mumbai',
    thumbnail: 'https://placehold.co/600x400/E2E8F0/4A5568?text=Live+Darshan+4',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    category: 'Puja',
    isLive: true,
    views: 9800,
    date: '04/07/2025',
  },
  {
    id: 5,
    title: 'Mahakaleshwar Jyotirlinga Darshan',
    location: 'Ujjain',
    thumbnail: 'https://placehold.co/600x400/E2E8F0/4A5568?text=Live+Darshan+5',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    category: 'Puja',
    isLive: true,
    views: 7100,
    date: '04/07/2025',
  },
];

const LiveStreamComponent = () => {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-1">Live Now</h2>
        <p className="text-gray-600 mb-6">
          Experience divine ceremonies happening right now
        </p>

        <LiveCategoryTabs />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
          {streamData.map((stream) => (
            <LiveStreamCard key={stream.id} stream={stream} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LiveStreamComponent;
