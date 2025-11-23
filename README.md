# Bhavesh Sadhu — Portfolio (React + Vite)

Responsive portfolio for Bhavesh Sadhu built with React, Vite, Tailwind CSS, Bootstrap 5, and Framer Motion. Includes multi-page routing, dark/light mode, reusable sections, and production-ready styling.

## Setup
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Lint: `npm run lint`
4. Build for production: `npm run build`
5. Preview production build: `npm run preview`

## Structure
- `src/pages` — Home, Projects, About, Contact, Resume
- `src/components` — Reusable UI (hero, skills, projects, experience, contact, nav, footer)
- `src/data/content.js` — Page copy, skills, projects, experience, education, contact data
- `public/resume.pdf` — Replace with the latest resume

## Features
- Mobile-first layout with Bootstrap grid + Tailwind utilities
- Framer Motion animations and glassmorphism accents
- Dark/light theme toggle with localStorage persistence
- SEO-friendly meta tags in `index.html`
- Social links (GitHub, LinkedIn, YouTube) and resume download CTA

## Deploying to Vercel
1. Push the repository to GitHub.
2. In Vercel, create a new project from the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Add `npm install` as the install step (or enable Vercel’s default).
5. Deploy. Set your custom domain if desired.

## Customization
- Update text/content in `src/data/content.js`.
- Replace placeholder project links/images.
- Swap `public/resume.pdf` with your actual PDF.
- Adjust theme tokens in `src/index.css` and Tailwind config.
