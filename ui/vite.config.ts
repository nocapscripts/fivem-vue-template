import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  build: {
    outDir: '../dist',     // Build folder outside src
    emptyOutDir: true,     // Clean before build
    sourcemap: false,      // optional, prevent errors in FiveM
    minify: true           // minify for production
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // use @ for imports
    },
  },
  server: {
    watch: {
      usePolling: true // Helps with FiveM live reloads
    },
  }
})