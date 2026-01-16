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

Replace placeholder phone number in `src/app/components/PhoneButton.tsx`:

```tsx
const phoneNumber = '(403) XXX-XXXX'  // Display number
const phoneLink = 'tel:+14035551234'   // Actual tel: link
```
