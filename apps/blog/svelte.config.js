import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { importAssets } from 'svelte-preprocess-import-assets';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import rehypeWidont from 'rehype-widont';
import remarkGfm from 'remark-gfm';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const rehypeTocOpts = { position: 'beforeend' };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.mdx'],
	preprocess: [
		// Order matters; `mdsvex` must occur before `vitePreprocess` to turn
		// markdown into pure svelte
		mdsvex({
			extension: '.mdx',
			layout: "src/layouts/article.svelte",
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeWidont, [rehypeToc, rehypeTocOpts]]
		}),
		vitePreprocess(),
		importAssets(),
	],
	kit: {
		adapter: adapter(),
		files: {
			lib: '../lib'
		},
	}
};

export default config;
