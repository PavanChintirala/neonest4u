import { motion } from "framer-motion";
import { Building2, Home, Briefcase } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Apartment Communities", desc: "Less front-desk chaos. More resident satisfaction." },
  { icon: Home, title: "HOA Communities", desc: "Instant answers on rules, dues, and updates." },
  { icon: Briefcase, title: "Property Management Companies", desc: "One system across every property you manage." },
];

const AudienceSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Who It's For</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Built for <span className="gradient-text">Every Community</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center p-8 rounded-2xl gradient-border card-lift bg-card"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5" style={{ boxShadow: 'var(--shadow-glow)' }}>
              <a.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
