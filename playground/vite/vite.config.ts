import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
  ],
  resolve: {
    alias: {
      '@toolpad/core': path.resolve(__dirname, '../../packages/toolpad-core/src'),
      '@toolpad/utils': path.resolve(__dirname, '../../packages/toolpad-utils/src'),
      '@toolpad/tanstack-router': path.resolve(__dirname, '../../packages/toolpad-tanstack-router/src'),
      '@toolpad/react-router': path.resolve(__dirname, '../../packages/toolpad-react-router/src'),
      '@toolpad/core/AppProvider': path.resolve(__dirname, '../../packages/toolpad-core/src/AppProvider/AppProvider.tsx'),

    },
    // preserveSymlinks: true,


  }
  
});
