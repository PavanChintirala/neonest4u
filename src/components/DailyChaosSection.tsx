import { motion } from "framer-motion";
import { PhoneIncoming, Repeat2, Wrench, LayoutGrid } from "lucide-react";

const items = [
  { icon: PhoneIncoming, text: "Calls interrupting your workflow all day" },
  { icon: Repeat2, text: "Same questions asked again and again" },
  { icon: Wrench, text: "Maintenance requests coming from everywhere" },
  { icon: LayoutGrid, text: "Trying to track everything across tools" },
];

const DailyChaosSection = () => (
  <section className="section-padding relative">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Sound Familiar?</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
          What your day probably <span className="gradient-text">looks like today</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {items.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-lift flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/60"
          >
            <div className="w-11 h-11 rounded-xl gradient-glow-bg flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-display text-2xl md:text-3xl font-bold"
      >
        <span className="gradient-text">Neonest fixes this.</span>
      </motion.p>
    </div>
  </section>
);

export default DailyChaosSection;
