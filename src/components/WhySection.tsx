const options = [
  {
    name: "React + Vite",
    verdict: "Recommended",
    best: true,
    notes: [
      "Outputs pure static files — exactly what GitHub Pages serves",
      "Sub-second HMR, builds in a few seconds",
      "Components make an app catalog trivial to extend",
      "One `base` option and you're Pages-ready",
    ],
  },
  {
    name: "Next.js",
    verdict: "Overkill",
    best: false,
    notes: [
      "Needs `output: 'export'` on Pages",
      "SSR, ISR and image optimization all disabled",
      "Heavier toolchain for a marketing/catalog site",
    ],
  },
  {
    name: "Jekyll / Pages default",
    verdict: "Too rigid",
    best: false,
    notes: [
      "Zero-config on Pages, but Ruby + Liquid",
      "No component model or modern tooling",
      "Interactive filtering means hand-written JS",
    ],
  },
];

export function WhySection() {
  return (
    <section id="why" className="scroll-mt-24 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
          The stack decision
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why this site is built with React&nbsp;+&nbsp;Vite
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          GitHub Pages is a static file host — no Node server, no API routes, no server-side
          rendering. The best framework is the one that produces the smallest, fastest static
          bundle with the least ceremony. That's Vite.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {options.map((o) => (
            <div
              key={o.name}
              className={`relative rounded-2xl border p-6 ${
                o.best
                  ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-transparent"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{o.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                    o.best
                      ? "bg-cyan-400 text-slate-950"
                      : "border border-white/10 text-slate-400"
                  }`}
                >
                  {o.verdict}
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {o.notes.map((n) => (
                  <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                    <span className={o.best ? "text-cyan-400" : "text-slate-600"}>
                      {o.best ? "✓" : "·"}
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
