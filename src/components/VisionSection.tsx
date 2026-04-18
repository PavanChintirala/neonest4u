import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const VisionSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="glow-orb w-[600px] h-[600px] bg-primary/10 top-[-200px] left-1/2 -translate-x-1/2" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Vision</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
          One system for{" "}
          <span className="gradient-text">communication and operations</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          NeoHome is building the system that connects communication and operations for residential communities.
        </p>
      </motion.div>
    </div>
  </section>
);

export default VisionSection;
