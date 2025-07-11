import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutSection from "../Components/AboutSection";
import SpiritualPathwaysSection from "../Components/SpiritualPathwaySection";

function Home() {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <SpiritualPathwaysSection/>
      <Footer />
    </div>
  );
}

export default Home;