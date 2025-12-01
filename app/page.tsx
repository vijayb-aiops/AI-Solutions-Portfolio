'use client';

export default function Home() {
  return (
    <div className="min-h-screen p-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute -top-24 -right-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-indigo-500 text-white font-bold">
              AI
            </span>
            <span className="text-white text-xl font-semibold tracking-tight">
              Apex IT & AI
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#services" className="hover:text-white/90 transition-colors">Services</a>
            <a href="#solutions" className="hover:text-white/90 transition-colors">Solutions</a>
            <a href="#work" className="hover:text-white/90 transition-colors">Work</a>
            <a href="#about" className="hover:text-white/90 transition-colors">About</a>
            <a href="#contact" className="hover:text-white/90 transition-colors">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition"
          >
            Get a quote
          </a>
        </header>

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Trusted IT & AI partner for modern businesses
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Build, Automate, and Scale with Intelligent Solutions
            </h1>
            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              We design robust IT systems and deploy practical AI that drives real business outcomes.
              From cloud architecture to custom AI agents, we deliver end‑to‑end solutions that perform.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 hover:opacity-95 transition"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/20 hover:bg-white/5 transition"
              >
                See our work
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-left text-sm text-slate-300 sm:grid-cols-4">
              <div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div>Projects delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div>Uptime architectures</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">3x</div>
                <div>Avg. process efficiency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div>Support options</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Core Services
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Strategy, implementation, and ongoing support—tailored to your stage and scale.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Consulting & Agents",
              desc: "Identify high‑impact use cases and deploy reliable AI agents, RAG pipelines, and workflow automations.",
              icon: "🤖",
            },
            {
              title: "Cloud & DevOps",
              desc: "Design scalable cloud architectures with CI/CD, observability, and cost optimization baked in.",
              icon: "☁️",
            },
            {
              title: "Custom Software",
              desc: "Modern web apps, APIs, and integrations engineered for performance and maintainability.",
              icon: "🧩",
            },
            {
              title: "Data Engineering",
              desc: "Data pipelines, warehousing, and analytics foundations that power insight and automation.",
              icon: "📊",
            },
            {
              title: "Security & Compliance",
              desc: "Best practices, reviews, and controls to keep your systems resilient and compliant.",
              icon: "🛡️",
            },
            {
              title: "Support & SRE",
              desc: "Proactive monitoring and incident response to keep your critical services online.",
              icon: "🧭",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl">{s.icon}</div>
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500/15 to-indigo-500/15" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Practical AI that ships and sticks
              </h2>
              <p className="mt-4 text-slate-600">
                We focus on measurable ROI: faster ops, happier customers, and scalable foundations.
                Our team blends senior product engineering with applied AI to deliver outcomes—fast.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Agentic workflows that automate repetitive tasks across tools
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  RAG over your private data with governance and observability
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Cloud‑native infrastructure designed for security and cost control
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  Book a discovery call
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 blur-xl" />
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: "Time to value", v: "2–6 weeks" },
                    { k: "Avg. ROI", v: "3–10x" },
                    { k: "Compliance", v: "SOC2-ready" },
                    { k: "SLA", v: "99.9%+" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-lg bg-slate-50 p-4">
                      <div className="text-xs uppercase tracking-wide text-slate-500">{m.k}</div>
                      <div className="mt-1 text-lg font-semibold text-slate-900">{m.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg bg-slate-900 p-4 text-slate-100">
                  "They shipped production‑ready AI with clear success metrics. The impact was immediate."
                  <div className="mt-2 text-sm text-slate-300">COO, SaaS Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A snapshot of outcomes we've delivered for clients across industries.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline text-sm font-medium text-indigo-600 hover:text-indigo-700">
            Work with us →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Customer Support AI",
              desc: "Deployed agentic triage and RAG, reducing first response time by 71%.",
            },
            {
              title: "Predictive Maintenance",
              desc: "IoT pipelines and ML models cut downtime by 35% for a manufacturing client.",
            },
            {
              title: "Fintech Cloud Modernization",
              desc: "Migrated to containerized microservices with 60% infra cost savings.",
            },
          ].map((c) => (
            <article key={c.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-50" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <div className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                  Case study →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Senior team. Startup speed.
              </h2>
              <p className="mt-4 text-slate-600">
                We're engineers, product leaders, and designers who have shipped at scale. We prefer
                small teams, direct communication, and outcome‑driven engagements.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { k: "Years in industry", v: "10+" },
                  { k: "Team size", v: "6–10" },
                  { k: "Stack", v: "TS, Python, Cloud" },
                  { k: "Engagements", v: "Fixed / Retainer" },
                ].map((i) => (
                  <div key={i.k} className="rounded-lg bg-slate-50 p-4">
                    <div className="text-xs uppercase tracking-wide text-slate-500">{i.k}</div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">{i.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-50 to-indigo-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Our Approach</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                <li>• Discovery sprint to define ROI targets and constraints</li>
                <li>• Roadmap with measurable milestones and success metrics</li>
                <li>• Iterative delivery with demos and transparent status</li>
                <li>• Production readiness: security, monitoring, documentation</li>
              </ul>
              <div className="mt-6 rounded-lg bg-white p-4 text-slate-700 ring-1 ring-slate-200">
                "Clear communication, thoughtful engineering, and a bias for impact."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Let's talk about your next project
              </h2>
              <p className="mt-4 text-slate-300">
                Tell us about your goals and constraints. We'll propose an approach within 48 hours.
              </p>
              <div className="mt-8 text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  Response within 1 business day
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  NDA available upon request
                </div>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs text-slate-200">First name</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-200">Last name</label>
                    <input
                      type="text"
                      className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-200">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-200">What do you need help with?</label>
                  <select
                    className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-cyan-500"
                    defaultValue="AI Solutions"
                  >
                    <option className="text-slate-900">AI Solutions</option>
                    <option className="text-slate-900">Cloud & DevOps</option>
                    <option className="text-slate-900">Custom Software</option>
                    <option className="text-slate-900">Data & Analytics</option>
                    <option className="text-slate-900">Security Review</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-200">Project details</label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Share goals, timeline, and constraints..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
              >
                Submit inquiry
              </button>
              <p className="mt-3 text-center text-xs text-slate-300">
                We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-indigo-500 text-white text-sm font-bold">
                AI
              </span>
              <span className="text-slate-800 text-sm font-semibold">Apex IT & AI</span>
            </div>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} Apex IT & AI. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-slate-600">
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
