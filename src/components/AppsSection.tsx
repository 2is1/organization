import { useMemo, useState } from "react";
import { apps, categories, statusStyles, type AppItem } from "../data/apps";

function Stars({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-amber-400/80">
        <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" />
      </svg>
      {n.toLocaleString()}
    </span>
  );
}

function Card({ app, onOpen }: { app: AppItem; onOpen: (a: AppItem) => void }) {
  return (
    <article
      onClick={() => onOpen(app)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${app.accent} opacity-0 blur-3xl transition duration-500 group-hover:opacity-30`}
      />
      <div className="flex items-start justify-between gap-3">
        <div
          className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${app.accent} text-lg text-slate-950 shadow-lg`}
        >
          {app.glyph}
        </div>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium capitalize ring-1 ring-inset ${statusStyles[app.status]}`}
        >
          {app.status}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">{app.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-400">{app.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {app.stack.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3.5">
        {/* <Stars n={app.stars} /> */}
        <span className="text-xs text-slate-500">
          updated {new Date(app.updated).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </span>
      </div>
    </article>
  );
}

function Modal({ app, onClose }: { app: AppItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
      >
        <div
          className={`absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${app.accent} opacity-25 blur-3xl`}
        />
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 hover:text-white"
        >
          ✕
        </button>
        <div
          className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${app.accent} text-xl text-slate-950`}
        >
          {app.glyph}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-white">{app.name}</h3>
        <p className="mt-1 text-sm text-slate-400">{app.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">{app.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {app.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* <a
            href={app.repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            View source
          </a> */}
          {app.demo && (
            <a
              href={app.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Live app ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function AppsSection() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<"stars" | "updated" | "name">("stars");
  const [active, setActive] = useState<AppItem | null>(null);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps
      .filter((a) => (cat === "All" ? true : a.category.some((category) => category === cat)))
      .filter(
        (a) =>
          !q ||
          a.name.toLowerCase().includes(q) ||
          a.tagline.toLowerCase().includes(q) ||
          a.stack.some((s) => s.toLowerCase().includes(q)),
      )
      .sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        return b.updated.localeCompare(a.updated);
      });
  }, [query, cat, sort]);

  return (
    <section id="apps" className="scroll-mt-24 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              The catalog
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Apps built by the organization
            </h2>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Click a card for details.
          </p>
        </div>

        {/* controls */}
        <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-lg px-3 py-1.5 text-sm transition ${
                  cat === c
                    ? "bg-white text-slate-950 font-semibold"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search apps or tech…"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/50 focus:bg-white/10 lg:w-60"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 outline-none focus:border-cyan-400/50"
            >
              {/* <option value="stars" className="bg-slate-900">Most stars</option> */}
              <option value="updated" className="bg-slate-900">Recently updated</option>
              <option value="name" className="bg-slate-900">Name A–Z</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <Card key={a.slug} app={a} onOpen={setActive} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-16 text-center text-sm text-slate-500">
            No apps match “{query}”. Try another keyword.
          </p>
        )}
      </div>

      {active && <Modal app={active} onClose={() => setActive(null)} />}
    </section>
  );
}
