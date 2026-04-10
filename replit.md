# Barbería Wilson

## Overview

A complete landing page for **Barbería Wilson** — a traditional barbershop in Zaragoza, Spain. Built as a React + Vite SPA, ready to deploy to Vercel with zero configuration.

## Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4, custom warm palette (burgundy, cream, gold)
- **Animations**: CSS IntersectionObserver scroll-triggered reveals
- **Typography**: Playfair Display (headings) + Inter (body)
- **Routing**: Wouter (SPA)
- **No backend** — fully static frontend

## Key Files

- `artifacts/barberia/src/App.tsx` — Main landing page with all sections
- `artifacts/barberia/src/index.css` — Theme, colors, and typography
- `artifacts/barberia/public/barber-hero.png` — Hero background photo
- `artifacts/barberia/vite.config.ts` — Vite config (works on Replit and Vercel)
- `artifacts/barberia/vercel.json` — Vercel deployment configuration

## Sections

1. Hero — full-photo with headline and CTA
2. Filosofía — brand story and values
3. Servicios — pricing table (7 services)
4. CTA break — reservation prompt
5. Testimonios — client reviews
6. Visítanos — address, hours, map, WhatsApp

## Commands

- `pnpm --filter @workspace/barberia run dev` — start dev server
- `pnpm --filter @workspace/barberia run build` — build for production (outputs to `artifacts/barberia/dist`)

## Vercel Deployment

The `vercel.json` at the root of the artifact configures Vercel:
- Framework: vite
- Output directory: dist
- SPA rewrite: all routes → /index.html

To deploy to Vercel, upload or link the `artifacts/barberia/` folder as the root of a Vercel project.
