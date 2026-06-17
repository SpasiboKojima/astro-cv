// @ts-check
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://andrew-k.vercel.app/',
	integrations: [solidJs()],
	prefetch: true,

	vite: {
		plugins: [tailwindcss()],
	},
	server: {
		allowedHosts: ['floppy-ends-yawn.loca.lt', 'highly-humorous-mongoose.ngrok-free.app'],
	},
});
