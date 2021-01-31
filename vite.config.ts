import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: "src",
  server: {
    port: 4000,
  },
  build: {
    base: "./",
    outDir: "../dist",
    rollupOptions: {
      output: {
        format: "cjs",
      },
    },
  },
  plugins: [vue()],
  alias: {
    '/assets': path.join(__dirname, 'src/assets'),
  }
});
