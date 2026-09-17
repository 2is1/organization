import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <div>
            <p className="text-sm font-semibold text-white">2is1</p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} · MIT licensed · Hosted on GitHub Pages
            </p>
          </div>
        </div>
        <div className="flex gap-5 text-sm text-slate-400">
          <a className="transition hover:text-white" href="https://github.com/2is1" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="transition hover:text-white" href="#apps">
            Apps
          </a>
          <a className="transition hover:text-white" href="#deploy">
            Deploy
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-5 text-center text-xs text-slate-600 sm:text-left">
        Built with React + Vite + Tailwind CSS — the recommended stack for static GitHub Pages sites.
      </p>
    </footer>
  );
}
