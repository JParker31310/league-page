import { sveltekit } from '@sveltejs/kit/vite';
import { inject } from '@vercel/analytics';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
