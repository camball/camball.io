/**
 * This file loads metadata and filenames for all blog articles in the `content` directory.
 */
import { loadArticles } from "$lib/articles";

export const prerender = true;

/** @type {import('./$types.js').PageLoad} */
export async function load() {
    return {
        articles: await loadArticles(),
    };
}
