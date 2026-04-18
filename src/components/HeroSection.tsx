import { motion } from "framer-motion";
import { PhoneCall, MessageSquare, Wrench, ArrowRight, Sparkles } from "lucide-react";
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
            <span className="text-sm font-medium text-primary">AI-Powered Community Operations</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
            Your 24/7 AI Front Desk for{" "}
            <span className="gradient-text">Modern Communities</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
            Handle resident calls, messages, and maintenance requests automatically — and turn them into organized, trackable work for your team.
          </p>
          <p className="text-base text-foreground/70 max-w-xl mb-8 font-medium">
            No more missed calls. No more messy tracking. No more scattered communication.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#cta" className="cta-glow text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base inline-flex items-center gap-2">
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#cta" className="border border-border bg-background/80 backdrop-blur text-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:bg-muted transition-colors inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
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
          <div className="animate-float relative">
            <img
              src={heroImage}
              alt="NeoHome AI assistant turning resident calls and chats into organized tickets"
              className="w-full max-w-lg drop-shadow-2xl"
            />

            {/* Floating indicators: input → AI → output */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-6 -left-2 md:-left-6 bg-background/90 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-8 h-8 rounded-lg gradient-glow-bg flex items-center justify-center">
                <PhoneCall className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">Incoming call</div>
                <div className="text-[10px] text-muted-foreground">Resident #204</div>
              </div>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute top-1/2 -right-2 md:-right-6 bg-background/90 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-8 h-8 rounded-lg gradient-glow-bg flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-secondary" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">New chat</div>
                <div className="text-[10px] text-muted-foreground">"Pool hours?"</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-2"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Wrench className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground">Ticket #1287 created</div>
                <div className="text-[10px] text-muted-foreground">Routed to maintenance</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
