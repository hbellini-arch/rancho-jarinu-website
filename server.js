import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from './build.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 5173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jsx': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.map': 'application/json',
};

async function startServer() {
  console.log('🚀 Running initial build...');
  await build();

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/' || reqPath === '') {
      reqPath = '/index.html';
    }

    let filePath = path.join(__dirname, reqPath);
    if (!fs.existsSync(filePath)) {
      const publicPath = path.join(__dirname, 'public', reqPath);
      if (fs.existsSync(publicPath)) {
        filePath = publicPath;
      }
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      });

      const readStream = fs.createReadStream(filePath);
      readStream.pipe(res);
    });
  });

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n======================================================`);
    console.log(`✨ Rancho Jarinu React App is running!`);
    console.log(`📡 Local preview: http://localhost:${PORT}`);
    console.log(`======================================================\n`);
  });

  let rebuilding = false;
  let debounceTimeout = null;
  fs.watch(path.join(__dirname, 'src'), { recursive: true }, (eventType, filename) => {
    if (filename) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(async () => {
        if (rebuilding) return;
        rebuilding = true;
        console.log(`[watch] Change detected in src/${filename}. Rebuilding...`);
        try {
          await build();
          console.log('[watch] Rebuild completed successfully.');
        } catch (e) {
          console.error('[watch] Rebuild error:', e);
        } finally {
          rebuilding = false;
        }
      }, 200);
    }
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
