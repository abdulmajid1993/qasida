# Responsive design — mobile & tablet first

> **This application is used overwhelmingly on tablets and mobile phones.**
> Every frontend / visual change must be optimized for small touch screens
> **first**, and scale up to desktop **second**. Phone and tablet are the
> primary targets, not an afterthought.

Read this before making any visual change to `App.jsx`, `QasidaBook.jsx`,
`IlahiBook.jsx`, or `Homepage.jsx`.

## How responsiveness works in this codebase

There are **no CSS files, no Tailwind, and no JavaScript media queries.**
Everything is inline `style={{...}}` objects, and responsiveness is achieved
with viewport-relative CSS techniques that adapt on their own:

| Technique | Example in the code | Effect |
|-----------|--------------------|--------|
| Fluid type with `clamp()` | `fontSize: "clamp(20px,6vw,34px)"` | Text scales smoothly between a phone-safe min and a desktop max. |
| Self-collapsing grid | `gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))"` | One full-width column on phones, multiple columns on tablets/desktop — automatically. |
| Wrapping flex rows | `display: "flex", flexWrap: "wrap"` | Search bar + filter chips reflow onto multiple rows when narrow. |
| Constrained reading column | `maxWidth: 680, margin: "0 auto"` | Comfortable line length on big screens; full width on small ones. |
| Viewport meta | `public/index.html`: `width=device-width, initial-scale=1` | Renders at true device width. |

**When you add UI, reach for these same tools** instead of fixed pixel layouts
or JS breakpoints, so new elements stay consistent and keep working on every
screen size.

## Rules / checklist for any visual change

1. **Design for ~360–390px width first.** If it works on a small phone, it
   will almost always work going up. Start there, then check it scales.
2. **No fixed pixel widths that can overflow a phone.** Prefer `maxWidth`,
   `%`, `flex`, `min(...)`, and `clamp(...)`. A hard `width: 700px` will break
   a 375px screen.
3. **Fluid font sizes.** Use `clamp(min, vw, max)` for anything that should
   grow on larger screens; pick a `min` that's readable on a phone
   (body text ≥ ~14–15px).
4. **Touch-sized targets.** Interactive elements (buttons, chips, cards, nav)
   should be at least ~44×44px with enough spacing that adjacent targets
   aren't mis-tapped.
5. **Never gate functionality behind hover.** Touch devices have no hover.
   Hover effects may *enhance* (e.g. a subtle highlight) but must never be the
   only way to reveal or trigger something. Anything important must be visible
   / tappable without hover.
6. **Let layouts wrap and stack.** Multi-column or side-by-side arrangements
   must collapse to a single column on narrow screens
   (`flexWrap: "wrap"` or the `auto-fill`/`minmax` grid pattern).
7. **Mind safe areas and scrolling.** Keep `overflowX: "hidden"` behavior
   intact (it prevents horizontal scroll), and keep generous bottom padding so
   the last verse isn't hidden behind device chrome.
8. **Tablet is a first-class size too.** Check an intermediate width
   (~768–1024px), not just phone and desktop — the grid should show a sensible
   number of columns there, and type shouldn't look oversized.

## How to verify (do this before calling a visual change done)

Run the app locally and use the browser device toolbar:

```bash
cd app
npm install      # first time only
npm start        # http://localhost:3000
```

Then in the browser:

1. Open DevTools → toggle the **device toolbar** (Cmd/Ctrl+Shift+M in Chrome).
2. Check at least three widths:
   - **Phone** ~375px (e.g. iPhone SE / iPhone 12).
   - **Tablet** ~768px and ~1024px (e.g. iPad).
   - **Desktop** ~1280px+.
3. Confirm: no horizontal scrollbar, no clipped/overflowing text, cards stack
   correctly, tap targets are comfortably sized, and nothing essential is
   hidden until hover.

Testing on a real phone/tablet over your LAN is even better — start the dev
server, then open `http://<your-computer-ip>:3000` from the device on the same
network.

## Anti-patterns to avoid

- ❌ Fixed `width`/`height` in pixels for layout containers.
- ❌ Adding a JS media-query / `window.innerWidth` branch when a `clamp()` or
  `auto-fill` grid would do the job declaratively.
- ❌ Desktop-only spacing/font sizes that don't shrink on phones.
- ❌ Hover-only menus, tooltips, or controls.
- ❌ Tiny tap targets crammed together.
