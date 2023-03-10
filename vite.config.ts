/* eslint-disable import/no-extraneous-dependencies */
/// <reference types = "vitest"/>
/// <reference types = "vite/client"/>

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   open: true,
  // },
  // build: {
  //   outDir: 'build',
  //   sourcemap: true,
  //   commonjsOptions: {
  //     include: [],
  //   },
  // },
  optimizeDeps: {
    disabled: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    mockReset: true,
  },
});
