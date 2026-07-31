## SisterGolf — Modernized Remake

A polished rebuild of sistergolfonline.com: same content and message, sharper design. Six core pages, original photography reused via the existing image URLs.

### Design direction
- Editorial, confident, business-forward — not a generic WordPress template.
- Palette: deep fairway green + warm cream ground, with the brand's red as the single accent (drawn from the current site's red woman-golfer artwork).
- Typography: a high-contrast serif for headlines paired with a clean grotesque for body — signals "executive," not "sporty."
- Generous whitespace, large section labels ("About Us", "What We Offer") as small uppercase eyebrows above serif headlines — a refined version of the original's own pattern.
- Restrained motion: subtle fade/rise on scroll, no animation on everything.

### Pages
1. **Home** (`/`) — hero with the red golfer artwork and the "We Teach Women How To Play Golf To Achieve Business Success" headline; Build Relationships / Make Connections value pair; four offerings (Ladies Business Golf, Deals on the Green, Cubicle to Course, Private Coaching); founder message excerpt; books strip; CTA band; latest blog articles.
2. **About** (`/about`) — the SisterGolf mission, who it's for, what participants walk away with.
3. **Workshops & Coaching** (`/workshops`) — the four programs as full cards with descriptions and category labels, plus an inquiry CTA.
4. **Founder** (`/founder`) — Shella Sylla's full story (ex-banking executive, Million Dollar Club) with her portrait, plus the three Amazon books.
5. **Blog** (`/blog`) — article grid with the existing posts (Practice the Way You Play, How Golf Acts as an Equalizer in Business, What is SisterGolf?, plus remaining posts from the source site), each with image, date, category, author.
6. **Contact** (`/contact`) — contact details, a message form, and newsletter-signup callout.

Shared header with navigation and a "Book a Workshop" action; footer with nav, social, and newsletter link.

### Content & images
- Copy is taken from the live site and lightly tightened; nothing invented about the business.
- Images hotlinked from the existing `sistergolfonline.com/wp-content/uploads/...` URLs, so the site looks identical in imagery from day one. I'll fetch the inner pages to pull full founder/about/blog copy before writing.

### Technical notes
- TanStack Router file routes, one file per page; blog posts held in a typed content module so they render on both the list and (later) detail pages.
- Design tokens (colors, radii, fonts) defined in `src/styles.css` under `@theme`; no hardcoded color utilities in components.
- Fonts loaded via `<link>` in `__root.tsx`.
- Per-page `head()` metadata: unique title, description, og/twitter tags.
- Contact form is presentational (no backend) in this pass — say the word if you want submissions stored or emailed, which would need Lovable Cloud.
