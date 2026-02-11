/**
 * Download all photos from a Facebook Page to public/gallery/
 * and write public/gallery/images.json for the site to use.
 *
 * Requires: FACEBOOK_ACCESS_TOKEN (Page access token or User token with pages_read_engagement)
 * Optional: FACEBOOK_PAGE_ID (default: New Decorating Bath page)
 *
 * Run: node scripts/download-facebook-photos.js
 * Or:  FACEBOOK_ACCESS_TOKEN=your_token node scripts/download-facebook-photos.js
 */

const fs = require("fs");
const path = require("path");

const PAGE_ID = process.env.FACEBOOK_PAGE_ID || "61571675780751";
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;
const GALLERY_DIR = path.join(__dirname, "..", "public", "gallery");
const API_VERSION = "v18.0";

if (!ACCESS_TOKEN) {
  console.error(
    "Error: FACEBOOK_ACCESS_TOKEN is required.\n" +
      "Get a Page access token from https://developers.facebook.com/tools/explorer/\n" +
      "Select your Page and request pages_read_engagement + pages_show_list.\n" +
      "Then run: FACEBOOK_ACCESS_TOKEN=your_token node scripts/download-facebook-photos.js"
  );
  process.exit(1);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function fetchGraph(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (data.error) {
    throw new Error(`Facebook API: ${data.error.message} (code ${data.error.code})`);
  }
  return data;
}

function pickBestImageUrl(images) {
  if (!images || !Array.isArray(images) || images.length === 0) return null;
  const sorted = [...images].sort((a, b) => (b.width || 0) - (a.width || 0));
  return sorted[0].source || null;
}

function extensionFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const ext = path.extname(pathname).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)) return ext;
  } catch (_) {}
  return ".jpg";
}

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(filepath, buffer);
}

async function main() {
  ensureDir(GALLERY_DIR);

  const manifest = [];
  let nextUrl = `https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/photos?fields=id,images,created_time,name&access_token=${ACCESS_TOKEN}&limit=25`;

  console.log(`Fetching photos from Facebook Page ${PAGE_ID}...`);

  while (nextUrl) {
    const data = await fetchGraph(nextUrl);
    const photos = data.data || [];

    for (const photo of photos) {
      const imageUrl = pickBestImageUrl(photo.images);
      if (!imageUrl) continue;

      const ext = extensionFromUrl(imageUrl);
      const filename = `photo_${photo.id}${ext}`;
      const filepath = path.join(GALLERY_DIR, filename);

      try {
        await downloadImage(imageUrl, filepath);
        manifest.push({
          id: photo.id,
          filename,
          created_time: photo.created_time || null,
          name: photo.name || null,
        });
        console.log(`  Downloaded: ${filename}`);
      } catch (err) {
        console.warn(`  Skip ${photo.id}: ${err.message}`);
      }
    }

    nextUrl = data.paging?.next || null;
    if (nextUrl) console.log("  Fetching next page...");
  }

  const manifestPath = path.join(GALLERY_DIR, "images.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`\nDone. ${manifest.length} images saved to public/gallery/`);
  console.log(`Manifest: ${manifestPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
