import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutSection from "../Components/AboutSection";
import SpiritualPathwaysSection from "../Components/SpiritualPathwaySection";
import OurPujaSection from "../Components/OurPujaSection";
import HeroSection from "../Components/HeroSection";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutSection />
      <OurPujaSection/>
      <SpiritualPathwaysSection/>
      <Footer />
    </div>
  );
}

export default Home;