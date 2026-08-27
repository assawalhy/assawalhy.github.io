import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, normalize, extname } from 'node:path';
import { createServer } from 'node:http';

const DIST = new URL('../dist/', import.meta.url).pathname;

export function contentType(path) {
  switch (extname(path)) {
    case '.html': return 'text/html; charset=utf-8';
    case '.js': return 'text/javascript; charset=utf-8';
    case '.css': return 'text/css; charset=utf-8';
    case '.json': return 'application/json';
    case '.svg': return 'image/svg+xml';
    case '.png': return 'image/png';
    case '.jpg': return 'image/jpeg';
    case '.webp': return 'image/webp';
    case '.webmanifest': return 'application/manifest+json';
    case '.xml': return 'application/xml';
    case '.ico': return 'image/x-icon';
    case '.pdf': return 'application/pdf';
    case '.woff':
    case '.woff2': return 'font/woff2';
    default: return 'application/octet-stream';
  }
}

function resolvePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  let filePath = normalize(join(DIST, clean));

  if (!filePath.startsWith(DIST)) {
    return { filePath: join(DIST, '404.html'), status: 404 };
  }

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  }
  if (!extname(filePath)) {
    filePath += '.html';
  }
  if (!existsSync(filePath)) {
    return { filePath: join(DIST, '404.html'), status: 404 };
  }
  return { filePath, status: 200 };
}

export function startServer() {
  const server = createServer((req, res) => {
    const { filePath, status } = resolvePath(req.url || '/');
    const body = readFileSync(filePath);
    res.writeHead(status, { 'Content-Type': contentType(filePath) });
    res.end(body);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, base: `http://127.0.0.1:${port}` });
    });
  });
}

export function listBuiltPages(baseDir = DIST) {
  const pages = [];
  const walk = (dir, prefix) => {
    for (const name of readdirSync(dir)) {
      const abs = join(dir, name);
      const stat = statSync(abs);
      if (stat.isDirectory()) {
        walk(abs, `${prefix}/${name}`);
      } else if (name === 'index.html') {
        const route = prefix === '' ? '/' : `${prefix}/`;
        if (!route.includes('/en/') && !route.includes('/ar/') && route !== '/') continue;
        pages.push(route);
      }
    }
  };
  walk(baseDir, '');
  return pages;
}
