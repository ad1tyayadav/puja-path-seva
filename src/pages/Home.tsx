import AboutSection from "../Components/AboutSection";
import SpiritualPathwaysSection from "../Components/SpiritualPathwaySection";
import OurPujaSection from "../Components/OurPujaSection";
import HeroSection from "../Components/HeroSection";

function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection />
      <OurPujaSection/>
      <SpiritualPathwaysSection/>
    </div>
  );
}

export default Home;