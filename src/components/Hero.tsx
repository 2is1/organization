import { apps } from "../data/apps";

const stats = [
  { label: "Public apps", value: apps.length.toString() },
  // {
  //   label: "GitHub stars",
  //   value: `${(apps.reduce((s, a) => s + a.stars, 0) / 1000).toFixed(1)}k`,
  // },
  { label: "Live demos", value: apps.filter((a) => a.demo).length.toString() },
  // { label: "License", value: "MIT" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* glow field */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-[-8rem] top-32 h-[24rem] w-[24rem] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Built &amp; shipped in public
        </div>

        <h1 className="mt-6 max-w-12xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
          Two bodies, one physical and one digital, united in spirit.
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
            The apps of 2is1.
          </span>
        </h1>

        <p className="mt-6 max-w-6xl text-lg leading-relaxed text-slate-400">
          2is1 is an organization of developers who build apps with love. These apps come from the heart, not just the brain. That’s why every 2is1 developer strives to deliver high-quality apps.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#apps"
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Browse the apps →
          </a>
          {/* <a
            href="#deploy"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Deploy this site
          </a> */}
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-950/70 px-5 py-5 backdrop-blur">
              <dt className="text-xs uppercase tracking-wider text-slate-500">{s.label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
