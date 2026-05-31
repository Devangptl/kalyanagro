# Image Sources

The site now loads from **Unsplash CDN** by default. If any remote URL
fails to resolve, the `<img onError>` handlers automatically swap to the
local SVG fallback shipped in this folder. Both layers are independent —
you can swap one without touching the other.

## Live Unsplash URLs

Defined in `app/page.tsx`:

| Slot | Unsplash photo ID |
|---|---|
| Hero | `photo-1567892737950-30c4db1fd4d2` |
| About section | `photo-1625246333195-78d9c38ad449` |
| Bold | `photo-1606914469633-71deb6a83a0a` |
| Java | `photo-1599909533730-4f3ad11ab8f4` |
| TJ-1 | `photo-1574323347407-f5e1ad6d020b` |
| K-6 | `photo-1568051243851-cc6d922f0d7f` |
| Girnar-2 | `photo-1605522037164-fa72a888fb98` |
| TAG-24 | `photo-1622957461168-202193e58b73` |

### Swap any photo

Open any photo on [unsplash.com](https://unsplash.com), copy the photo ID
(the `photo-xxxx-yyyy` slug in the URL), then edit `app/page.tsx` and
replace the ID inside the matching `u("photo-…", 900)` call.

The helper applies sensible defaults: `?w=<width>&q=80&auto=format&fit=crop`.

## Local SVG fallbacks

The hand-crafted SVGs in this folder ship as fallbacks. Names:

```
hero-peanut.svg
about-field.svg
variety-bold.svg
variety-java.svg
variety-tj-1.svg
variety-k-6.svg
variety-girnar-2.svg
variety-tag-24.svg
```

## Going fully offline

If you'd rather not depend on Unsplash, replace the `u("photo-…")` value
in `app/page.tsx` with a local path like `/images/variety-bold.jpg` and
drop the file in this folder.
