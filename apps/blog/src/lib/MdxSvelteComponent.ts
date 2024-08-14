import type { ComponentType } from 'svelte';

export default interface MdxSvelteComponent {
    default: ComponentType;
    metadata: {
        title: string,
        tags: Array<string>,
        author: string,
        created: string,
        modified: string,
    }
}