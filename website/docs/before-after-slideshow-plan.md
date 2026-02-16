# Before & After Slideshow Plan — Railings (5 photos)

**Layout:** First 3 photos = **Before**, last 2 photos = **After**.

---

## 1. Image mapping

| Slot | File name | Your photo | Description |
|------|-----------|------------|-------------|
| **Before (main)** | `before-1.png` | **Photo 1** | Close-up weathered black railing — rust, flaking paint, moss. Strong “before” for main panel. |
| **Before (grid)** | `before-2.png` | **Photo 2** | High-angle rusted railing, moss on top bar, worn balusters. |
| **Before (grid)** | `before-3.png` | **Photo 3** | Dislodged reddish-orange railing, stone wall, ivy. Shows scope of work. |
| **After (main)** | `after-1.png` | **Photo 5** | Glossy black finial, freshly painted — clear “after” close-up. |
| **After (grid)** | `after-2.png` | **Photo 4** | Wider scene: railings, stone wall, building — restored context. |

**Why this order:**  
- Main **Before** = strongest deterioration (Photo 1).  
- Main **After** = clearest “fresh paint” (Photo 5).  
- Grid = extra before (2 & 3) + second after (4) so both “after” shots are used.

---

## 2. File prep

1. Copy your 5 images into **`website/tools/images/before-after/`** and rename:

   | Copy from (Cursor assets) | Save as |
   |---------------------------|---------|
   | Image 1 (weathered black railing close-up) | `before-1.png` |
   | Image 2 (rusted railing, moss on top) | `before-2.png` |
   | Image 3 (dislodged red railing, stone wall) | `before-3.png` |
   | Image 4 (wider scene, railings & building) | `after-2.png` |
   | Image 5 (glossy black finial) | `after-1.png` |

2. Resize/crop if needed: template works best with similar aspect ratios; you can crop to square for a consistent GBP post (e.g. 1080×1080).

---

## 3. Template layout

- **Row 1:** Before (before-1) | After (after-1)  
- **Row 2 (grid):** before-2 | after-2  
- **Optional:** If you prefer the grid to show only “before” (like the original template), use before-2 and before-3 in the grid and skip after-2 in the layout.

The HTML template can be updated so the grid is **before-2** + **after-2** (see below).

---

## 4. GBP post copy (same style as gbp-post-before-after-railings.md)

**Headline** (under ~58 characters):

```
Before & after: wrought iron railings, Bath
```

**Description:**

```
Weathered, rusty railings stripped, treated and repainted to a clean black finish. Same spot – before and after.

Interior and exterior painting across Bath, Keynsham, Midsomer Norton and BANES. Free, no-obligation quotes.
```

**Button:** `Get a quote` → `https://new-decorating.co.uk/contact`

---

## 5. Steps to publish

1. Copy and rename the 5 images into `website/tools/images/before-after/` as in section 2.
2. Open **`website/tools/before-after-template.html`** in your browser.
3. Take a screenshot of the full frame (Before | After + grid + “New Decorating” bar).
4. Crop/resize for GBP: **1080×1080** or **1080×1350**, min width **720 px**.
5. In GBP: Posts → Create post (Update) → add image, headline, description, button → Publish.

---

## 6. Quick reference

| Field | Content |
|-------|---------|
| **Images** | 3 before (1 main + 2 grid) + 2 after (1 main + 1 grid) |
| **Main Before** | before-1.png (weathered black railing) |
| **Main After** | after-1.png (glossy black finial) |
| **Grid** | before-2.png, after-2.png (or before-2, before-3 if you keep grid as “before” only) |
| **Headline** | Before & after: wrought iron railings, Bath |
| **CTA** | Get a quote → https://new-decorating.co.uk/contact |
