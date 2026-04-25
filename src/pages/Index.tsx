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
      <div className="section-lavender"><DailyChaosSection /></div>
      <div className="section-white"><ProblemSection /></div>
      <div className="section-alt"><SolutionSection /></div>
      <div className="section-white"><FeaturesSection /></div>
      <div className="section-lavender"><HowItWorksSection /></div>
      <div className="section-white"><BenefitsSection /></div>
      <div className="section-alt"><ObjectionsSection /></div>
      <div className="section-white"><AudienceSection /></div>
      <div className="section-lavender"><VisionSection /></div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
