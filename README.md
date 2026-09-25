# SiteEzy Website — README

This is the SiteEzy website (siteezy.in): a plain HTML/CSS/JavaScript project.
There is no database, no admin panel, and no server-side code — everything
runs directly in the visitor's browser. That's on purpose: it makes the
whole project fast, free to host, and easy for you to edit yourself, even
if you've never coded before.

This guide assumes no prior web development experience. Take it step by step.

---

## 1. What this project is

- **`index.html`** is the main SiteEzy website — the sales page that explains
  the four packages, lets visitors compare them, and ends with a form that
  opens WhatsApp with a ready-made enquiry message.
- **`demos/`** contains **four separate, complete example websites** — one
  per package — so a visitor can click "View Demo" and experience exactly
  what that package's website looks and feels like. Each demo is its own
  self-contained website with its own look, its own files, and a small
  "← Back to SiteEzy" link at the top. None of the demos mention the other
  packages, by design — a visitor exploring the ₹5,000 demo should only see
  a ₹5,000 website, nothing else.
- The main site supports **English and Malayalam** via a switcher at the
  top (`EN | മലയാളം`). The four demo websites stay in English — translating
  fictional example businesses would make them feel less like real sites.

## 2. File structure

```
siteezy/
├── index.html                 ← the main SiteEzy website
├── css/
│   ├── main.css                ← colors, fonts, layout for index.html
│   └── demos.css                ← the small shared "Back to SiteEzy" bar used by all 4 demos
├── js/
│   ├── whatsapp.js              ← the ONE place the WhatsApp number lives
│   ├── language.js              ← all English + Malayalam text for index.html
│   └── main.js                  ← index.html's interactions (menu, animations, form)
├── demos/
│   ├── mini/index.html          ← ₹5,000 MINI demo — "Pepper Leaf Café"
│   ├── business/index.html      ← ₹10,000 BUSINESS demo — "Arora Interiors"
│   ├── catalogue/index.html     ← ₹15,000 CATALOGUE demo — "Urban Threads" (has a working cart)
│   └── flagship/index.html      ← ₹18,000 FLAGSHIP demo — "Nova Fitness Studio"
├── assets/
│   ├── brand/                   ← SiteEzy's own logo files
│   ├── cafe/ · interiors/ · urban-threads/ · nova-fitness/  ← the approved photos for each demo
│   ├── _review/                 ← photos NOT used on the site (see ASSET-INVENTORY.md) — safe to ignore or delete
│   └── ASSET-INVENTORY.md       ← notes on every supplied photo
└── README.md                    ← this file
```

**Each demo folder is self-contained.** Every demo's HTML file has its own
`<style>` and `<script>` written directly inside it (rather than shared
CSS/JS files), on purpose — each demo is meant to feel like an independent
real business website, not four color variants of one template. The one
thing every demo *does* share is `js/whatsapp.js`, so the phone number stays
in sync everywhere.

## 3. How to change the WhatsApp number

Open **`js/whatsapp.js`** and change this line near the top:

```javascript
const WHATSAPP_NUMBER = "919744239343"; // country code + number, no plus sign, no spaces
```

This one file is loaded by `index.html` **and** all four demo pages, so
changing it here updates every WhatsApp button and link across the entire
project automatically.

The number is also written as plain visible text in a few spots (the hero
section, footer, and sticky bar of `index.html`, and each demo's header/
footer). Use your editor's **Find & Replace** (Ctrl+F / Cmd+F) across each
file to update the *displayed* number so it matches the one people actually
message.

## 4. How to change prices

Prices appear as plain text, mostly inside `index.html` (package cards,
comparison table, positioning section, contact form's package dropdown) and
in each demo's "SiteEzy Demo • ₹X,000 ..." bar at the very top of the page
(inside the `.siteezy-demo-bar` `<div>`, near the top of each demo's HTML).
Use Find & Replace for `₹5,000`, `₹10,000`, `₹15,000` and `₹18,000` across
each file — search carefully, since a price can appear more than once per
file.

## 5. How to change package names, descriptions and features

On `index.html`, package content lives in two places that need to match:

1. The visible **English** text inside `<section id="packages">` — for
   example the `<div class="pc-tag">Get Online</div>` line for each card.
2. The **translation keys** in `js/language.js` — every visible package
   line has a matching key like `"pkg.mini.tag"`. If you change the English
   wording in `index.html`, also update the same key inside both the `en`
   and `ml` sections of `js/language.js` so translations stay accurate.

Elements with a `data-i18n="some.key"` attribute are the ones controlled by
`js/language.js` — the text between the quotes in `js/language.js` is what
actually displays; the text sitting inside the HTML tag itself is only a
fallback shown before the page's script runs.

## 6. How to change a demo's content (menu items, services, products, etc.)

Each demo is a single, self-contained HTML file — open
`demos/<package>/index.html` directly and edit the text in place. There's
no translation system inside the demos (they're English-only, see section 1),
so you're editing exactly what visitors see.

- **Café menu items** (`demos/mini/index.html`): look for `.menu-item` blocks.
- **Interiors services/projects** (`demos/business/index.html`): look for
  `.service-card` and `.project-card` blocks.
- **Urban Threads products** (`demos/catalogue/index.html`): all products
  are listed in one place — search for `const PRODUCTS = [` near the bottom
  of the file. Each product is an object with `name`, `price`, `category`,
  one or more `images`, and a `desc`. Add, remove or edit entries here and
  the catalogue, cart, and search/filter all update automatically.
- **Nova Fitness services** (`demos/flagship/index.html`): look for
  `.service-cards` and the "Personal Training" / "Group Training" sections.

## 7. How to replace images

Photos for the four demo businesses live under `assets/<business>/...` in
the folders already set up (see `assets/ASSET-INVENTORY.md` for what every
existing photo shows and where it's used). To swap a photo:

1. Add your new image file into the matching folder (e.g.
   `assets/cafe/interior/`).
2. In the relevant demo's HTML file, find the `<img src="...">` tag that
   references the old file and change the path to your new file's name.
3. Keep photos reasonably compressed (under ~300KB each is a good target)
   so the pages stay fast, especially on mobile data.

To replace the SiteEzy logo itself, replace the files in `assets/brand/`
(`siteezy-icon.png` and `siteezy-long.png`), keeping the same file names —
or update the `src="assets/brand/..."` references in `index.html` if you
rename them.

## 8. How to edit the Malayalam translations

Open **`js/language.js`** and find the `ml` object (it sits right after the
`en` object). Every key that appears in `en` also appears in `ml` — edit the
Malayalam text between the quotes to match. If you're not confident writing
Malayalam yourself, ask a fluent speaker to review your changes before
publishing, since machine-translated Malayalam can read unnaturally.

## 9. How to test the site on your own computer

You don't need to install anything complicated.

**Quick check:** double-click `index.html` — it opens directly in your
browser. Good enough for a quick look.

**Better (recommended before publishing):**
1. Install [Python](https://www.python.org/) if you don't already have it.
2. Open a terminal / command prompt inside the `siteezy` folder (the one
   containing `index.html`).
3. Run: `python3 -m http.server 8000`
4. Open `http://localhost:8000` in your browser.
5. Test: click every nav link, switch languages, open each of the four
   demos, add products to the Urban Threads cart, fill in the enquiry form,
   and check that the WhatsApp buttons build a sensible message (you don't
   have to actually send it).

## 10. How to upload the site to GitHub

If you're new to GitHub, here's the simplest path using GitHub's website
(no command line required):

**First time setup:**
1. Create a free account at [github.com](https://github.com).
2. Click **New repository**. Name it anything (e.g. `siteezy-website`).
   Make it **Public**.
3. On the new repository's page, click **Add file → Upload files**, then
   drag in *everything* inside your `siteezy` folder — `index.html`, the
   `css` folder, the `js` folder, the `demos` folder, the `assets` folder,
   and this `README.md`. Make sure the folder structure is preserved (most
   drag-and-drop uploads on GitHub keep subfolders intact automatically).
4. Click **Commit changes**.
5. Go to **Settings → Pages** (left sidebar).
6. Under **Source**, choose the `main` branch and `/ (root)` folder, then
   **Save**.
7. GitHub will give you a live URL like
   `https://yourusername.github.io/siteezy-website/` within a minute or
   two — open it to confirm everything works, including all four demos
   (e.g. `.../siteezy-website/demos/catalogue/index.html`).

**Making updates later:**
- For a small text change, open the file directly on GitHub's website,
  click the pencil (✏️) icon to edit, then **Commit changes**. The live
  site updates automatically within a minute.
- For bigger changes, edit the files on your computer first (see section 9
  to test locally), then use **Add file → Upload files** again to replace
  them, or use GitHub Desktop / `git` if you're comfortable with it.

## 11. How to connect the custom domain `siteezy.in`

Once the GitHub Pages URL above is working:

1. In your repository, go to **Settings → Pages**.
2. Under **Custom domain**, type `siteezy.in` and click **Save**. GitHub
   creates a file called `CNAME` in your repository automatically.
3. Go to wherever you registered `siteezy.in` (your domain registrar) and
   open its **DNS settings**. Add these records (GitHub's own Pages
   documentation always has the current values if these ever change —
   search "GitHub Pages custom domain DNS"):
   - Four **A records** for `@` (root domain) pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153`
   - One **CNAME record** for `www` pointing to `yourusername.github.io`
4. Wait for DNS to update (a few minutes to a few hours).
5. Back in **Settings → Pages**, tick **Enforce HTTPS** once it becomes
   available, so the site loads securely as `https://siteezy.in`.

If you use a different host instead of GitHub Pages, just upload the same
files and folders to that host's file manager or via FTP — nothing about
this project needs a special server.

---

## A note on scope

This is a static, front-end-only project by design — no payment gateway,
no customer accounts, no booking system, and no real e-commerce backend.
The ₹15,000 / ₹18,000 catalogue sends orders through WhatsApp instead of
taking payments directly, exactly as explained in the Disclaimer section of
the live site. Keeping the technical footprint this simple is what makes
the whole project realistic for a non-developer to maintain long-term.
