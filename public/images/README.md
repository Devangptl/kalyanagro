# Images

All images on the site load from the **Unsplash CDN**, configured in
`app/page.tsx`. No local fallbacks — if a remote URL fails, the
`<img>` will show the browser's default broken-image icon, so make
sure every URL resolves.

## Current photo IDs

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

## Swap any photo

1. Find one you like on [unsplash.com](https://unsplash.com).
2. Copy the slug from its URL — e.g. `photo-1567892737950-30c4db1fd4d2`.
3. Open `app/page.tsx` and replace the slug inside the matching
   `u("photo-…", 900)` call. The helper applies sensible defaults:
   `?w=<width>&q=80&auto=format&fit=crop`.

## Want local files instead?

Drop a `.jpg` / `.webp` into this folder and replace the `u("photo-…")`
value with `/images/<your-file>.jpg` in `app/page.tsx`.
