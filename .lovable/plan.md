# Bengali Conversion Landing Page — "Attention Anatomy"

A clean, modern, mobile-first Bengali landing page built around the 6-section conversion framework you provided. Hind Siliguri font, live countdown in the offer section, and CTAs repeated above-the-fold and at the bottom.

## Page structure (single route: `/`)

**Section 01 — Hero (Hook + Headline + CTA)**
- Above-the-fold split layout: headline + subheadline + primary CTA on the left, hero visual on the right (illustration/mockup placeholder)
- Headline: "৩০ দিনের মধ্যেই আপনার সেলস দ্বিগুণ করার স্টেপ-বাই-স্টেপ সিস্টেম"
- Subheadline supporting the claim
- Primary CTA button: "ফ্রি গিফট পেতে এখনই অর্ডার করুন"
- Small trust line under CTA ("৩,০০০+ উদ্যোক্তা ব্যবহার করছেন")

**Section 02 — Problem & Pain Amplification**
- Empathetic headline + 3 relatable pain-point cards (ভিজিটর আছে, সেলস নেই • অ্যাড খরচ বাড়ছে • কনভার্সন কম)
- Soft red/warning accent to create emotional contrast

**Section 03 — Solution & Value Proposition**
- "আমাদের সমাধান" headline
- 3-column feature grid with checkmark icons:
  - ✅ CRO-Optimized Page Structure
  - ✅ Psychological Sales Triggers
  - ✅ Bangladeshi Market Proven Formula

**Section 04 — Social Proof & Trust**
- Stats strip (3,000+ উদ্যোক্তা • 4.9★ রেটিং • ৭ দিন মানি-ব্যাক)
- 3 testimonial cards with name, role, quote, avatar placeholder
- Trust badges row + guarantee badge

**Section 05 — Offer & Value Stack**
- Centered offer card showing what's included:
  - 🎁 Course Access
  - 🎁 Bonus Template Pack
  - 🎁 Free 1:1 Consultancy (First 20 Buyers)
- Crossed-out total value (20,000 BDT) → highlighted offer price (4,999 BDT)
- **Live countdown timer** (days/hours/minutes/seconds) creating urgency
- "সীট সীমিত" badge

**Section 06 — Final CTA + Footer**
- Repeated strong CTA with scarcity copy ("আজই এনরোল করুন – সীট সীমিত")
- Minimal footer (copyright, simple links)

## Design direction (Clean & Modern)

- **Font**: Hind Siliguri loaded from Google Fonts, applied site-wide
- **Palette**: White background, deep navy text, single vibrant accent (indigo/blue) for CTAs and highlights, soft muted backgrounds for alternating sections
- **Typography**: Large bold headlines, generous line-height for Bengali readability
- **Spacing**: Wide section padding, max-width container, breathing room between blocks
- **Components**: Rounded cards with subtle shadows, pill-shaped CTAs, soft gradients only where needed
- **Mobile-first**: Stacked layouts, full-width CTAs, sticky-friendly hero

## Technical notes

- Replace `src/routes/index.tsx` placeholder with the full landing page
- Add Hind Siliguri via Google Fonts `<link>` in `__root.tsx` head and set as default font in `src/styles.css`
- Update `head()` meta on index route with Bengali title/description and og tags
- Build the countdown as a small client component using `useEffect` + `setInterval`, target date set ~7 days from load (easily editable constant)
- All section content extracted as constants at the top of the file for easy editing
- Use existing shadcn `Button` and `Card` primitives; no new dependencies required

After you approve, I'll build it in one pass.