Ship it to GitHub Pages

The exact pipeline behind this page: Vite builds a static bundle, GitHub Actions uploads dist/ as a Pages artifact, and the deploy job publishes it. No tokens, no gh-pages branch.

**1. Scaffold**

```bash
npm create vite@latest 2is1.github.io -- --template react-ts
cd 2is1.github.io
npm install
npm install -D tailwindcss @tailwindcss/vite
```

**2. Base path**

```bash
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // org site (2is1.github.io) -> '/'
  // project site (2is1.github.io/site) -> '/site/'
  base: '/',
})
```

**3. Workflow**

```bash
name: Deploy to GitHub Pages

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
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**4. Enable**

```bash
Settings → Pages → Build and deployment
  Source: GitHub Actions

Push to main. The workflow builds dist/ and publishes it.
Live at https://2is1.github.io within ~60 seconds.

Optional: add a public/404.html copy of index.html
if you use client-side routing.
```