#!/usr/bin/env node
// Generates src/app/opengraph-image.png — 1200×630 OG card for hokagechess.com
// Uses Next.js 16 file-convention: file at src/app/opengraph-image.* auto-injects
// og:image meta tags (no explicit images block needed in layout.tsx metadata).
// Twitter card mirrors via src/app/twitter-image.png (same bytes).
// Run: node scripts/generate-og-image.mjs
// Brand: #111111 bg / #E5E5E5 text / #C41E3A red / #FFD700 gold

import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..");
const appDir = join(repoRoot, "src", "app");
const scriptsDir = __dirname;

const W = 1200;
const H = 630;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
    <linearGradient id="ascent" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#C41E3A"/>
    </linearGradient>
  </defs>

  <!-- background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- ascent meter (left edge, mirrors site UI) -->
  <rect x="0" y="0" width="6" height="${H}" fill="url(#ascent)"/>

  <!-- accent dot (top-right, brand red, pulse-style) -->
  <circle cx="${W - 80}" cy="80" r="8" fill="#C41E3A"/>
  <circle cx="${W - 80}" cy="80" r="20" fill="none" stroke="#C41E3A" stroke-width="2" opacity="0.4"/>

  <!-- ELO ladder marks (vertical, JetBrains Mono feel via tabular-num) -->
  <g font-family="ui-monospace, 'JetBrains Mono', 'Menlo', monospace" font-size="18" fill="#666666" letter-spacing="2">
    <text x="${W - 100}" y="${H - 40}">1300</text>
    <text x="${W - 100}" y="${H - 90}">1500</text>
    <text x="${W - 100}" y="${H - 140}">1800</text>
    <text x="${W - 100}" y="${H - 190}">2200</text>
    <text x="${W - 100}" y="${H - 240}" fill="#FFD700">GM</text>
  </g>

  <!-- main title (Oswald-style: sans, bold, condensed) -->
  <text x="80" y="240" font-family="'Oswald', 'Helvetica Neue', Impact, sans-serif" font-weight="700" font-size="120" fill="#E5E5E5" letter-spacing="-2">
    HOKAGE CHESS
  </text>

  <!-- accent underline -->
  <rect x="80" y="265" width="180" height="6" fill="#C41E3A"/>

  <!-- tagline -->
  <text x="80" y="350" font-family="'DM Sans', 'Helvetica Neue', Helvetica, sans-serif" font-weight="500" font-size="44" fill="#E5E5E5">
    The Climb Starts Here
  </text>

  <!-- description -->
  <text x="80" y="420" font-family="'DM Sans', 'Helvetica Neue', Helvetica, sans-serif" font-weight="400" font-size="26" fill="#A0A0A0">
    The road from low-advanced to grandmaster,
  </text>
  <text x="80" y="455" font-family="'DM Sans', 'Helvetica Neue', Helvetica, sans-serif" font-weight="400" font-size="26" fill="#A0A0A0">
    told from inside the climb.
  </text>

  <!-- footer band -->
  <rect x="0" y="${H - 60}" width="${W}" height="60" fill="#0a0a0a" opacity="0.6"/>
  <text x="80" y="${H - 22}" font-family="'DM Sans', 'Helvetica Neue', Helvetica, sans-serif" font-weight="600" font-size="20" fill="#E5E5E5">
    hokagechess.com
  </text>
  <text x="${W - 280}" y="${H - 22}" font-family="'DM Sans', 'Helvetica Neue', Helvetica, sans-serif" font-weight="400" font-size="20" fill="#888888">
    @HokageChess  ·  YouTube
  </text>
</svg>`;

// Source vector lives in scripts/ for human auditability + cheap regen
await writeFile(join(scriptsDir, "og-source.svg"), svg);

const png = await sharp(Buffer.from(svg))
  .png({ quality: 90, compressionLevel: 9 })
  .toBuffer();

// Next.js 16 file convention — both filenames auto-detected by app router
await writeFile(join(appDir, "opengraph-image.png"), png);
await writeFile(join(appDir, "twitter-image.png"), png);

// Alt text companions
const alt = "Hokage Chess — The Climb Starts Here. The road from low-advanced to grandmaster.";
await writeFile(join(appDir, "opengraph-image.alt.txt"), alt + "\n");
await writeFile(join(appDir, "twitter-image.alt.txt"), alt + "\n");

console.log(`✓ wrote ${join(scriptsDir, "og-source.svg")}`);
console.log(`✓ wrote ${join(appDir, "opengraph-image.png")} (1200×630)`);
console.log(`✓ wrote ${join(appDir, "twitter-image.png")} (1200×630)`);
console.log(`✓ wrote ${join(appDir, "opengraph-image.alt.txt")}`);
console.log(`✓ wrote ${join(appDir, "twitter-image.alt.txt")}`);
