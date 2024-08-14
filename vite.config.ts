import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['content'] // allow blog content directory glob import
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
});
