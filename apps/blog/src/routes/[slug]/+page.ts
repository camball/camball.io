/**
 * This file parses the [slug] pattern provided in the URL path and retrieves
 * the corresponding rendered mdx file from the `content` directory. The result
 * is passed to `+page.svelte`, where it is rendered on the screen.
 */
import { error } from '@sveltejs/kit';
import type MdxSvelteComponent from '../../lib/MdxSvelteComponent';

export const prerender = true;

/** @type {import('./$types.js').PageLoad} */
export async function load({ params }) {
    const imports = import.meta.glob('../../../content/*.mdx');
    const importPath = `../../../content/${params.slug}.mdx`;

    try {
        const mdxSvelteComponent = await (imports[importPath]() as Promise<MdxSvelteComponent>);
        return {
            metadata: mdxSvelteComponent.metadata,
            mdxComponent: mdxSvelteComponent.default
        };
    } catch (e) {
        console.error(e)
        error(404, "Blog article not found")
    }
};