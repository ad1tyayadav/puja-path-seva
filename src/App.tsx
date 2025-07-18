import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import LiveStreaming from './pages/LiveStreaming';
import BookPuja from './pages/BookPuja';
import Chadava from "./pages/Chadava";
import Donations from './pages/Donations';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import LivePujaStreamPage from './pages/details/LivePujaStreamPuja';
import ExploreTemples from './pages/details/ExploreTemples';
import PujaDetails from './pages/details/PujaDetails';
import PujaSankalp from './pages/details/PujaSankalp';
import ChadhavaSankalp from './pages/details/ChadhavaSankalp';
import ChadhavaCheckout from './pages/details/ChadhavaCheckout';
import TempleDonation from './pages/details/TempleDonation';
import Layout from "./ui/Layout";
import NotificationPage from "./pages/Notifications";

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/LiveStreaming" element={<LiveStreaming />} />
          <Route path="/BookPuja" element={<BookPuja />} />
          <Route path="/chadhava" element={<Chadava />} />
          <Route path="/Donations" element={<Donations />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/live-streaming/puja-stream" element={<LivePujaStreamPage />} />
          <Route path="/puja-details" element={<PujaDetails />} />
          <Route path="/puja-sankalp" element={<PujaSankalp />} />
          <Route path="/explore-temples" element={<ExploreTemples />} />
          <Route path="/chadhava/sankalp" element={<ChadhavaSankalp />} />
          <Route path="/chadhava/checkout" element={<ChadhavaCheckout />} />
          <Route path="/donations/temple" element={<TempleDonation />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
