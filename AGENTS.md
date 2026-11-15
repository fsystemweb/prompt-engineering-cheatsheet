# AGENTS.md

Prompt Engineering Cheat Sheet: a single-page React site that lists prompt engineering techniques with a definition, rationale and example each, deployed to GitHub Pages.

## Commands
- Install: `npm install` (lockfile is `package-lock.json`)
- Dev server: `npm run dev`
- Build: `npm run build`; preview: `npm run preview`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Deploy to GitHub Pages: `npm run deploy` (builds, then publishes `dist` with gh-pages)
- Tests: none yet

## Conventions
- Stack: Vite 5, React 18, TypeScript 5, Tailwind CSS 3, `lucide-react` icons, ESLint 9 flat config (`eslint.config.js`). ESM (`"type": "module"`).
- `src/App.tsx` holds the whole page and the `techniques` array (`id`, `name`, `definition`, `rationale`, `example`). Add or edit a technique there; keep ids sequential.
- The techniques table in `README.md` mirrors the array; update both together.
- `vite.config.ts` sets `base` to the full GitHub Pages URL; keep it if the repo is renamed or moved.
- `index.html` holds the title and Open Graph tags; `public/` holds the book icon and the social preview image.

## Boundaries
- Always: run `npm run lint`, `npm run typecheck` and `npm run build` before finishing.
- Ask first: adding a dependency, running `npm run deploy`, changing `base` in `vite.config.ts`.
- Never: commit secrets or read `.env` files.
