# SANG Sokewin Portfolio

An animated, responsive portfolio built with React, TypeScript, Vite/Vinext, Tailwind CSS, Framer Motion, React Three Fiber, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

## Updating content and assets

All facts, projects, experience, and technologies live in `app/content.ts`. Asset folders are pre-created under `public/assets/` for a profile photo, projects, organizations, events, and certificates. Keep image paths in `app/content.ts` aligned with the files you add.

The placeholders intentionally preserve layout while assets are missing.

## Privacy

The site does not display a phone number, date of birth, or residential address. The CV control opens an email request, rather than publishing the supplied CV with those details. Replace `cvLink` in `app/content.ts` only after preparing a public-safe CV.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys the built static client to GitHub Pages after the repository is connected and Pages is enabled in the GitHub repository settings.
