# Project Architecture & Skills Stack

## Core Technologies

- **Framework:** Next.js (App Router)
- **Runtime & Package Manager:** Bun
- **Language:** TypeScript
- **Animations:** Framer Motion

## Styling & UI Architecture

- **CSS Framework:** Tailwind CSS
- **Component Library:** shadcn/ui (built on Radix UI primitives)
- **Class Management:** `clsx` + `tailwind-merge`
- **Icons:** Lucide React

## Design System Specifications

- **Typography:**
  - Headings: Geist Sans / Cal Sans
  - Body: Inter
- **Theme:** Dark mode strictly enforced
- **Layout Strategy:** CSS Grid heavily utilized for Bento-box component structures.
- **Visual Effects:**
  - Heavy use of backdrop-blur (Glassmorphism)
  - SVG noise texture overlays
  - CSS radial gradients for background glows
  - 1px low-opacity borders for card definitions

## Data Visualization (Dashboards)

- **Charting:** Recharts (Customized with zero grid lines, custom tooltips, and theme-matching stroke colors).

## Deployment & Infrastructure

- **Hosting:** Vercel
- **Authentication (Planned):** Clerk
- **Database (Planned):** PostgreSQL

---

## Technical Skills & Architecture Profile

### 🚀 Core Engine & Runtime

- **Next.js (App Router) & React 19**
  - Server-Driven Architecture: leveraging React Server Components (RSC) to minimize client-side JavaScript bundles and maximize core web vitals.
  - Routing & Data Fetching: implementation of parallel routes, intercepting routes, dynamic segment layouts, and granular loading states (`loading.tsx`, `error.tsx`).
  - Streaming & Partial Prerendering (PPR): using dynamic data streaming with Suspense boundaries for faster initial paints.

- **Bun Ecosystem**
  - Runtime & Package Management: using Bun as a fast alternative to Node.js for dependency resolution and execution.
  - Build Optimization: configuring Next.js compiler environments with TypeScript handling.

### 🎨 Design Engineering & Interaction

- **Tailwind CSS (Utility-First Design Systems)**
  - Responsive Architecture: mobile-first responsive grids and utility breakpoints.
  - Theme Enforcement: system-wide dark mode using semantic design tokens.
  - Visual Polish: micro-interactions, backdrop-filter blurs (glassmorphism), radial glow gradients, and complex grid backgrounds.

- **Framer Motion (High-Fidelity Interaction & Animation)**
  - Orchestration & Staggering: managing micro-animations with container variants (`staggerChildren`, `delayChildren`).
  - Layout Animations: using `layoutId` for morphing elements without layout shift.
  - Performance Optimization: leveraging `LazyMotion` (`domMax`) to reduce bundle size and keep 60fps.
  - Scroll-Linked Interactions: `useScroll` and `useTransform` for binding backgrounds and reveals to scroll progress.

### 🛠️ UI Infrastructure & Component Architecture

- **Shadcn/ui & Radix Primitives**
  - Composition Patterns: scalable, accessible components built on Radix primitives.
  - Dynamic Class Composition: merging conditional classes using a unified utility helper.

Example `cn` helper used across the codebase:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
