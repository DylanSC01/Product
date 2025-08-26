# Copilot Instructions for AI Agents

## Project Overview
- This is a React + TypeScript project bootstrapped with Vite.
- The main entry point is `src/main.tsx`, which renders the root `App` component from `src/App.tsx`.
- The project uses a modular structure: UI components are in `src/components/`, assets in `src/assets/` and `public/`, and data in `src/data/`.

## Key Patterns & Conventions
- **Component Organization:**
  - UI components are grouped by domain in `src/components/`, with further subfolders for `sections` and `ui`.
  - Use functional components and TypeScript for all new code.
  - Prefer named exports for components and utilities.
- **Styling:**
  - Global styles are in `src/index.css`.
  - Component-level styles may use inline styles or CSS modules (if present).
- **Assets:**
  - Images and fonts are stored in `public/images/`, `public/fonts/`, and referenced via relative paths.
- **Data:**
  - Static data is defined in `src/data/data.ts`.
- **Types:**
  - Shared types are defined in `src/types/types.ts`.

## Developer Workflows
- **Development:**
  - Start the dev server: `npm run dev`
  - Entry HTML is `index.html` at the project root.
- **Build:**
  - Production build: `npm run build`
  - Output is in the `dist/` directory (not committed).
- **Linting:**
  - Lint code: `npm run lint`
  - ESLint config is in `eslint.config.js`. Type-aware rules require updating `parserOptions.project`.
- **Testing:**
  - No test setup detected by default. Add tests in `src/` and update this file if a test runner is added.

## Integration & External Dependencies
- Uses Vite plugins for React (`@vitejs/plugin-react` or `@vitejs/plugin-react-swc`).
- No backend or API integration is present by default.
- All routing, state, and logic is handled client-side.

## Examples & References
- See `src/components/ui/Card.tsx` for a complex UI card pattern.
- See `src/components/sections/` for how to organize feature sections.
- See `src/data/data.ts` for static data patterns.

## Project-Specific Notes
- Follow the file/folder structure for new features.
- Use TypeScript types for all props and data.
- Reference assets using the `public/` directory for static files.

---

If you add new workflows, conventions, or integrations, update this file to keep AI agents productive.
