const sharp = require('sharp');
const path = require('path');

const SIZE = 1024;
const ASSETS = path.join(__dirname, '..', 'assets');

const iconSvg = `
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#0f0f1a"/>
    </linearGradient>
  </defs>
  <rect width="${SIZE}" height="${SIZE}" rx="220" fill="url(#bg)"/>

  <!-- Speech bubble -->
  <g transform="translate(${SIZE/2}, ${SIZE/2 - 40})">
    <!-- Bubble body -->
    <rect x="-300" y="-200" width="600" height="340" rx="50" fill="#e94560"/>
    <!-- Bubble tail -->
    <polygon points="-40,140 40,140 -10,220" fill="#e94560"/>

    <!-- Exclamation mark -->
    <rect x="-25" y="-140" width="50" height="180" rx="25" fill="white"/>
    <circle cx="0" cy="90" r="30" fill="white"/>
  </g>

  <!-- Small stars/sparkles -->
  <text x="140" y="200" font-size="80" fill="#f39c12" opacity="0.8">✨</text>
  <text x="740" y="750" font-size="60" fill="#f39c12" opacity="0.6">💬</text>
  <text x="700" y="240" font-size="50" fill="#fff" opacity="0.3">?</text>
</svg>`;

const foregroundSvg = `
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(${SIZE/2}, ${SIZE/2 - 40})">
    <rect x="-260" y="-180" width="520" height="300" rx="45" fill="#e94560"/>
    <polygon points="-35,120 35,120 -8,190" fill="#e94560"/>
    <rect x="-22" y="-125" width="44" height="155" rx="22" fill="white"/>
    <circle cx="0" cy="75" r="26" fill="white"/>
  </g>
</svg>`;

const bgSvg = `
<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${SIZE}" height="${SIZE}" fill="#0f0f1a"/>
</svg>`;

const splashSvg = `
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(150, 130)">
    <rect x="-80" y="-60" width="160" height="100" rx="16" fill="#e94560"/>
    <polygon points="-12,40 12,40 -3,60" fill="#e94560"/>
    <rect x="-8" y="-42" width="16" height="52" rx="8" fill="white"/>
    <circle cx="0" cy="24" r="9" fill="white"/>
  </g>
</svg>`;

async function generate() {
  await sharp(Buffer.from(iconSvg)).resize(1024, 1024).png().toFile(path.join(ASSETS, 'icon.png'));
  console.log('✓ icon.png');
  await sharp(Buffer.from(foregroundSvg)).resize(1024, 1024).png().toFile(path.join(ASSETS, 'android-icon-foreground.png'));
  console.log('✓ android-icon-foreground.png');
  await sharp(Buffer.from(bgSvg)).resize(1024, 1024).png().toFile(path.join(ASSETS, 'android-icon-background.png'));
  console.log('✓ android-icon-background.png');
  await sharp(Buffer.from(foregroundSvg)).resize(1024, 1024).png().toFile(path.join(ASSETS, 'android-icon-monochrome.png'));
  console.log('✓ android-icon-monochrome.png');
  await sharp(Buffer.from(splashSvg)).resize(300, 300).png().toFile(path.join(ASSETS, 'splash-icon.png'));
  console.log('✓ splash-icon.png');
  await sharp(Buffer.from(iconSvg)).resize(48, 48).png().toFile(path.join(ASSETS, 'favicon.png'));
  console.log('✓ favicon.png');
}

generate().catch(console.error);
