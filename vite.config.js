import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5000,
        host: '0.0.0.0', // This enables the server to be accessible from any IP
        strictPort: true, // This makes Vite fail if the port is already in use
        cors: true, // Enable CORS
        hmr: {
            overlay: false // Disable the error overlay
        }
    }
})
