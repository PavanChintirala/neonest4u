import { motion } from "framer-motion";
import { Phone, MessageCircle, Wrench } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI Phone Agent",
    subtitle: "For Property Managers",
    desc: "The AI answers incoming resident calls, understands requests, logs issues, answers common questions, and creates structured tickets automatically — reducing workload for management teams.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: MessageCircle,
    title: "Resident AI Chat",
    subtitle: "For Residents",
    desc: "Residents use a simple AI chatbot to ask about rules, amenities, maintenance updates, and get instant answers anytime — no waiting, no frustration.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Wrench,
    title: "Smart Maintenance",
    subtitle: "Coordination",
    desc: "When a resident reports an issue, NeoHome automatically categorizes the request and creates an organized workflow for the property management team.",
    gradient: "from-primary to-accent",
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
          Powerful AI, <span className="gradient-text">Simple Experience</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Three core capabilities that transform how communities operate.
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
            className="gradient-border rounded-2xl p-8 bg-background hover:shadow-xl transition-all duration-300 group"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ boxShadow: 'var(--shadow-glow)' }}>
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-1">{f.title}</h3>
            <p className="text-sm font-medium text-primary mb-3">{f.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
