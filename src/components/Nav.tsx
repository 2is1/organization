import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#apps", label: "Apps" },
  { href: "#why", label: "Why Vite" },
  { href: "#deploy", label: "Deploy" },
  { href: "#contribute", label: "Contribute" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            2is1<span className="text-slate-500"> / org</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/2is1"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-200 md:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/2is1"
            target="_blank"
            rel="noreferrer"
            className="mt-1 block rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-950"
          >
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
