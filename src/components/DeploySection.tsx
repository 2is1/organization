import { useState } from "react";

const snippets: Record<string, { file: string; code: string }> = {
  "1. Scaffold": {
    file: "terminal",
    code: `npm create vite@latest 2is1.github.io -- --template react-ts
cd 2is1.github.io
npm install
npm install -D tailwindcss @tailwindcss/vite`,
  },
  "2. Base path": {
    file: "vite.config.ts",
    code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // org site (2is1.github.io) -> '/'
  // project site (2is1.github.io/site) -> '/site/'
  base: '/',
})`,
  },
  "3. Workflow": {
    file: ".github/workflows/deploy.yml",
    code: `name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4`,
  },
  "4. Enable": {
    file: "repo settings",
    code: `Settings → Pages → Build and deployment
  Source: GitHub Actions

Push to main. The workflow builds dist/ and publishes it.
Live at https://2is1.github.io within ~60 seconds.

Optional: add a public/404.html copy of index.html
if you use client-side routing.`,
  },
};

export function DeploySection() {
  const tabs = Object.keys(snippets);
  const [tab, setTab] = useState(tabs[0]);
  const [copied, setCopied] = useState(false);
  const current = snippets[tab];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="deploy" className="scroll-mt-24 border-t border-white/5 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Four steps
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ship it to GitHub Pages
            </h2>
            <p className="mt-4 text-slate-400">
              The exact pipeline behind this page: Vite builds a static bundle, GitHub Actions
              uploads <code className="rounded bg-white/10 px-1.5 py-0.5 text-[13px]">dist/</code>{" "}
              as a Pages artifact, and the deploy job publishes it. No tokens, no gh-pages
              branch.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                    tab === t
                      ? "border-emerald-400/40 bg-emerald-400/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-slate-400 hover:bg-white/[0.06]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-xs text-slate-500">{current.file}</span>
              </div>
              <button
                onClick={copy}
                className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-slate-300 transition hover:bg-white/10"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
            <pre className="max-h-[26rem] overflow-auto p-5 font-mono text-[12.5px] leading-relaxed text-slate-300">
              <code>{current.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
