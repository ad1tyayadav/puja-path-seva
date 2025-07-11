import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import LiveStreaming from './pages/LiveStreaming';
import BookPuja from './pages/BookPuja';
import Chadava from "./pages/Chadava";
import Donations from './pages/Donations';
import Notification from './pages/Notifications';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import LivePujaStreamPage from './pages/details/LivePujaStreamPuja';
import ExploreTemples from './pages/details/ExploreTemples';
import PujaDetails from './pages/details/PujaDetails';
import PujaSankalp from './pages/details/PujaSankalp';
import ChadhavaSankalp from './pages/details/ChadhavaSankalp';
import ChadhavaCheckout from './pages/details/ChadhavaCheckout';
import TempleDonation from './pages/details/TempleDonation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live-streaming" element={<LiveStreaming />} />
        <Route path="/book-puja" element={<BookPuja />} />
        <Route path="/chadhava" element={<Chadava />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/live-streaming/puja-stream" element={<LivePujaStreamPage />} />
        <Route path="/book-puja/puja-details" element={<PujaDetails />} />
        <Route path="/book-puja/puja-sankalp" element={<PujaSankalp />} />
        <Route path="/book-puja/explore-temples" element={<ExploreTemples />} />
        <Route path="/chadhava/sankalp" element={<ChadhavaSankalp />} />
        <Route path="/chadhava/checkout" element={<ChadhavaCheckout />} />
        <Route path="/donations/temple" element={<TempleDonation />} />
      </Routes>
    </Router>
  );
}

export default App;
