// @ts-check
import partytown from '@astrojs/partytown';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import vtbot from 'astro-vtbot';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	experimental: {
		svg: true,
	},
	//   output: 'server',
	integrations: [solidJs(), vtbot(), tailwind(), partytown()],
});
