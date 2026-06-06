<script lang="ts">
    interface SiteMetaProps {
        title: string;
        description: string;
        url: string;
        siteName?: string;
        type?: "website" | "article";
        tags?: string[];
    }

    let {
        title,
        description,
        url,
        siteName = "Cameron Ball",
        type = "website",
        tags = [],
    }: SiteMetaProps = $props();
</script>

<svelte:head>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content="$lib/assets/sitting-on-couch.jpeg" />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:description" content={description} />
    {#if type === "article"}
        <meta property="article:author" content="https://camball.io" />
        <meta property="article:publisher" content="https://camball.io" />
        {#each tags as tag (tag)}
            <meta property="article:tag" content={tag} />
        {/each}
    {/if}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="$lib/assets/sitting-on-couch.jpeg" />
    <meta name="twitter:site" content="@camba1l" />
    <meta name="twitter:creator" content="@camba1l" />
</svelte:head>
