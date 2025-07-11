import LandingPage from "./components/LandingPage";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Decorations from "./components/ui/decoration";
import Image from "next/image";

const Home = () => {
  return (
    // <main>
    //   <HeroSection />
    //   <LandingPage />
    //   <Footer />
    // </main>
     <main className="relative bg-[#F9F4EF] overflow-x-hidden">
      <Decorations />
      <HeroSection />
      <LandingPage />
      <Footer />
    </main>
  );
};

export default Home;

