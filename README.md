# Nishant Bhadke Portfolio

A focused portfolio for Nishant Bhadke, built to present backend engineering work without turning the site into a resume dump. The writing is intentionally outcome-led: banking platforms, secure APIs, workflow systems, SQL performance, Redis caching, AWS, and Docker delivery.

Live repo: [nishantbhadke/nishant-bhadke-portfolio](https://github.com/nishantbhadke/nishant-bhadke-portfolio)

## What This Site Does

- Opens with a clear engineering positioning statement instead of a generic introduction.
- Highlights measurable impact from BFSI work, including SQL optimization and Redis-backed database load reduction.
- Organizes work, projects, skills, education, certifications, and contact details into a clean one-page flow.
- Uses subtle motion for section reveals and project hover states without heavy visuals or slow assets.
- Exports statically, so it can run on Vercel or GitHub Pages.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

The design uses system fonts, a monochrome palette, static content, and code-based styling to keep the site fast and easy to maintain.

## Project Structure

```text
app/
  globals.css        Global Tailwind styles and page-level polish
  layout.tsx         Metadata and root layout
  page.tsx           Main portfolio page
components/
  contact-footer.tsx Contact and professional links
  project-card.tsx   Animated project card
  section-reveal.tsx Shared Framer Motion reveal wrapper
  site-header.tsx    Sticky blurred navigation
lib/
  profile.ts         Portfolio content and resume-derived copy
```

## Run Locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

If your global `npm` shortcut is broken on Windows, use Node's npm CLI directly:

```powershell
& 'C:\Program Files\nodejs\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run dev
```

## Quality Checks

```powershell
npm run typecheck
npm run lint
npm run build
npm run audit:deps
npm run audit:signatures
```

Current local verification:

- TypeScript: passing
- ESLint: passing
- Production build/static export: passing
- `npm audit`: no vulnerabilities reported
- Lockfile scan: no known compromised packages from the April 2026 watchlist were found

## Deployment

### Vercel

Import the GitHub repository into Vercel and deploy with the default Next.js settings.

### GitHub Pages

This project uses `output: "export"` in `next.config.mjs`, so `npm run build` creates a static `out/` directory. Use that folder as the Pages artifact in a GitHub Actions workflow.

## Content Updates

Most portfolio text lives in `lib/profile.ts`. Update that file when adding new projects, changing contact details, or refining the positioning copy.

Enterprise project links currently point to contact because the original repositories are private. Replace those placeholders when public case studies or demo repositories are available.
