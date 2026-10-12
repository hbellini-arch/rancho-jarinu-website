import esbuild from 'esbuild-wasm';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export async function build() {
  console.log('[build] Compiling bundle.js with esbuild-wasm...');
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }

  await esbuild.build({
    entryPoints: ['src/main.jsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    format: 'esm',
    loader: { '.jsx': 'jsx', '.js': 'jsx' },
    jsx: 'automatic',
    minify: false,
    sourcemap: true,
  });
  console.log('[build] Bundle compiled successfully!');

  console.log('[build] Compiling Tailwind CSS...');
  execSync('npx tailwindcss -i ./src/index.css -o ./dist/style.css', { stdio: 'inherit' });
  console.log('[build] CSS compiled successfully!');
  
    console.log('[build] Copiando arquivos estáticos...');
  fs.copyFileSync('index.html', 'dist/index.html');

  if (fs.existsSync('images')) {
    fs.cpSync('images', 'dist/images', { recursive: true });
  }
}

if (process.argv[1] && process.argv[1].endsWith('build.js')) {
  build().catch(err => {
    console.error('[build] Error:', err);
    process.exit(1);
  });
}
