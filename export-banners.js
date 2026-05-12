const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const BASE   = path.resolve(__dirname);

const banners = [
  {
    file:   'linkedin-banner.html',
    out:    'linkedin-banner.png',
    width:  1584,
    height: 396,
  },
  {
    file:   'linkedin-company-banner.html',
    out:    'linkedin-company-banner.png',
    width:  1128,
    height: 191,
  },
  {
    file:   'facebook-cover.html',
    out:    'facebook-cover.png',
    width:  1640,
    height: 720,
  },
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  for (const b of banners) {
    const page = await browser.newPage();
    await page.setViewport({ width: b.width, height: b.height, deviceScaleFactor: 1 });
    await page.goto(`file://${BASE}/${b.file}`, { waitUntil: 'networkidle0' });
    // Wait for Google Fonts
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({
      path: path.join(BASE, b.out),
      clip: { x: 0, y: 0, width: b.width, height: b.height },
    });
    console.log(`✓  ${b.out}  (${b.width}×${b.height})`);
    await page.close();
  }

  await browser.close();
  console.log('\nDone — PNGs saved to maru-website/');
})();
