# Architecture

## Stack

- **Create React App** (`react-scripts`), React 18.
- No router library, no state manager, no CSS framework — styling is done with
  inline `style={{...}}` objects.
- No backend: all lyrics are static data compiled into the JS bundle.

## File map

| File | Role |
|------|------|
| `app/src/index.js` | React entry point. Mounts `<App/>` into `#root`. |
| `app/src/App.jsx` | **Three things at once:** the Qawwali data array (`qawwalis`), the Qawwali browsing/detail UI, and the **top-level router** that switches between Homepage / Qawwali / Qasida / Ilahi. |
| `app/src/QasidaBook.jsx` | Qasida data (`qasidas`) + its UI. |
| `app/src/IlahiBook.jsx` | Ilahi data (`ilahis`) + its UI. |
| `app/src/Homepage.jsx` | Landing screen; user picks a tradition. |
| `app/src/App_original.jsx` | Stale earlier snapshot of `App.jsx`. **Not imported. Do not edit.** |

## Navigation flow

`App.jsx` holds a `section` state value:

```
Homepage ──pick tradition──▶ section = "qawwali" | "qasida" | "ilahi"
   ▲                              │
   └──────── "← Home" ───────────┘
```

- `"qawwali"` → renders the Qawwali list/detail UI defined inside `App.jsx`.
- `"qasida"`  → renders `<QasidaBook onBack=... />`.
- `"ilahi"`   → renders `<IlahiBook onBack=... />`.

Within a collection there are two views:

1. **Index view** — a searchable, language-filterable grid of cards
   (`filtered.map(...)`).
2. **Detail view** — chosen via `selectedId`; shows the title, an
   Original/Translation legend, the chorus, then each verse.

## How a verse renders (the key detail)

In the detail view, each verse is rendered by splitting its strings on `\n`:

```jsx
// App.jsx (and the equivalent in QasidaBook.jsx / IlahiBook.jsx)
{verse.original.split("\n").map((line, i) => ( <div ...>{line}</div> ))}
{verse.translation.split("\n").map((line, i) => ( <div ...>{line}</div> ))}
```

The chorus renders the same way. **Consequences:**

- A missing `\n` → two lines fuse into one (looks "wrong").
- A dropped line / mis-split → wrong number of lines (looks "cut out").

This is why most lyric display problems are fixed by correcting the `\n`
structure of a string, not by touching the rendering code.

## Verse labelling

Each song may define `introCount: N`. The first `N` verses are labelled
`Intro` / `Intro 1`, `Intro 2`, …; the rest are `Verse 1`, `Verse 2`, …
(see the `selected.verses.map(...)` block in `App.jsx`).

## Styling conventions

- Inline style objects only.
- Palette: deep teal background, teal accents (`#2c6e6a` family), gold accents
  (`#c9a84c` / `#b8963e`), light text (`#cce4e2` / `#e8f0ef`), serif fonts
  (Georgia / Times New Roman).
- Each collection re-implements its own small presentational components
  (cards, verse blocks, badges) in its own file.
