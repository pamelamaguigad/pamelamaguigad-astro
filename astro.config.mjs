// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      name: 'Rousie',
      provider: fontProviders.local(), // Recommended Astro built-in helper
      cssVariable: '--font-rousie',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/fonts/rousie.woff2'],
            weight: '400',
            style: 'normal',
          },
        ],
      },
    }
  ]
});