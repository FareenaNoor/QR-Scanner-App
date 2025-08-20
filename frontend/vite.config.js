import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel looks for dist by default
  },
  server: {
    host: true,  // allow access from mobile devices on local network
    port: 5173,  // you can change if needed
  }
})
