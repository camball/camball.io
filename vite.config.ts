import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server: {
		fs: {
			allow: ['content'] // allow blog content directory glob import
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
});
