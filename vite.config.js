import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Needed for Docker mapping
    strictPort: true,
  },
  optimizeDeps: {
    // This forces Vite to handle dependency pre-bundling more reliably in Docker
    force: true, 
  }
})
