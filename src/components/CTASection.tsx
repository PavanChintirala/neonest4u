import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding relative overflow-hidden">
    <div className="glow-orb w-[500px] h-[500px] bg-primary/40 top-[-150px] right-[-150px] animate-pulse-glow" />
    <div className="glow-orb w-[400px] h-[400px] bg-secondary/40 bottom-[-100px] left-[-100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center relative z-10"
    >
      <div className="panel-vibrant rounded-3xl p-12 md:p-16 relative overflow-hidden" style={{ boxShadow: '0 30px 80px -20px hsl(254, 100%, 62%, 0.45), 0 0 0 1px hsl(48, 100%, 65%, 0.3)' }}>
        <div className="inline-flex items-center gap-2 gradient-glow-bg border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Limited Early Access</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Bring Order to <span className="gradient-text">Your Community Operations</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-3 max-w-xl mx-auto">
          Handle calls, messages, and maintenance without the chaos.
        </p>
        <p className="text-sm font-semibold text-primary mb-8 uppercase tracking-wider">
          Limited early access available
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="cta-glow text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base inline-flex items-center gap-2">
            Request Demo
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#" className="btn-secondary-outline px-8 py-3.5 rounded-full font-semibold text-base">
            Join the Waitlist
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
