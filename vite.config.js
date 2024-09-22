import { fileURLToPath, URL } from 'node:url'
import * as process from "process";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    VITE_BACKEND_URL: process.env.VITE_BACKEND_URL,
  }
})
