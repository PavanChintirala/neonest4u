import logo from "@/assets/neonest-logo.webp";
import mark from "@/assets/neonest-mark.png";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, Check, ChevronDown, Droplets, House, Inbox, Menu, MessageSquare, X } from "lucide-react";
import "./landing.css";

const links = [["Product", "product"], ["How it works", "how-it-works"], ["Who it’s for", "who-its-for"], ["FAQ", "faq"]];
const steps = [
  { title: "Start with the resident’s words", text: "A resident can describe the issue as they would to someone at the front desk. The first message gives NeoNest a place to start." },
  { title: "Ask what’s missing", text: "Targeted follow-up questions collect details that can change the next step, such as where a leak is coming from and whether it’s still active." },
  { title: "Hand off a clear request", text: "The team gets the property, unit, and reported symptoms together in a summary they can review before deciding how to respond." },
];
const messages = [
  ["Maya", "Hi, there’s water pooling under my kitchen sink."],
  ["NeoNest", "Can you see where the water is coming from?"],
  ["Maya", "The curved pipe under the sink. It drips when I run the faucet."],
  ["NeoNest", "Does it keep dripping after the faucet is off?"],
  ["Maya", "No, it stops. I’m in apartment 204 at Cedar Court."],
];
const questions = [
  ["What information does NeoNest collect?", "The intake can capture where the issue is, what the resident observed, and when it happens. The details depend on the issue the resident reports."],
  ["Does NeoNest replace our maintenance team?", "Your team reviews the request, decides how to respond, and coordinates the repair. NeoNest helps gather the details up front."],
  ["Is the walkthrough using real resident data?", "The Cedar Court conversation and request are fictional examples of the intake workflow."],
  ["How do I request a demo?", "Fill in your work details below. NeoNest opens a prepared message in your email app so you can review and send it."],
];

function Brand() {
  return <a className="nn-brand" href="#top"><img src={logo} alt="NeoNest" width={568} height={146} /></a>;
}

function Conversation({ count = messages.length }: { count?: number }) {
  return <div className="nn-conversation">
    <div className="nn-pane-label"><MessageSquare size={15} /> Resident conversation</div>
    <ol>{messages.slice(0, count).map(([sender, message]) =>
      <li key={message} className={sender === "Maya" ? "nn-resident" : "nn-assistant"}>
        <span>{sender}</span><p>{message}</p>
      </li>
    )}</ol>
  </div>;
}

function Request() {
  return <div className="nn-request">
    <div className="nn-pane-label"><Inbox size={15} /> Request summary</div>
    <div className="nn-ticket">
      <div className="nn-ticket-meta"><span>REQ-024</span><span className="nn-status"><Check size={13} /> Ready for review</span></div>
      <div className="nn-ticket-icon"><Droplets size={22} /></div>
      <h3>Kitchen sink drain leak</h3>
      <p>Cedar Court · Apartment 204</p>
      <dl>
        <div><dt>Category</dt><dd>Plumbing</dd></div>
        <div><dt>Location</dt><dd>Curved pipe beneath kitchen sink</dd></div>
        <div><dt>Reported condition</dt><dd>Drips while faucet runs. Stops when turned off.</dd></div>
      </dl>
    </div>
  </div>;
}

export default function Index() {
  const [menu, setMenu] = useState(false);
  const [step, setStep] = useState(0);
  const stepNodes = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("nn-visible");
          reveal.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".nn-reveal").forEach(node => reveal.observe(node));
    const watch = new IntersectionObserver(entries => {
      if (!window.matchMedia("(min-width: 801px)").matches) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) setStep(Number((entry.target as HTMLElement).dataset.step));
      });
    }, { rootMargin: "-35% 0px -40% 0px" });
    stepNodes.current.forEach(node => node && watch.observe(node));
    return () => { reveal.disconnect(); watch.disconnect(); };
  }, []);

  function requestDemo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = `Hi NeoNest,\n\nI'd like to request a demo.\n\nName: ${fields.get("name")}\nWork email: ${fields.get("email")}\nCompany: ${fields.get("company")}`;
    window.location.href = `mailto:hello@neonest.ai?subject=NeoNest%20demo%20request&body=${encodeURIComponent(body)}`;
  }

  return <div className="nn" id="top">
    <a className="nn-skip" href="#main">Skip to content</a>
    <header className="nn-header">
      <div className="nn-wrap nn-nav">
        <Brand />
        <button className="nn-menu" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} aria-controls="nn-navigation" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
        <nav id="nn-navigation" aria-label="Main" className={menu ? "nn-open" : ""} onKeyDown={event => { if (event.key === "Escape") { setMenu(false); document.querySelector<HTMLButtonElement>(".nn-menu")?.focus(); } }}>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
          <a className="nn-button nn-nav-cta" href="#demo" onClick={() => setMenu(false)}>Request a demo <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
    <main id="main" tabIndex={-1}>
      <section className="nn-hero nn-wrap">
        <div className="nn-kicker nn-enter"><span /> Maintenance intake for residential teams</div>
        <h1 className="nn-enter">Maintenance requests,<br className="nn-desktop-break" /> <em>without the back-and-forth.</em></h1>
        <p className="nn-lead nn-enter">Give residents a simple way to report an issue. Give your team the details they need to take the next step.</p>
        <div className="nn-actions nn-enter">
          <a className="nn-button" href="#demo">Request a demo <ArrowUpRight size={17} /></a>
          <a className="nn-text-link" href="#how-it-works">See how it works <ArrowDown size={16} /></a>
        </div>
        <figure className="nn-showcase nn-enter" id="product">
          <div className="nn-window">
            <div className="nn-window-bar"><span><img className="nn-workspace-mark" src={mark} alt="" width={16} height={16} /> NeoNest workspace</span><span>Example request</span></div>
            <div className="nn-workspace"><Conversation /><Request /></div>
          </div>
          <figcaption>From the first resident message to a request your team can review.</figcaption>
        </figure>
      </section>
      <section className="nn-editorial nn-wrap nn-reveal" id="benefits">
        <p className="nn-kicker">Why intake matters</p>
        <div><h2>“My sink is leaking”<br /> is only the start.</h2><p>Which unit? Where is the water coming from? Is it still dripping? NeoNest gathers those details in the conversation, so your team can spend less time chasing answers.</p></div>
      </section>
      <section className="nn-workflow" id="how-it-works">
        <div className="nn-wrap">
          <div className="nn-flow-heading nn-reveal"><p className="nn-kicker">How it works</p><h2>From report to review.</h2></div>
          <div className="nn-flow-grid" id="features">
            <div className="nn-stages">
              {steps.map(({ title, text }, index) => <article key={title} ref={node => { stepNodes.current[index] = node; }} data-step={index} className={step === index ? "nn-active" : ""}>
                <span className="nn-step-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div>
              </article>)}
            </div>
            <div className="nn-sticky">
              <div className="nn-demo-frame">
                <div className="nn-demo-controls" role="group" aria-label="Walkthrough steps">
                  {["Report", "Clarify", "Review"].map((label, index) => <button key={label} type="button" aria-pressed={step === index} aria-controls="nn-stage-preview" onClick={() => setStep(index)}>{label}</button>)}
                </div>
                <div id="nn-stage-preview" className="nn-stage-preview" aria-live="polite">
                  <div className="nn-swap" key={step}>{step === 2 ? <Request /> : <Conversation count={step === 0 ? 1 : messages.length} />}</div>
                </div>
              </div>
              <p className="nn-caption">Illustrative walkthrough · Cedar Court, apartment 204</p>
            </div>
          </div>
        </div>
      </section>
      <section className="nn-audience nn-wrap nn-reveal" id="who-its-for">
        <div><p className="nn-kicker">Who it’s for</p><h2>Built for the people who keep properties running.</h2></div>
        <div className="nn-audience-list">
          <div><Building2 /><div><h3>Apartment communities</h3><p>Give on-site teams the unit and issue details in one place.</p></div></div>
          <div><Inbox /><div><h3>Property management companies</h3><p>Collect consistent maintenance details across multiple properties.</p></div></div>
          <div><House /><div><h3>HOA and condo communities</h3><p>Help your team identify where a reported issue is happening and who should review it.</p></div></div>
        </div>
      </section>
      <section className="nn-faq nn-wrap nn-reveal" id="faq">
        <h2>Frequently asked questions</h2>
        <div>{questions.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div>
      </section>
      <section className="nn-contact" id="demo">
        <div className="nn-wrap nn-contact-grid" id="cta">
          <div><p className="nn-kicker">Request a demo</p><h2>See NeoNest with your workflow in mind.</h2><p>Tell us who you are and we’ll open a draft for you to send.</p></div>
          <form onSubmit={requestDemo}>
            <label>Full name<input name="name" autoComplete="name" required /></label>
            <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Company<input name="company" autoComplete="organization" required /></label>
            <button className="nn-button" type="submit">Open demo request in email <ArrowUpRight size={17} /></button>
            <a className="nn-email" href="mailto:hello@neonest.ai">hello@neonest.ai</a>
          </form>
        </div>
      </section>
    </main>
    <footer id="contact"><div className="nn-wrap nn-footer"><Brand /><nav aria-label="Footer"><a href="#features">Features</a><a href="#benefits">Benefits</a><a href="mailto:hello@neonest.ai">Contact</a></nav><small>© {new Date().getFullYear()} NeoNest</small><a href="#top">Back to top <ArrowRight size={14} /></a></div></footer>
  </div>;
}
