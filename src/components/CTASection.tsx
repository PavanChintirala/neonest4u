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
      <div className="panel-vibrant rounded-3xl p-12 md:p-16 relative overflow-hidden" style={{ boxShadow: '0 30px 80px -20px hsl(214, 100%, 55%, 0.5), 0 0 0 1px hsl(250, 90%, 72%, 0.35)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(214,100%,82%,0.5),transparent_50%)] pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur border border-white/40 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="text-xs font-semibold text-white uppercase tracking-wider">Limited Early Access</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-sm">
            Bring Order to <span className="bg-card-foreground text-primary-foreground px-3 rounded-lg inline-block">Your Community Operations</span>
          </h2>
          <p className="text-white/90 text-lg mb-3 max-w-xl mx-auto">
            Handle calls, messages, and maintenance without the chaos.
          </p>
          <p className="text-sm font-semibold text-white/80 mb-8 uppercase tracking-wider">
            Limited early access available
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="cta-glow px-8 py-3.5 rounded-full font-semibold text-base inline-flex items-center gap-2">
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white/15 backdrop-blur border border-white/50 text-white hover:bg-white hover:text-accent transition-all px-8 py-3.5 rounded-full font-semibold text-base">
              Join the Waitlist
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default CTASection;
