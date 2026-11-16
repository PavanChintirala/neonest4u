import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const summaryRows = [
  { label: "Issue", value: "Kitchen sink leak" },
  { label: "Location", value: "Under-sink plumbing" },
  { label: "Condition", value: "Active leak" },
  { label: "Details", value: "Collected from resident" },
];

const HeroSection = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Editorial copy */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="section-label mb-5">Maintenance intake for residential teams</p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] tracking-tight text-foreground mb-6">
            Maintenance requests,
            <br />
            without the back-and-forth.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-9">
            Give residents a simpler way to report issues — and your team the details they need to move forward.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#demo" className="btn-primary">
              Request a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </motion.div>

        {/* Product mockup — illustrative intake workflow */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="surface-card overflow-hidden max-w-lg mx-auto lg:ml-auto">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/40">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-[10px] font-semibold">N</span>
                </div>
                <span className="text-sm font-medium text-foreground">NeoNest Intake</span>
              </div>
              <span className="text-[11px] text-muted-foreground">Illustrative workflow</span>
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-end">
                <div className="bubble-resident max-w-[80%]">My kitchen sink is leaking.</div>
              </div>
              <div className="flex justify-start">
                <div className="bubble-neonest max-w-[85%]">
                  Is the water leaking from the faucet, the pipes underneath, or somewhere else?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bubble-resident max-w-[80%]">From the pipe under the sink.</div>
              </div>
              <div className="flex justify-start">
                <div className="bubble-neonest max-w-[85%]">Is water actively leaking right now?</div>
              </div>
            </div>

            <div className="mx-5 mb-5 rounded-lg border border-border bg-background p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Request summary
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Ready for review
                </span>
              </div>
              <dl className="space-y-2">
                {summaryRows.map((row) => (
                  <div key={row.label} className="flex items-baseline gap-3 text-sm">
                    <dt className="w-20 shrink-0 text-muted-foreground">{row.label}</dt>
                    <dd className="text-foreground font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
