/**
 * This file loads metadata and filenames for all blog articles in the `content` directory.
 */
import type MdxSvelteComponent from '../lib/MdxSvelteComponent';

export const prerender = true;

/** @type {import('./$types.js').PageLoad} */
export async function load() {
    const imports = import.meta.glob('../../content/*.mdx');
    const fileMetadata = [];

    try {
        for (let importPath in imports) {
            const articleFile = await (imports[importPath]() as Promise<MdxSvelteComponent>);
            fileMetadata.push({
                filePath: importPath,
                metadata: articleFile.metadata,
            });
        }
    } catch (e) {
        console.error('Could not find article')
    }

    return {
        articles: fileMetadata
    };
};