import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from "vite-plugin-mkcert"

export default defineConfig({
  server: {
    // cors: false,
    https: true, // enable https
    host: true, // exposes the service on the local network
    port: 443, // https port
  },
  plugins: [mkcert(),react()],
})
