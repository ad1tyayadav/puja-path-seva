import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import LiveStreaming from './pages/LiveStreaming';
import BookPuja from './pages/BookPuja';
import Chadava from "./pages/Chadava";
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import LivePujaStreamPage from './pages/details/LivePujaStreamPuja';
import ExploreTemples from './pages/details/ExploreTemples';
import PujaDetails from './pages/details/PujaDetails';
import PujaSankalp from './pages/details/PujaSankalp';
import ChadhavaCheckout from './pages/details/ChadhavaCheckout';
import Layout from "./ui/Layout";
import NotificationPage from "./pages/Notifications";
import Donations from "./pages/Donations";
import ChadhavaSelection from "./pages/details/ChadhavaSelection";
import ChadhavaDetails from "./pages/details/ChadhavaDetails";
import DonationDetails from "./pages/details/DonationDetails";
import Kundli from "./pages/Kundli";
import AstroTellerSection from "./pages/AstroTeller";

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/live-stream" element={<LiveStreaming />} />
          <Route path="/BookPuja" element={<BookPuja />} />
          <Route path="/chadhava" element={<Chadava />} />
          <Route path="/kundli" element={<Kundli />} />
          <Route path="/astro" element={<AstroTellerSection />} />
          <Route path="/chadhava-details/:id" element={<ChadhavaDetails />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donation-details/:id" element={<DonationDetails />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/live-stream/:id" element={<LivePujaStreamPage />} />
          <Route path="/puja-details/:id" element={<PujaDetails />} />
          <Route path="/puja-details/:id/sankalp" element={<PujaSankalp />} />
          <Route path="/explore-temples" element={<ExploreTemples />} />
          <Route path="/chadhava-selection" element={<ChadhavaSelection />} />
          <Route path="/chadhava/checkout" element={<ChadhavaCheckout />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
