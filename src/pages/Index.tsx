import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DailyChaosSection from "@/components/DailyChaosSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import AudienceSection from "@/components/AudienceSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="section-alt"><DailyChaosSection /></div>
      <ProblemSection />
      <div className="section-alt"><SolutionSection /></div>
      <FeaturesSection />
      <div className="section-alt"><HowItWorksSection /></div>
      <BenefitsSection />
      <div className="section-alt"><ObjectionsSection /></div>
      <AudienceSection />
      <div className="section-alt"><VisionSection /></div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
