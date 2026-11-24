# Changelog

## [13.1.3] — 2026-11-24 (`ACADEMIC PROTOTYPE — TESTING REQUIRED`)
- **Fixed Blood-Group Encoding Bug & `URIError` Crash:** Rewrote `buildBloodMessage()` in `NextLevelEmergencySuite` to return clean newline-separated text and wrapped WhatsApp/SMS links in `encodeURIComponent(...)` so `O+`/`A+`/`B+`/`AB+` preserve `+` (`%2B`) and `%`/`&`/`#` inputs never truncate messages or crash `Copy Alert Text`.
- **Completed "Erase Device Data" Coverage:** Added `jeeva_raksha_govt_health_ids`, `jr_last_known_gps`, `jr_v12_last_gps`, `jeeva_raksha_corrupted_backup`, and `jeeva_raksha_schema_version` to `eraseAllApplicationStorage()`, and wired honest partial/error reporting into `MedicalProfileManager.handleEraseAllLocalData()`.
- **Eliminated Broken Empty `href="tel:"` Buttons:** Guarded hub reception links in `OfflineMapComponent` (`Dial 112 National Emergency (ERSS)` fallback + fixed default hub ID `wp-ka-kushalnagar`) and nearby-hospital call buttons in `EmergencyScanView` (`Dial 112 (Desk N/A)` fallback).
- **Fixed GitHub Pages Copy-Link & Portal URL:** Preserved repository subpath (`window.location.origin + directory pathname`) on hosted HTTP/HTTPS origins and replaced unowned `https://jeevaraksha.app` fallbacks with `https://ullaslsmo-ship-it.github.io/jeevaraksha-emergency-assistance/`.
- **Aligned Plain-Text QR Preview:** Updated the embedded QR summary `<pre>` in `MedicalProfileManager` to omit `PORTAL:` URLs (matching the actual generated QR) and display a clear consent prompt when all toggles are OFF.
- **Added `.nojekyll` for GitHub Pages `.well-known/` Hosting:** Added root `.nojekyll` so GitHub Pages serves `.well-known/assetlinks.json` without Jekyll stripping dotfiles.
- **UI Polish:** Replaced remaining uppercase `"NOT VERIFIED"` phrases in highway waypoints and decision-tree steps with calm, actionable phone-confirmation guidance.

## [13.1.2] — 2026-11-24 (`ACADEMIC PROTOTYPE — TESTING REQUIRED`)
- **Fixed Stale IndexedDB First-Aid Overwrite Bug:** `getFirstAidManualsFromIndexedDB()` now always returns the current bundled v13.1.2 guides (0 medication dosages) and refreshes the IndexedDB `first_aid_manuals` store so legacy v12.x cached guides never overwrite clean guides.
- **Fixed Local Log Status Honesty:** Replaced misleading `"synced_cloud"` IndexedDB log status with `"logged_locally"` in `indexedDb.ts`.
- **Fixed Rescue Whistle Background Audio Leak:** Added `visibilitychange` (hidden) and `pagehide` handlers in `NextLevelEmergencySuite` to immediately stop the 3200 Hz whistle oscillator, close its `AudioContext`, and cancel speech synthesis.
- **Wired True Kannada Rendering in First-Aid:** Connected `lang === "kn"` across `FirstAidTriageView` (guide cards, detail title, summary, step titles/descriptions, do-nots, and headings); removed dead `window.__JR_TRANSLATOR__` calls in `Header.tsx` and `App.tsx`, and synced `<html lang="...">`.
- **Fixed Stale Counts & Version Drift:** Updated `EmergencyScanView` (`579 districts`, `66 guides`) and synchronized every HTML/PWA/doc/test file cleanly to `v13.1.2`.
- **Repaired Automated Unit & Playwright E2E Tests:** Updated `tests/unit/v1312Verification.test.mjs`, `tests/unit/hospitalDataAudit.test.mjs`, and `tests/e2e/jeevaraksha-40-cases.spec.ts` to reference `dist/JeevaRaksha-v13.1.2-GitHub-Ready.html` and match actual v13.1.2 UI strings.
- **Transparent Compiled Module Placement:** Moved extracted compiled bundle modules from `src/` to `bundle-modules/` with an explicit disclosure README so reviewers are never misled about raw vs compiled sources.

## [13.1.1] — 2026-11-24
- Replaced repetitive per-card amber "Not verified" badges with clean `GPS Pin` / `City Area Pin` chips, added `With Phone & GPS` hospital filter (832 facilities), and calmed missing-phone (`Desk Phone N/A`) and First-Aid disclaimer styling.

## [13.1.0] — 2026-11-24
- Replaced outdated embedded v12.1 privacy policy, renamed `VERIFIED_MEDICAL_INSTITUTIONS` to `REFERENCE_MEDICAL_INSTITUTIONS`, removed auto-start GPS, added WhatsApp/SMS confirmation dialogs, added camera `visibilitychange`/`pagehide` cleanup, and fixed IndexedDB deletion error detection.
