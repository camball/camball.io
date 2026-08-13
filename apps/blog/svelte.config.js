import { join } from "node:path";

import remarkCallout from "@r4ai/remark-callout";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import remarkFootnotes from "remark-footnotes";
import remarkGfm from "remark-gfm";
import { importAssets } from "svelte-preprocess-import-assets";

import remarkCalloutFix from "./remark-callout-fix.js";

const rehypeTocOpts = { position: "beforeend" };
const rehypeAutoLinkHeadingsOpts = { behavior: "append" };

// `remark-footnotes` pinned to v2 only, as v3+ uses micromark and
// won't hook into mdsvex's remark-parse v8.
// TODO: Move away from mdsvex, as it hasn't had an update for a year+
// TODO: and is the root of many issues with TOC and callouts.
const remarkFootnotesOpts = { inlineNotes: true };

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extension: ".mdx",
    layout: join(import.meta.dirname, "src/layouts/article.svelte"),
    remarkPlugins: [
        remarkCalloutFix,
        remarkCallout,
        [remarkFootnotes, remarkFootnotesOpts],
        remarkGfm,
    ],
    rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, rehypeAutoLinkHeadingsOpts],
        [rehypeToc, rehypeTocOpts],
    ],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".mdx"],
    preprocess: [
        // Order matters; `mdsvex` must occur before `vitePreprocess` to turn
        // markdown into pure Svelte. `importAssets` resolves relative MDX images.
        mdsvex(mdsvexConfig),
        vitePreprocess(),
        importAssets(),
    ],
    kit: {
        adapter: adapter(),
    },
};

export default config;
