import { Logo } from "./Logo";

const steps = [
  {
    title: "Pick an issue",
    body: "Anything labelled good-first-issue across the org is fair game. Say hi in the thread first.",
    icon: "◍",
  },
  {
    title: "Pair on it",
    body: "2is1 means two people, one deliverable. Every PR gets a reviewer assigned within a day.",
    icon: "⧉",
  },
  {
    title: "Ship it",
    body: "Merged PRs deploy automatically. Your name lands in the release notes and on this page.",
    icon: "↗",
  },
];

export function Contribute() {
  return (
    <section id="contribute" className="scroll-mt-24 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 sm:p-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Logo className="h-12 w-12" />
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build the next one with us
              </h2>
              <p className="mt-4 text-slate-400">
                We keep the surface small and the feedback loop tight. If you like shipping
                tools you'd actually use yourself, you'll fit right in.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/2is1"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Open the org on GitHub
                </a>
                <a
                  href="https://github.com/2is1/.github/blob/master/profile/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contributing guide
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-5 backdrop-blur"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      <span className="mr-2 text-slate-600">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
