import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";

import JourneySection from "@/components/home/JourneySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BuyNowSection from "@/components/home/BuyNowSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <JourneySection />
      <TestimonialsSection />
      <BuyNowSection />
      <Footer />
    </main>
  );
};

export default Index;
