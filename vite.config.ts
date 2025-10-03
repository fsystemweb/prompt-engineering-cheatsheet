import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://fsystemweb.github.io/prompt-engineering-cheatsheet/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});



