import { MapPin, Calendar, Users, Star } from 'lucide-react';
import ChadhavaSection from '../ui/ChadavaHero';
import ChadhavaList from './ChadhavaList';

const Chadhava = () => {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Hero Section */}
      <ChadhavaSection />

      {/* Offerings Selection */}
      <ChadhavaList />
    </div>
  );
};

export default Chadhava;