# JeevaRaksha (`v13.1.3`)

**Repository:** [https://github.com/ullaslsmo-ship-it/jeevaraksha-emergency-assistance](https://github.com/ullaslsmo-ship-it/jeevaraksha-emergency-assistance)  
**Live GitHub Pages URL (after enabling Pages):** `https://ullaslsmo-ship-it.github.io/jeevaraksha-emergency-assistance/`  
**Release Classification:** `ACADEMIC PROTOTYPE — TESTING REQUIRED`

> **Important Notice:** JeevaRaksha is an academic software engineering prototype. It is **not** clinically approved, is **not** a medical device, does **not** diagnose conditions, and has **no** official government endorsement or live hospital bed feed. Always call **108 (Ambulance)** or **112 (National Emergency)** immediately in life-threatening emergencies in India.

---

## 1. Project Overview
JeevaRaksha is an offline-first Emergency Medical ID and bystander assistance web application built for Indian users (**English & Kannada** core UI and first-aid guides, plus **20 additional Indian language navigation packs**). Users can create a local, user-reported medical profile and offline QR card, search an imported All-India hospital reference directory (OGD India registry), prepare user-confirmed emergency SMS/WhatsApp messages, and consult 66 educational bystander first-aid guides.

## 2. Features & Honest Offline/Online Capability Matrix

| Category | Features |
|---|---|
| **A. Works Offline (Local Device)** | Saved medical profiles (`localStorage`/`IndexedDB`), offline QR generation (`JR:V3` & readable text), manual text QR decoding, photo-upload QR decoding, All-India 30,215-record hospital directory search + `With Phone & GPS` filter, 66 educational first-aid guides (EN/KN), CR80 card printing, JSON backup export/restore, Dark/Light/Sunlight themes, text scaling. |
| **B. Requires Internet Connectivity** | Opening external Google Maps (`Directions (Online)`), sending WhatsApp messages, opening external government portals (ABHA / PM-JAY / e-RaktKosh / Tele-MANAS / Jan Aushadhi), initial web load before Service Worker caches the static shell. |
| **C. Requires Device Permissions / Hardware** | Live camera QR scanning (camera permission + compatible camera), hardware GPS distance sorting (location permission + GPS sensor — requested only on explicit user click), cellular calls (`tel:108`, `tel:112`, `tel:104`), cellular SMS composer (`sms:`), haptic vibration, Web Speech / Web Audio CPR beat & rescue whistle. |
| **D. Requires Hosted HTTPS or `localhost`** | Live camera QR scanning (`getUserMedia`), hardware browser Geolocation API, Service Worker static-shell caching (`sw.js`), and PWA Home Screen installation (`manifest.json`). Downloaded local `file://` HTML files may block live camera access and Service Workers; use Photo Upload or Paste Text instead. |

## 3. Repository Structure (Transparent Source Disclosure)
```text
jeevaraksha-emergency-assistance/
├── .nojekyll                   # Ensures GitHub Pages serves .well-known/assetlinks.json
├── index.html                  # Hosted HTTPS PWA entry (GitHub Pages / Vercel / Netlify)
├── manifest.json / sw.js       # Static-shell-only PWA config (never caches query URLs/user profiles)
├── privacy-policy.html         # Truthful v13.1.3 privacy & data handling disclosure
├── offline.html                # Offline emergency dial fallback (108 / 112)
├── dist/                       # Standalone single-file HTML build (JeevaRaksha-v13.1.3-GitHub-Ready.html)
├── public/                     # Organized static PWA assets & Android assetlinks template
├── bundle-modules/             # Extracted compiled bundle modules for transparent code review*
├── tests/                      # Synchronized Node.js unit tests + Playwright E2E test suite
└── docs/                       # Architecture, Privacy, Security, Hospital Audit, Testing & Limitations
```
> *Note on `bundle-modules/`: This release was audited and patched from the single-file compiled HTML artifact. Rather than misrepresenting compiled bundle chunks as uncompiled Vite/TSX sources inside `src/`, they are placed honestly in `bundle-modules/` for transparent inspection. If you maintain the original raw TypeScript/Vite repository locally, you may place those raw sources in `src/`.*

## 4. Installation, Local Run & Testing
```bash
git clone https://github.com/ullaslsmo-ship-it/jeevaraksha-emergency-assistance.git
cd jeevaraksha-emergency-assistance
npm install

# Run local server (required for Camera, GPS & Service Worker)
npm run dev
# Open http://127.0.0.1:4173/index.html

# Run unit & Playwright E2E verification suites
npm run test:unit
npx playwright install chromium
npm run test:e2e
```

## 5. Privacy & Security Notes
- **Local Browser Storage Is NOT Automatically Encrypted:** Profiles and Safety Circle contacts stored in `localStorage` / `IndexedDB` can be read by anyone with unlocked access to the device.
- **Plain-Text QR Codes Are NOT Encrypted:** Anyone scanning or photographing a printed QR card or lockscreen wallpaper can read selected fields. All 8 QR consent toggles default to **OFF** (including ABHA/PM-JAY `includeHealthIds: false`).
- **No Medical Data in URL Query Parameters:** `v13.1.3` blocks medical URL query serialization and strips legacy `?qr=` parameters via `history.replaceState`.
- **Zero Third-Party IP Trackers:** GeoJS and IPWho.is requests are removed; zero analytics or cloud profile servers exist.
- **Audio, Camera & GPS Cleanup:** Camera streams, continuous GPS watches, CPR metronome, and the 3200 Hz rescue whistle stop automatically when leaving the page or hiding the tab (`visibilitychange` / `pagehide`).
- Full details: [`privacy-policy.html`](./privacy-policy.html), [`docs/privacy.md`](./docs/privacy.md), [`docs/security.md`](./docs/security.md), [`SECURITY.md`](./SECURITY.md).

## 6. Hospital Directory & First-Aid Limitations
- **Hospital Directory:** Contains **30,215** records imported from the Open Government Data (OGD) India public hospital registry across 35 States/UTs and 579 Districts (`11,859` with GPS coordinates including `2,898` city-area pins; `1,936` with valid desk phone numbers; `832` matching the `With Phone & GPS` filter; `0` live bed/ICU feeds). Always confirm availability by phone or dial `108 / 112`.
- **First-Aid Guides:** Contains **66** educational bystander guides (`32` Urgent First Aid + `34` Minor Illness) with **0** specific medication dosage strings. Pending formal review by qualified healthcare professionals.

## 7. Testing Status & Accessibility
- **Static & Data Audits:** Executed and passed (see [`docs/testing.md`](./docs/testing.md)).
- **Live Browser & Android Device Testing:** Must be executed locally via `npm run test` and on physical Android Chrome after hosting on GitHub Pages.
- **Accessibility:** Designed using **WCAG 2.2 AA as a design target** (not formally certified).

## 8. Version, Contributors & License
- **Version:** `v13.1.3` (`v13.1.3-academic-prototype`, 2026-11-24)
- **Team Credits (subject to contributor permission):** Ullas L, Shafeeq Ahmad, Sunil M, Sanjay T
- **License:** Pending written sign-off from all contributors ([`LICENSE-PENDING.md`](./LICENSE-PENDING.md)).
