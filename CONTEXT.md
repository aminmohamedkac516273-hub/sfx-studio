# SFX Studio — Context File

## Project Overview
AI-powered SaaS video editing platform for creators, video editors, and universities.
It automatically analyzes video footage and suggests/places matching Sound Effects (SFX).
Clients can review edits and request AI-generated changes. Universities get classroom tools.

## Tech Stack
- Next.js 14 (App Router, TypeScript strict)
- Tailwind CSS 3.4 (Dark Mode First)
- Zustand (State Management)
- Framer Motion (Animations)
- Lucide React (Icons)
- clsx + tailwind-merge (cn helper)

## Design System
- **Background:** `bg-zinc-950` (base), `bg-zinc-900` (surfaces)
- **Borders:** `border-zinc-800/60`
- **Accent:** `from-indigo-500 to-violet-500` (gradients)
- **Glow:** `shadow-[0_0_30px_rgba(99,102,241,0.15)]`
- **Text:** `text-zinc-100` (headings), `text-zinc-400` (body), `text-zinc-500` (muted)
- **Fonts:** Inter (sans), JetBrains Mono (code/timestamps)
- **Vibe:** DaVinci Resolve × Frame.io × Linear.app
- **Rounded:** `rounded-xl` (cards), `rounded-lg` (buttons), `rounded-full` (badges)

## File Structure (Current)
```
src/
├── app/
│   ├── layout.tsx          (root layout — fonts, metadata)
│   ├── page.tsx            (landing page)
│   └── globals.css         (tailwind + custom tokens)
├── components/
│   ├── layout/             (Navbar, Footer)
│   ├── landing/            (Hero, Features, EditorPreview, Pricing)
│   └── ui/                 (reusable primitives — buttons, badges)
├── lib/
│   └── utils.ts            (cn helper)
├── hooks/                  (custom hooks)
├── stores/                 (Zustand stores)
├── types/                  (shared types)
└── constants/              (app constants)
```

## Current Status
- [x] Next.js project initialized (App Router, TypeScript)
- [x] Git repository + GitHub
- [x] Packages: zustand, framer-motion, lucide-react, clsx, tailwind-merge
- [x] Tailwind configured (dark mode)
- [x] CONTEXT.md + AGENTS.md created

## Current Phase
- **Phase 1: Landing Page & Core Layout System**

## Rules (STRICT)
- NO `// TODO` or placeholder comments — ship complete code
- NO external image URLs — use SVG/CSS/inline only
- NO new npm packages without explicit justification
- TypeScript strict — NO `any`
- Server Components by default, `"use client"` only when needed
- All interactive elements: keyboard accessible + aria labels
- Responsive: 375px → 1920px (mobile-first)
- Dark mode ONLY (no light mode)