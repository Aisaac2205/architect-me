import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Lazy load framer-motion only when needed
          'vendor-animations': ['framer-motion'],
          // Split particles into smaller chunks for better loading
          'vendor-particles-core': ['@tsparticles/react', '@tsparticles/engine'],
          'vendor-particles-slim': ['@tsparticles/slim'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || '';
          if (/\.(webp|png|jpe?g|gif|svg)$/i.test(info)) {
            return 'assets/images/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 1000,
    // Optimize for faster initial paint
    target: 'es2020',
    // Reduce unused CSS
    modulePreload: {
      polyfill: false,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
