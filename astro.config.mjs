// @ts-check
import solidJs from '@astrojs/solid-js';
import vtbot from 'astro-vtbot';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	//   output: 'server',
	integrations: [solidJs(), vtbot()],

	vite: {
		plugins: [tailwindcss()],
	},
});
