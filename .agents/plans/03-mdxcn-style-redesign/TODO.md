# TODO

- [x] Tokens, Geist and Geist Mono, light and dark palettes, and the `.frame` component (dashed border, corner marks, `[ TITLE ]` label) in `src/styles/global.css` and `BaseLayout.astro`
- [x] Restyle `Header.astro` and `Footer.astro`: compact nav, theme and language toggles kept, resume link kept
- [x] Rebuild `HomePage.astro` as an index: hero, work (glyph timeline), projects, honors, writing, talks, contact
- [x] Reword the hero in `HomePage.astro` (en and ar) and add the `[ WHAT YOU GET ]` frame; update `tests/fixtures/content.json` to match
- [x] `ContactForm.astro`, `src/data/site.js` endpoint, `docs/contact-form.gs` (form placed on pages by the page items below)
- [x] Add the `[ LET'S TALK ]` form (name, email, message, honeypot) to the homepage and `/contact`, posting to a configurable Apps Script URL; add `docs/contact-form.gs` with the script and setup steps
- [x] Move the meta refresh in `src/pages/index.astro` into `<noscript>`
- [x] Restyle `/projects`, `/blogs`, blog post layout, `/seminars`, `/contact` for en and ar
- [x] Remove dead CSS and scripts: scroll-reveal, portrait tilt, old hero panel
- [x] Check Arabic RTL and mobile widths 375 and 768
- [x] Verify: `npm test`, `npm run build`, screenshots of `/en/` and `/ar/` desktop and mobile
