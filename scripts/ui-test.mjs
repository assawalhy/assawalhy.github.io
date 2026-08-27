import { readFileSync } from 'node:fs';
import { startServer } from './ui-serve.mjs';

const FIXTURES = new URL('../tests/fixtures/content.json', import.meta.url).pathname;
const fixtures = JSON.parse(readFileSync(FIXTURES, 'utf8'));

const BODY_RE = /<body[^>]*>([\s\S]*?)<\/body>/i;

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

async function fetchPage(base, route) {
  const res = await fetch(`${base}${route}`);
  const html = await res.text();
  return { status: res.status, html };
}

const { server, base } = await startServer();

const failures = [];
let checks = 0;

for (const [route, fragments] of Object.entries(fixtures)) {
  const { status, html } = await fetchPage(base, route);
  const body = decodeEntities((html.match(BODY_RE) || ['', html])[1]);

  if (status !== 200) {
    failures.push(`[${route}] returned HTTP ${status}`);
    continue;
  }

  for (const fragment of fragments) {
    checks++;
    if (!body.includes(fragment)) {
      failures.push(`[${route}] missing expected content: "${fragment}"`);
    }
  }
}

server.close();

if (failures.length > 0) {
  console.error(`\nUI REGRESSION FAILED (${checks} checks):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}

console.log(`UI content fixtures OK: ${checks} checks across ${Object.keys(fixtures).length} routes.`);
process.exit(0);
