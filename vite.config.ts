import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // Usamos a conversão direta aqui, sem precisar salvar em variáveis soltas
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})