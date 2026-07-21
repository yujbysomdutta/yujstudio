# Yuj Studio — Product Requirements Doc

## Original Problem Statement
Design and build a premium, modern, fully responsive **static** website for a wellness and movement brand named **Yuj Studio**. Awwwards Site-of-the-Day caliber. Palette: matte black (#0B0B0B / #171717) + gold accent (#D4AF37 / #E7C65C). Type: Cormorant Garamond (headings) + Poppins (body). Motion via framer-motion + Lenis smooth scroll. A signature golden SVG line weaves down the page, symbolizing breath/movement and subtly resembling the letter "Y".

## Architecture
- **Stack:** React 19 (CRA) + Tailwind CSS + framer-motion + Lenis
- **Backend:** None (pure static per user choice)
- **Routing:** Single-page landing at `/` (react-router in place for future)
- **Smooth scroll:** Lenis initialized in `SmoothScroll.jsx` with reduced-motion fallback

## User Personas
- **Local seekers (Kolkata):** Adults 20-55 exploring wellness/movement — the primary lead.
- **Corporate/schools/NGOs:** Partnering for wellness workshops and trainer supply.
- **Studio renters:** Dance groups, photographers, fitness pros needing a premium space.

## Core Requirements (static)
- Matte black + gold aesthetic, editorial layout, premium micro-interactions
- Sticky glass nav + mobile drawer
- Hero with masked line-by-line reveal + centered logo + hex texture + chips + dual CTA
- Numbered manifesto chapters (About)
- 9-card Programs grid
- "More Than a Fitness Studio" — 3 feature cards
- "Why Choose Yuj" — 8 icon cards
- Slow editorial marquee (single, tasteful)
- Masonry Gallery (curated Unsplash/Pexels)
- Founders — 2 profile cards
- Location — address + Google Maps embed
- Contact — 5 tiles (WhatsApp/Phone/Email/Instagram/Facebook) + big CTA
- Footer with quick links + socials
- Signature golden SVG "Y-line" weaving down full page, animated with scroll

## What's Been Implemented (2026-07-21)
- Full site scaffold with all 12 sections above
- Lenis smooth scroll + prefers-reduced-motion respect
- Framer Motion section reveals + parallax hero + masked headline
- Signature line SVG (arms + stem) driven by useScroll `pathLength`
- Custom typography loaded from Google Fonts (Cormorant Garamond + Poppins)
- All Shadcn UI components still available (used lucide-react for icons)
- 100% frontend test pass rate (21/21 acceptance criteria)

## Placeholders (edit later)
- Phone: `+91 99999 99999`
- Email: `hello@yujstudio.in`
- WhatsApp: `wa.me/919999999999`
- Instagram: `@yujstudio`, Facebook: `/yujstudio`
- Founder names/photos are placeholders (Ananya Sen, Arjun Roy)

## Prioritized Backlog
- **P1:** Replace placeholder contacts & founder info with real content
- **P1:** Swap gallery imagery with real Yuj studio photography
- **P2:** Add a lightweight "class schedule" grid (day × time)
- **P2:** Instagram feed embed (via oEmbed) below Gallery
- **P2:** Testimonials section (editorial pull-quotes)
- **P3:** i18n (Bengali toggle for local reach)
- **P3:** Newsletter capture (would require lightweight backend or 3rd party like Buttondown)

## Next Tasks
- User can now customize copy/founder photos and share real contacts
- Optional: hook up a WhatsApp CRM / calendar-based trial booking
