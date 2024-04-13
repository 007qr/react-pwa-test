import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      injectRegister: 'script-defer',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon-512-maskable.png'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Osteopath.in',
        short_name: 'Osteopath',
        description: 'An app for osteopaths',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
     })
  ],
})
