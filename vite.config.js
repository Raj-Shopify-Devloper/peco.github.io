import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/peco.github.io/',
  plugins: [react()],
  optimizeDeps: {
    include: ['react-slick > slick-carousel']  // Forces Vite to pre-bundle slick-carousel properly
  },
  build: {
    commonjsOptions: {
      esmExternals: true  // Handles mixed CJS/ESM exports from react-slick
    }
  }
});