// @ts-check
import partytown from '@astrojs/partytown';
import solidJs from '@astrojs/solid-js';
import vtbot from 'astro-vtbot';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  experimental: {
      svg: true,
	},

  //   output: 'server',
  integrations: [solidJs(), vtbot(), partytown()],

  vite: {
    plugins: [tailwindcss()],
  },
});