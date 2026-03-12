import { motion } from "framer-motion";
import { MessageSquareMore, ClipboardList, Clock, Radio } from "lucide-react";

const problems = [
  { icon: MessageSquareMore, title: "Constant Requests", desc: "Residents call and message non-stop with questions, complaints, and requests." },
  { icon: ClipboardList, title: "Manual Tracking", desc: "Maintenance issues tracked across spreadsheets, emails, and sticky notes." },
  { icon: Clock, title: "Slow Response Times", desc: "Residents wait hours or days for answers to simple community questions." },
  { icon: Radio, title: "Fragmented Communication", desc: "Information scattered between managers, vendors, and residents with no single source." },
];

const ProblemSection = () => (
  <section className="section-padding relative">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Problem</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Community Management is <span className="gradient-text">Broken</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Property managers are overwhelmed. Residents are frustrated. The tools haven't caught up.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="gradient-border p-6 rounded-2xl bg-card hover:shadow-lg transition-shadow"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="w-12 h-12 rounded-xl gradient-glow-bg flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
