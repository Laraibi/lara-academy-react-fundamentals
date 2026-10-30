import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { rollupOptions: { input: { boutique: 'index.html', counter: 'counter.html', vanilla: 'vanilla.html' } } },
});
