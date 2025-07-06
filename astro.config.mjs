// @ts-check
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs()],

	vite: {
		plugins: [tailwindcss()],
	},
});
