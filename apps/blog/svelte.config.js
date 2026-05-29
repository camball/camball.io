import adapter from "@sveltejs/adapter-vercel";
import { mdsvex } from "mdsvex";
import { importAssets } from "svelte-preprocess-import-assets";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import remarkGfm from "remark-gfm";
import remarkCallout from "@r4ai/remark-callout";
import remarkCalloutFix from "./remark-callout-fix.js";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { join } from "node:path";

const rehypeTocOpts = { position: "beforeend" };

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extension: ".mdx",
    layout: join(import.meta.dirname, "src/layouts/article.svelte"),
    remarkPlugins: [remarkCalloutFix, remarkCallout, remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, [rehypeToc, rehypeTocOpts]],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".mdx"],
    preprocess: [
        // Order matters; `mdsvex` must occur before `vitePreprocess` to turn
        // markdown into pure svelte
        mdsvex(mdsvexConfig),
        vitePreprocess(),
        importAssets(),
    ],
    kit: {
        adapter: adapter(),
        files: {
            lib: "../lib",
        },
    },
};

export default config;
