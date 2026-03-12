import { motion } from "framer-motion";
import { PhoneCall, Brain, ClipboardCheck, Users } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Resident Calls or Chats", desc: "A resident reaches out via phone or chatbot." },
  { icon: Brain, title: "AI Understands the Request", desc: "NeoHome processes and categorizes the inquiry." },
  { icon: ClipboardCheck, title: "Ticket or Request Created", desc: "A structured ticket is generated automatically." },
  { icon: Users, title: "Team Gets Organized Info", desc: "Management receives clear, actionable information." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">How It Works</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
          Four Simple <span className="gradient-text">Steps</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />

        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center relative"
          >
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5 relative z-10" style={{ boxShadow: 'var(--shadow-glow)' }}>
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-2 block">Step {i + 1}</span>
            <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
