<script lang="ts">
    import Header from "$lib/header.svelte";
    import { captureToc, type TocItem } from "$lib/toc";
    import TocMenu from "$lib/toc-menu.svelte";
    import { Footer, SiteMeta } from "@camball/ui/components";
    import { Separator } from "@camball/ui/components/ui";
    import { fade } from "svelte/transition";

    import ArticleDate from "../../components/ArticleDate.svelte";
    import Tags from "../../components/Tags.svelte";
    import type { PageData } from "./$types";

    interface Props {
        /**
         * Contains the rendered mdx file from `+page.ts`.
         */
        data: PageData;
    }

    let { data }: Props = $props();

    const metadata = $derived(data.metadata);

    // For custom TOC capture on mobile
    let tocItems: TocItem[] = $state([]);
    let tocOpen = $state(false);
    const setTocItems = (items: TocItem[]) => (tocItems = items);
</script>

<SiteMeta
    title={metadata.title}
    description={metadata.description}
    url={`https://blog.camball.io/${data.slug}`}
    siteName="Blog – Cameron Ball"
    type="article"
    tags={metadata.tags}
/>
<Header bind:tocOpen />
<TocMenu {tocItems} bind:open={tocOpen} />
<div class="site-container">
    <header class="mx-5 my-7 space-y-3 font-medium sm:mx-16 md:mx-32 lg:mx-48" id="article-header">
        <Tags tags={metadata.tags} />
        <h1 class="text-4xl">{metadata.title}</h1>
        <div class="flex space-x-2">
            <p>By {metadata.author}</p>
            <p>•</p>
            {#key data.slug}
                <ArticleDate created={metadata.created} modified={metadata.modified} />
            {/key}
        </div>
    </header>
    <Separator />
    <div class="mx-5 my-6 sm:mx-16 md:mx-32 lg:mx-48">
        <p class="font-medium">{metadata.description}</p>
    </div>
    <Separator />
    <div
        {@attach captureToc(setTocItems)}
        in:fade|global={{ delay: 150, duration: 350 }}
        out:fade|global={{ duration: 100 }}
        class="m-5 mt-7 mb-10 min-w-0 sm:mx-16 sm:flex sm:flex-row md:mx-32 lg:mx-60"
    >
        <data.mdxComponent />
    </div>
</div>
<Footer />
