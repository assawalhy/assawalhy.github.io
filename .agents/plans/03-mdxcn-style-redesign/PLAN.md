# Redesign: mdxcn-style UI and a flatter site structure

## Goal

Replace the current look (oversized headings, generic portrait card, long blank timeline) with a dark, text-first interface in the style of https://www.mdxcn.dev/, and reorganize the homepage into a compact index of the whole site.

Also reposition the homepage as an offer: one engineer who delivers the whole system (design, build, deploy, scale, secure), and add a "let's talk" form that writes to a Google Sheet.

## What the reference does (measured from a screenshot and computed styles)

- Near-black background, light grey text, one cyan accent.
- Geist for text, monospace for labels and figures.
- One narrow centered column, lowercase section headings, short paragraphs.
- Dashed hairline frames with `+` corner marks and a `[ TITLE ]` label cut into the top border.
- Figures drawn with text glyphs, not images or cards.

## Approach

1. Tokens and one reusable `.frame` component in `global.css`: dashed border, corner marks, `data-title` label.
2. Compact header and footer on the same grid.
3. Homepage becomes an index: hero, work, projects, honors, writing, talks, contact. Each section is a frame that links to its full page.
4. Experience is drawn as a glyph timeline (`●`, `│`, `○`) in monospace, the same device the reference uses for its timeline figure.
5. Inner pages (projects, blogs, seminars, contact, blog post) reuse `.frame` and the same column.
6. New hero and a `[ WHAT YOU GET ]` frame with five points: better system design, fewer errors, scalable, good UI/UX, fast delivery. Each point carries one fact from the CV, so nothing is claimed without evidence.
7. `[ LET'S TALK ]` frame and form (name, email, message). The form posts to a Google Apps Script web app that appends a row to a Google Sheet and emails a notification.
8. `src/pages/index.astro`: drop the `<meta http-equiv="refresh">` from `<head>` and keep it only inside `<noscript>`.
9. Arabic keeps IBM Plex Sans Arabic for prose and checks RTL for frames, labels and glyph timeline.

## Decisions

- Dark first, light theme kept. The toggle and `localStorage` key stay, only the palette changes.
- Plain Astro and CSS. The reference is React and shadcn, which would add a framework for no gain. Rejected.
- Same routes, same content strings. `tests/fixtures/content.json` keeps passing without edits, so lowercase is done with `text-transform`, not by changing the copy.
- The portrait and tilt effect are removed from the homepage. Project thumbnails stay on `/projects`, small, inside the frame.
- Scroll-reveal animation is removed. It leaves large blank gaps before the content appears (visible in the current full-page screenshot).
- Fonts: Geist and Geist Mono from Google Fonts. Space Grotesk and Manrope are dropped.
- Hero copy changes, so `tests/fixtures/content.json` is updated for the new h1 and kicker in the same change.
- Form backend: Google Apps Script web app bound to the Sheet. The site is static on GitHub Pages, so there is no server of our own. Rejected: Formspree and similar (third party, paid past a small quota), and a Cloudflare Worker (a second deploy target, not needed for a text form).
- Spam control: a hidden honeypot field and a client-side minimum fill time. The Apps Script URL is public by design, so the script also validates length and rejects empty fields.
- The redirect: GitHub Pages cannot send HTTP redirects, so `/` is a page that redirects itself. Today the meta refresh fires before the language script, so Arabic browsers can land on `/en/`. The meta tag moves into `<noscript>` and the script decides.
- Only the look is borrowed. No mdxcn text, name or branding is copied.

## Milestones

- [x] M1: Tokens, fonts and `.frame` in place.
- [x] M2: Header, footer and homepage rebuilt.
- [x] M3: Inner pages restyled, hero reworded, let's talk form wired.
- [x] M4: Arabic and mobile checked.
- [x] M5: Tests, build and screenshots green.

## Risks

- "Securing it" has no backing on the CV or the site today. The security point stays out of the copy until you name the work behind it.
- The Apps Script has to be created and deployed from your Google account. The form code ships with a placeholder URL until you paste the deployed `/exec` URL.
- Monospace frames with long Arabic text can overflow on mobile. Frames use `overflow-wrap: anywhere` and the column drops to full width under 640px.
- Corner marks and the title cut-out in RTL need mirrored positioning. Checked in M4.
- The 1,000 leads claim and other hard-coded copy in `HomePage.astro` move into the new sections unchanged, so content stays as approved.
