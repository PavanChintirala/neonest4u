import { motion } from "framer-motion";
import { MessageSquareMore, ClipboardList, AlertCircle, MoonStar } from "lucide-react";

const problems = [
  { icon: MessageSquareMore, title: "Endless Repeat Questions", desc: "Your team answers the same things over and over — pool hours, payments, package pickups." },
  { icon: ClipboardList, title: "Requests From Everywhere", desc: "Calls, texts, emails, voicemails. No standard intake means no standard process." },
  { icon: AlertCircle, title: "Things Slip Through", desc: "Without structure, requests get missed, delayed, or forgotten — and residents notice." },
  { icon: MoonStar, title: "After-Hours Gaps", desc: "Issues happen at night and on weekends. Nobody's there to capture them." },
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
          Running a Community is <span className="gradient-text">Chaotic</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          You're juggling calls, messages, and tickets across a dozen places. Things slip. Residents wait. Your team burns out.
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
            className="gradient-border card-lift p-6 rounded-2xl bg-card"
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
