import { motion } from "framer-motion";
import { BotMessageSquare } from "lucide-react";

const SolutionSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="glow-orb w-[400px] h-[400px] bg-primary/10 top-0 right-[-100px]" />
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6" style={{ boxShadow: 'var(--shadow-glow)' }}>
          <BotMessageSquare className="w-8 h-8 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Solution</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
          Meet <span className="gradient-text">NeoHome</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          NeoHome provides a 24/7 AI layer for community operations — handling resident interactions automatically and organizing requests for your property management team. Think of it as your always-on, infinitely patient front desk.
        </p>
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
