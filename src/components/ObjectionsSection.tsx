import { motion } from "framer-motion";
import { UserX, MessageSquareWarning, Inbox, Check } from "lucide-react";

const points = [
  { icon: UserX, text: "Residents don't always use portals" },
  { icon: MessageSquareWarning, text: "Calls and messages still happen" },
  { icon: Inbox, text: "Requests still come from everywhere" },
];

const ObjectionsSection = () => (
  <section className="section-padding relative bg-muted/30">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">The Gap</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
          Why existing tools <span className="gradient-text">don't solve this</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {points.map((p, i) => (
          <motion.div
            key={p.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-lift p-6 rounded-2xl bg-background border border-border/60 text-center"
          >
            <div className="w-12 h-12 rounded-xl gradient-glow-bg flex items-center justify-center mx-auto mb-4">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="text-foreground font-medium">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="gradient-border rounded-2xl p-6 bg-card flex items-start gap-4 max-w-3xl mx-auto"
        style={{ boxShadow: 'var(--shadow-card)' }}
      >
        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
          <Check className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
        </div>
        <p className="text-foreground font-medium leading-relaxed">
          Neonest captures requests no matter how they come in — and keeps everything in one system.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ObjectionsSection;
