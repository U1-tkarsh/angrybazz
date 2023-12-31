import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: 'index.css', // Add your CSS file here
  },build: {
    outDir: 'dist',
  },
})
