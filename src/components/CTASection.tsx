import { motion } from "framer-motion";

const CTASection = () => (
  <section id="cta" className="section-padding relative overflow-hidden">
    <div className="glow-orb w-[500px] h-[500px] bg-primary/15 top-[-150px] right-[-150px] animate-pulse-glow" />
    <div className="glow-orb w-[400px] h-[400px] bg-secondary/15 bottom-[-100px] left-[-100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center relative z-10"
    >
      <div className="gradient-border rounded-3xl p-12 md:p-16 bg-card" style={{ boxShadow: 'var(--shadow-glow)' }}>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Bring AI to <span className="gradient-text">Your Community</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Join the future of community management. Get started with NeoHome today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="gradient-bg text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity" style={{ boxShadow: 'var(--shadow-glow)' }}>
            Request Demo
          </a>
          <a href="#" className="border border-border bg-background text-foreground px-8 py-3.5 rounded-full font-semibold text-base hover:bg-muted transition-colors">
            Join the Waitlist
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
