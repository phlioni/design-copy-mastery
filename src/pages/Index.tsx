import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import ApraBanner from "@/components/ApraBanner";
import Partnership from "@/components/Partnership";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ClosingCTA from "@/components/ClosingCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <HowItWorks />
        <ApraBanner />
        <Partnership />
        <Features />
        <Pricing />
        <ClosingCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
