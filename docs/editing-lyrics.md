# Editing & maintaining lyrics

## Source of truth

The PDFs in `lyrics/` are the reference for **correct line and paragraph
breaks**:

- `lyrics/qawali/Qawwali_v2.0.pdf`
- `lyrics/qasida/Qasida_V1.3.pdf`
- (There is **no** PDF for the Ilahi collection.)

### Critical caveat — the app is not a 1:1 copy of the PDFs

The app is a **richer rendition** than the PDFs:

- Songs in the app often have a chorus, extra verses, and English
  translations that the PDF does **not** contain.
- The Qawwali collection has more songs (~33) than the Qawwali PDF covers
  (14). Songs like *Taajdar-e-Haram* or *Yeh Jo Halka Halka Suroor Hai* are
  not in any PDF.
- The same titled song can be a *different compilation of verses* in the app
  vs. the PDF.

**Therefore: never "replace the app's lyrics with the PDF line-for-line."**
That deletes real content from sacred text. Use the PDF to fix a *specific*
broken break, keeping all existing app content.

## Workflow for "a verse is displayed wrong / cut out"

1. **Reproduce / locate.** Find the offending string in `App.jsx`,
   `QasidaBook.jsx`, or `IlahiBook.jsx` (grep for a distinctive word).
2. **Diagnose.** Almost always it's the `\n` structure:
   - two lines fused → a `\n` is missing,
   - a line missing/cut → a `\n` was dropped or merged.
3. **Check the reference.** If the song is PDF-covered, confirm the correct
   break in the PDF (see extraction below). If it's Ilahi or a non-covered
   Qawwali, rely on the verse's own internal consistency / known lyrics and
   make the minimal change.
4. **Fix the one string.** Insert/remove exactly the `\n` needed. Do not touch
   neighbouring verses.
5. **Build to verify syntax:** `cd app && npm run build`.

### Worked example (the fix already applied)

In *Allah Hoo Allah Hoo* the translation read:

```
…With your name ends everythingYour praise is 'praise be to Allah'…
```

Two lines were fused. Fix = insert the missing `\n`:

```js
translation: "Every beginning is with your name\nWith your name ends everything\nYour praise is 'praise be to Allah'\nThat you are the God of my Mohammad",
```

## Extracting text from the PDFs

The PDFs aren't plain text and the system `cryptography` lib can crash
imports. Reliable path:

```bash
# one-time, if pdf libs crash with "_cffi_backend"/PanicException:
python3 -m pip install --quiet --force-reinstall cffi
python3 -m pip install --quiet pymupdf

# dump a PDF to text:
python3 - <<'PY'
import fitz
doc = fitz.open('lyrics/qawali/Qawwali_v2.0.pdf')
for i, page in enumerate(doc):
    print(f"\n===== PAGE {i+1} =====")
    print(page.get_text())
PY
```

Notes when diffing PDF vs app:

- PDFs interleave **one original line, then its English line**.
- Strip page headers (`Page N of M`) and the dotted table of contents (page 2).
- Whitespace/spelling can differ slightly between PDF and app; you're checking
  **where the line breaks fall**, not doing an exact string match.

## What NOT to do

- Don't edit `app/src/App_original.jsx` (dead snapshot, not imported).
- Don't edit anything under `app/build/` (generated output).
- Don't mass-normalize diacritics, capitalization, or transliteration.
- Don't change verse grouping that already renders correctly just to match the
  PDF's grouping.
