# Calgary Emergency Help

Emergency services hub for Calgary homeowners. Connects stressed users with local contractors during active home emergencies.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy (zero configuration needed)

## Structure

- `/emergency-help-calgary` - Hub page (routes to all verticals)
- `/basement-flooding-calgary` - Water damage emergencies
- `/burst-pipe-calgary` - Frozen/burst pipe emergencies
- `/sewer-backup-calgary` - Sewage backup emergencies
- `/no-heat-calgary` - Complete furnace failure
- `/furnace-not-working-calgary` - Furnace malfunction
- `/emergency-electrician-calgary` - General electrical emergencies
- `/burning-smell-electrical-calgary` - Fire hazard situations

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3.4
- TypeScript
- Static export for Vercel

## Before Launch

Replace placeholder phone number in TWO locations:

1. `src/app/components/PhoneButton.tsx`:
```tsx
const phoneNumber = '(403) XXX-XXXX'  // Display number
const phoneLink = 'tel:+14035551234'   // Actual tel: link
```

2. `src/app/layout.tsx` (header mobile link):
```tsx
<a href="tel:+14035551234" ...>(403) XXX-XXXX</a>
```

## Business Hours Note

The "Available Now" badge appears on all pages. If running ads only during business hours, this is accurate. If you need to indicate limited hours, update the badge text in each page file:

```tsx
// Change from:
Available Now

// To something like:
Calgary Emergency Line
```

## CRO Features

- Emerald accent color (trust/go signal)
- Sticky mobile CTA (always visible)
- "Available Now" badge (answers availability instantly)
- Two-line phone button (label + number)
- Header with business identity
- Footer for legitimacy
- Minimal, fast-loading pages
