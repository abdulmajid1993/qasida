# Sacred Lyrics — Documentation

A React app for reading **Qawwali**, **Qasida**, and **Ilahi** devotional
poetry, each verse shown in its original language beside an English
translation.

## Documentation index

- [Architecture](./architecture.md) — how the app is structured and rendered.
- [Lyrics data format](./lyrics-data-format.md) — the data shape and the rules
  for editing lyrics safely.
- [Editing & maintaining lyrics](./editing-lyrics.md) — workflow, the
  source-of-truth PDFs, and how to extract them.
- [Development & deployment](./development.md) — running, building, deploying.

## Quick start

```bash
cd app
npm install
npm start        # http://localhost:3000
```

## The 30-second mental model

- Everything deployable lives in `app/` (a Create React App project).
- Lyrics are **hard-coded data** inside three files: `App.jsx` (Qawwali),
  `QasidaBook.jsx` (Qasida), `IlahiBook.jsx` (Ilahi).
- Each verse stores an `original` and a `translation` string, with lines
  separated by `\n`. The UI splits on `\n` to render each line.
- The PDFs in `lyrics/` are the reference for correct line breaks — but the app
  is intentionally a *richer* rendition than the PDFs, so never blindly
  overwrite app content with PDF content.
