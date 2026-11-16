import { motion } from "framer-motion";
import { ArrowRight, CircleHelp, CheckCircle2 } from "lucide-react";

const followUps = [
  "Which part of the AC isn't working?",
  "Is it blowing air at all?",
  "When did the problem start?",
  "Is it affecting the whole unit?",
];

const collected = [
  { label: "Issue", value: "AC not cooling" },
  { label: "Scope", value: "Whole unit, started yesterday" },
  { label: "Symptoms", value: "Runs constantly, air stays warm" },
  { label: "Access", value: "Resident home after 5pm" },
];

const BeforeAfterSection = () => (
  <section id="product" className="section-padding section-sage">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-14"
      >
        <p className="section-label mb-4">The difference</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          From vague requests to actionable details.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A resident's first message rarely contains what your team needs. NeoNest gathers the missing
          details up front, so the review starts with context — not questions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="surface-card p-6 flex flex-col"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5">
            Before NeoNest
          </p>
          <div className="flex justify-end mb-5">
            <div className="bubble-resident max-w-[85%]">"There's something wrong with my AC."</div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Now your team has to ask:</p>
          <ul className="space-y-2.5">
            {followUps.map((q) => (
              <li key={q} className="flex items-start gap-2.5 text-sm text-foreground">
                <CircleHelp className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-5 text-sm text-muted-foreground border-t border-border mt-5">
            Each answer means another message, another call, another day.
          </p>
        </motion.div>

        {/* Connector */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="surface-card p-6 flex flex-col border-primary/25"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-5">
            With NeoNest
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            A guided intake collects the relevant details before the request reaches your team:
          </p>
          <dl className="space-y-3">
            {collected.map((row) => (
              <div key={row.label} className="flex items-baseline gap-3 text-sm">
                <dt className="w-20 shrink-0 text-muted-foreground">{row.label}</dt>
                <dd className="text-foreground font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-auto pt-5 text-sm text-foreground border-t border-border mt-5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            One request, reviewed once, with the details attached.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
