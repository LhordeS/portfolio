import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite config for a React app. Set `base` when deploying to GH Pages.
export default defineConfig({
  plugins: [react()],
  // base: '/repo-name/', // set this when deploying to GitHub Pages
})
