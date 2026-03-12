import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-primary/20 top-[-200px] left-[-200px] animate-pulse-glow" />
      <div className="glow-orb w-[500px] h-[500px] bg-secondary/20 bottom-[-100px] right-[-200px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 gradient-glow-bg border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Community Management</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
            Your 24/7 AI Front Desk for{" "}
            <span className="gradient-text">Modern Communities</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            NeoHome helps property managers reduce operational workload while giving residents instant answers and support through AI-powered voice and chat assistants.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#cta" className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity shadow-lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
              Request Demo
            </a>
            <a href="#cta" className="border border-border bg-background text-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:bg-muted transition-colors">
              Join Early Access
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="animate-float">
            <img
              src={heroImage}
              alt="NeoHome AI assistant handling resident calls and chats"
              className="w-full max-w-lg drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
