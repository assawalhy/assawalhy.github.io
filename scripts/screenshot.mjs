import puppeteer from 'puppeteer-core';
import { mkdir } from 'node:fs/promises';
import { startServer } from './ui-serve.mjs';

const OUT = '.tmp-screens';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

const pages = [
  { path: '/en/', label: 'en-home' },
  { path: '/ar/', label: 'ar-home' },
  { path: '/en/projects/', label: 'en-projects' },
  { path: '/ar/projects/', label: 'ar-projects' },
  { path: '/en/blogs/', label: 'en-blogs' },
  { path: '/ar/blogs/', label: 'ar-blogs' },
  { path: '/en/seminars/', label: 'en-seminars' },
  { path: '/ar/seminars/', label: 'ar-seminars' },
  { path: '/en/contact/', label: 'en-contact' },
  { path: '/ar/contact/', label: 'ar-contact' },
];

const { server, base } = await startServer();

try {
  await mkdir(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const page of pages) {
    for (const vp of viewports) {
      const tab = await browser.newPage();
      await tab.setViewport({ width: vp.width, height: vp.height });
      try {
        await tab.goto(`${base}${page.path}`, { waitUntil: 'networkidle2', timeout: 15000 });
        await new Promise((r) => setTimeout(r, 1000));
        const file = `${OUT}/${page.label}-${vp.name}.png`;
        await tab.screenshot({ path: file, fullPage: true });
        console.log(`✓ ${file}`);
      } catch (e) {
        console.log(`✗ ${page.label}-${vp.name}: ${e.message}`);
      }
      await tab.close();
    }
  }

  await browser.close();
  console.log('\nDone!');
} finally {
  server.close();
}
