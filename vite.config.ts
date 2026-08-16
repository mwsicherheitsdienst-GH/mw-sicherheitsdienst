import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo at /mw-sicherheitsdienst/, not the domain
  // root — Vite needs to know that so built asset URLs resolve correctly.
  // If you switch to a custom domain later, change this back to '/'.
  base: '/mw-sicherheitsdienst/',
})
