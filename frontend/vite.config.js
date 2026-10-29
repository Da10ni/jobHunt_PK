import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { createRequire } from 'module';
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { outDir: '../backend/public', emptyOutDir: true },
  server: { proxy: { '/api': 'http://localhost:5000', '/health': 'http://localhost:5000' } },
});