import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://cogintech-ai.com',
  
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    compress({
      CSS: true,
      HTML: {
        'remove-tags': ['title'],
        'remove-comments': true,
        'remove-attribute-quotes': false,
      },
      Image: false,
      JavaScript: true,
      SVG: false,
    }),
  ],

  // Настройки сборки
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },

  // Настройки для разработки
  server: {
    port: 3000,
    host: true,
  },

  // Настройки SEO и производительности
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  // Обработка изображений
  image: {
    domains: ['cogintech-ai.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cogintech-ai.com',
      },
    ],
  },

  // Настройки TypeScript
  typescript: {
    strict: true,
  },

  // Настройки Vite
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
  },

  // Настройки для экспериментальных функций
  experimental: {
    contentCollectionCache: true,
  },
});