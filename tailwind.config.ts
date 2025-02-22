import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			backgroundImage: {
				'gradient-linear': 'linear-gradient(180deg, #F3F6F9 20.31%, #FFF 100%)',
			},
			colors: {
				// primary: '#078DEE',
				// 'primary-content': '#FFF',
				// 'neutral-content': '#919EAB',
				// 'base-300': '#637381',
				// 'base-content': '#212B36',
				// success: '#36B37E',
			},
			fontFamily: {
				geist: ['Geist'],
			},
			animation: {
				'fade-in': 'fade-in 0.3s forwards',
			},
			keyframes: {
				'fade-in': {
					to: { 'background-color': 'rgba(0, 0, 0, 0.25)' },
				},
			},
			boxShadow: {
				block: '0 0 10px rgba(0,0,0,.4)',
				below: '0 3px 5px -2px rgba(0, 0, 0, 0.2)',
				above: '0 -3px 5px -2px rgba(0, 0, 0, 0.2)',
			},
			screens: {
				xs: '480px',
			},
		},
	},
	plugins: [
		require('daisyui'),
		({ addUtilities }: PluginAPI) => {
			addUtilities({
				'.h1': {
					'@apply font-semibold tracking-tight text-2xl': {},
				},
				'.h2': {
					'@apply font-semibold tracking-tight text-lg': {},
				},
				'.flex-center': {
					'@apply flex items-center justify-center': {},
				},
			});
		},
	],
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes').light,
					primary: 'oklch(57% 0.185 251.19)',
					'primary-content': '#FFF',
					'neutral-content': '#919EAB',
					// 'base-100': 'rgb(32, 35, 36)',
					// 'base-300': '#637381',
					// 'base-content': '#212B36',
				},
			},
			{
				dark: {
					...require('daisyui/src/theming/themes').dark,
					primary: 'oklch(57% 0.185 251.19)',
					'base-100': 'rgb(0 0 0)',
					// 'base-100': 'rgb(27, 29, 30)',
					'base-200': '#212529',
					// 'base-200': 'rgb(69, 74, 77)',
					'base-content': 'rgb(237 237 237)',
					// 'base-content': 'rgb(200, 218, 237)',
					'info-content': 'rgb(161 161 161)',
				},
			},
		],
	},
	darkMode: ['selector', '[data-theme="dark"]']
};
export default config;
