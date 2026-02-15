import { expect, test } from '@playwright/test';

const routes = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'service-first-slug', path: '/services/ai-revenue-diagnostic' },
  { name: 'contact', path: '/contact' },
];

test.describe('Visual regression: key routes', () => {
  for (const route of routes) {
    test(route.path, async ({ page }, testInfo) => {
      await page.goto(route.path, { waitUntil: 'networkidle' });

      await page.evaluate(async () => {
        await document.fonts.ready;
      });

      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
            caret-color: transparent !important;
          }
        `,
      });

      await expect(page).toHaveScreenshot(`${route.name}-${testInfo.project.name}.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});

test('typography wiring: local font variables are attached', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  const fontSignals = await page.evaluate(() => {
    const bodyClass = document.body.className;
    const interVar = getComputedStyle(document.body).getPropertyValue('--font-inter').trim();
    const outfitVar = getComputedStyle(document.body).getPropertyValue('--font-outfit').trim();
    return { bodyClass, interVar, outfitVar };
  });

  expect(fontSignals.bodyClass).toMatch(/inter_/i);
  expect(fontSignals.bodyClass).toMatch(/outfit_/i);
  expect(fontSignals.interVar.length).toBeGreaterThan(0);
  expect(fontSignals.outfitVar.length).toBeGreaterThan(0);
});
