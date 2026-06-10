This repository is a personal developer portfolio for Alain Mimeault.

Overview

This is a single-page React + Vite portfolio showcasing projects, skills, and contact links. All editable content lives in `src/data/*.json` so a beginner can update texts and links without changing components.

Tech stack

- React
- Vite
- Bootstrap 5.3
- react-icons

Local setup

```bash
git clone <repo>
cd portfolio
npm install
npm run dev
```

How to customise content

- Edit `src/data/site.json` for name, tagline, meta and social links.
- Edit `src/data/projects.json` to update projects. Field explanations are included in the file.
- Edit `src/data/skills.json` to update skills and categories.

Deployment (GitHub Pages or Vercel)

- If deploying to GitHub Pages, set the correct `base` in `vite.config.js` (e.g. `base: '/repo-name/'`).
- Run `npm run build`.
- Deploy using `gh-pages` or GitHub Actions, or use Vercel for zero-config deploys.
- Enable Pages in Settings → Pages → set source to `gh-pages` branch (if using gh-pages).

Troubleshooting

- Blank page after deploy → check `base` in `vite.config.js`.
- Images not loading → use `/` prefix or place files in `public/`.
- Stale deploy showing → hard refresh (Cmd/Ctrl+Shift+R).
