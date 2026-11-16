import { motion } from "framer-motion";

const stages = [
  {
    step: "01",
    title: "Residents describe the issue",
    desc: "Residents explain what's happening in their own words, through a straightforward conversational interface.",
    snippet: (
      <div className="flex justify-end">
        <div className="bubble-resident max-w-[90%]">The bathroom fan is making a rattling noise.</div>
      </div>
    ),
  },
  {
    step: "02",
    title: "NeoNest gathers the missing details",
    desc: "Relevant follow-up questions clarify the problem and collect the information your team actually needs.",
    snippet: (
      <div className="flex justify-start">
        <div className="bubble-neonest max-w-[90%]">
          Does the noise happen constantly, or only when the fan first turns on?
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Your team receives a clearer request",
    desc: "Property managers review more complete information — with less manual follow-up before work can begin.",
    snippet: (
      <div className="rounded-lg border border-border bg-background p-3.5 space-y-1.5">
        <div className="flex items-baseline gap-2 text-xs">
          <span className="w-14 shrink-0 text-muted-foreground">Issue</span>
          <span className="text-foreground font-medium">Bathroom fan rattle</span>
        </div>
        <div className="flex items-baseline gap-2 text-xs">
          <span className="w-14 shrink-0 text-muted-foreground">Pattern</span>
          <span className="text-foreground font-medium">Only at startup</span>
        </div>
        <div className="flex items-baseline gap-2 text-xs">
          <span className="w-14 shrink-0 text-muted-foreground">Status</span>
          <span className="text-primary font-medium">Ready for review</span>
        </div>
      </div>
    ),
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-14"
      >
        <p className="section-label mb-4">How it works</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
          Three steps between the report and the review.
        </h2>
      </motion.div>

      <div className="relative grid md:grid-cols-3 gap-10 md:gap-8">
        {/* Connector line (desktop) */}
        <div
          aria-hidden
          className="hidden md:block absolute top-5 left-[16%] right-[16%] h-px bg-border"
        />
        {stages.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="relative z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">
                {s.step}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
            <div className="surface-card p-4">{s.snippet}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
