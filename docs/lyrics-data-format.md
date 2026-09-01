# Lyrics data format

All lyrics are hard-coded arrays in the collection files:

- `qawwalis` in `app/src/App.jsx`
- `qasidas` in `app/src/QasidaBook.jsx`
- `ilahis` in `app/src/IlahiBook.jsx`

## Song object

```js
{
  id: 1,                         // unique within its collection
  title: "Allah Hoo Allah Hoo",
  language: "Urdu",              // used by the language filter
  poet: "Traditional",
  introCount: 5,                 // optional; first N verses labelled "Intro"
  chorus: {                      // optional
    original:    "…\n…",
    translation: "…\n…",
  },
  verses: [
    { original: "…\n…", translation: "…\n…" },
    …
  ],
}
```

Qasida entries may additionally carry `arabicChorus: true`, `qasidaChorus`,
and per-verse `arabicChorus` flags — these toggle extra chorus rendering for
Arabic qasidas.

## The `original` / `translation` strings

- Each is a single string.
- **Lines within a verse are separated by `\n`.**
- `original` is the source-language text (Urdu/Persian/Punjabi/Arabic/Turkish,
  often in Roman transliteration).
- `translation` is the English rendering.

Example (correct):

```js
{
  original:    "Tere He Naam Say Her Ibtida Hai\nTere He Naam Tak Intiha Hai",
  translation: "Every beginning is with your name\nWith your name ends everything",
}
```

## Rules and gotchas when editing

1. **`\n` defines what the reader sees.** The UI does `string.split("\n")`.
   Forgetting a `\n` fuses two lines; an extra one inserts a blank line.

2. **Original and translation line counts need NOT match.** A translator may
   render two original lines as one English sentence. A count mismatch by
   itself is *not* a bug — verify against meaning/PDF before changing anything.

3. **Mid-line capitals are usually fine.** Roman-Urdu transliteration
   legitimately capitalizes inside a line (`meN`, `haiN`, `BeKasoñ`,
   `JalwaGari`, `SubhanAllah`). A `lowercaseUppercase` join is only a fusion
   bug when it's actually two distinct lines run together
   (the real example: `...ends everythingYour praise...`).

4. **Preserve diacritics and special characters** (`ñ`, `ü`, `ﷺ`, Arabic
   script, the `×` repetition marker in qasidas). Don't normalize them away.

5. **This is sacred text.** Make the minimal, correct change. Don't reflow,
   re-spell, or "improve" verses that already display correctly.

## Detecting likely problems

A quick scan for two distinct lines fused without a break (review hits by hand;
expect false positives from transliteration):

```bash
python3 - <<'PY'
import re
for fn in ['app/src/App.jsx','app/src/QasidaBook.jsx','app/src/IlahiBook.jsx']:
    src = open(fn).read()
    for m in re.finditer(r'(original|translation):\s*"((?:[^"\\]|\\.)*)"', src):
        text = m.group(2).replace('\\n', '\n')
        for fm in re.finditer(r'[a-z],?[A-Z]', text):
            ctx = text[max(0,fm.start()-18):fm.start()+18].replace('\n','#')
            print(f"{fn} [{m.group(1)}] ...{ctx}...")
PY
```

`#` marks a real line break; a hit with no nearby `#` between the two words is
the suspicious kind.
