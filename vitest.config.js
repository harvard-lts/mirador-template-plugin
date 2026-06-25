import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
    globals: true,
    include: ['src/**/*.{test,spec}.{js,jsx}', '__tests__/**/*.{test,spec}.{js,jsx}'],
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
});
