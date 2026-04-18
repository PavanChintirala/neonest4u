import { motion } from "framer-motion";
import { Phone, MessageCircle, Wrench, Check } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI Phone Agent",
    subtitle: "For Property Managers",
    desc: "Answers every call and captures every request automatically — even after hours.",
    outcome: "Never miss a call or lose a request.",
  },
  {
    icon: MessageCircle,
    title: "Resident AI Chat",
    subtitle: "For Residents",
    desc: "Instant answers about rules, amenities, payments, and maintenance — anytime.",
    outcome: "Reduce interruptions and response time.",
  },
  {
    icon: Wrench,
    title: "Smart Maintenance",
    subtitle: "Coordination",
    desc: "Turns conversations into structured, trackable tickets routed to the right team.",
    outcome: "Your team gets clear, actionable work.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding relative bg-muted/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Features</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Powerful AI, <span className="gradient-text">Real Outcomes</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Three capabilities that take community operations from chaotic to organized.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="gradient-border card-lift rounded-2xl p-8 bg-background group"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ boxShadow: 'var(--shadow-glow)' }}>
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">{f.title}</h3>
            <p className="text-sm font-medium text-primary mb-3">{f.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{f.desc}</p>
            <div className="flex items-start gap-2 pt-4 border-t border-border/60">
              <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
              </div>
              <p className="text-sm font-semibold text-foreground">{f.outcome}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
