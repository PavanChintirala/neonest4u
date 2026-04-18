import { motion } from "framer-motion";
import { TrendingDown, Zap, FolderKanban, Rocket } from "lucide-react";

const benefits = [
  { icon: TrendingDown, title: "Reduce operational workload", desc: "Free your team from repetitive calls and manual tracking." },
  { icon: Zap, title: "Respond instantly, 24/7", desc: "Residents get answers in seconds — not hours or days." },
  { icon: FolderKanban, title: "Keep every request organized", desc: "Structured tickets, clear priorities, nothing slips through." },
  { icon: Rocket, title: "Scale without hiring", desc: "Handle more units, more residents, more requests — same team." },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding bg-muted/30 relative overflow-hidden">
    <div className="glow-orb w-[500px] h-[500px] bg-secondary/10 bottom-[-200px] left-[-200px]" />
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Benefits</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Why Teams Choose <span className="gradient-text">NeoHome</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-lift flex gap-4 p-6 rounded-2xl bg-background border border-border/50"
          >
            <div className="w-12 h-12 rounded-xl gradient-glow-bg flex items-center justify-center shrink-0">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
