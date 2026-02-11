# New Decorating | Bath

Website for **New Decorating**, a painting and decorating business in Bath and the surrounding area.

- **Facebook:** [New Decorating | Bath](https://www.facebook.com/profile.php?id=61571675780751)

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts: Cormorant Garamond (headings), DM Sans (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- **Home** – Hero, services preview, contact CTA
- **Services** – Painting, wallpapering, decorative finishes, etc.
- **Gallery** – Project photos (downloaded from Facebook or live embed)
- **About** – Business overview and area
- **Contact** – Facebook link and what to include when getting in touch

## Gallery: download Facebook photos

To use photos from your Facebook Page on the site (instead of only the embed):

1. Create a [Facebook App](https://developers.facebook.com/apps/) (or use an existing one).
2. In [Graph API Explorer](https://developers.facebook.com/tools/explorer/), select your app, choose your Page, and add permissions: `pages_read_engagement`, `pages_show_list`.
3. Generate a **Page access token** (or User token with those permissions) and copy it. For a long-lived token, use [Access Token Tool](https://developers.facebook.com/tools/accesstoken/).
4. Create a `.env` file in the `website` folder (copy from `.env.example`) and set:
   - `FACEBOOK_ACCESS_TOKEN=your_token`
   - Optionally `FACEBOOK_PAGE_ID=61571675780751` (default is New Decorating’s page).
5. Run the download script:
   ```bash
   npm run download-gallery
   ```
   Images are saved to `public/gallery/` and listed in `public/gallery/images.json`. The Gallery page will show them automatically.

## Build & deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com), Netlify, or any Node.js host.
