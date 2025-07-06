<script lang="ts">
    import Header from "../../lib/header.svelte";
    import { Separator } from "$lib/components/ui";
    import { Footer } from "$lib/components";
    import Tags from "../../components/Tags.svelte";
    import { fade } from "svelte/transition";
    import moment from "moment";
    import type { PageData } from "./$types";

    interface Props {
        /**
         * Contains the rendered mdx file from `+page.ts`.
         */
        data: PageData;
    }

    let { data }: Props = $props();

    const { title, author, description, created, modified, tags } = data.metadata;

    const dateCreated = new Date(created);
    const dateModified = new Date(modified);

    let date = dateCreated;

    const CREATED = "Created";
    const LAST_MODIFIED = "Last modified";
    let dateMessage = $state(moment(date).add(1, "days").format("MMMM Do, YYYY"));

    const computeDateMessage = () => {
        if (date === dateCreated) {
            date = dateModified;
            dateMessage = `${LAST_MODIFIED} ${moment(date).add(1, "days").format("MMMM Do, YYYY")}`;
        } else {
            date = dateCreated;
            dateMessage = `${CREATED} ${moment(date).add(1, "days").format("MMMM Do, YYYY")}`;
        }
    };
</script>

<svelte:head>
    <meta property="og:title" content={title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://blog.camball.io/${data.slug}`} />
    <meta property="og:image" content="$lib/assets/sitting-on-couch.jpeg" />
    <meta property="og:site_name" content="Blog – Cameron Ball" />
    <meta property="og:description" content={description} />
    <meta property="article:author" content="https://camball.io" />
    <meta property="article:publisher" content="https://camball.io" />
    {#each tags as tag (tag)}
        <meta property="article:tag" content={tag} />
    {/each}

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="$lib/assets/sitting-on-couch.jpeg" />
    <meta name="twitter:site" content="@camba1l" />
    <meta name="twitter:creator" content="@camba1l" />
</svelte:head>
<Header />
<header class="mx-5 my-7 space-y-3 font-medium sm:mx-48" id="article-header">
    <Tags {tags} />
    <h1 class="text-4xl">{title}</h1>
    <div class="flex space-x-2">
        <p>By {author}</p>
        <p>•</p>
        <button onclick={computeDateMessage}>
            {dateMessage}
        </button>
    </div>
</header>
<Separator />
<div class="mx-5 my-6 sm:mx-48">
    <p class="font-medium">{description}</p>
</div>
<Separator />
<div
    in:fade|global={{ delay: 150, duration: 350 }}
    out:fade|global={{ duration: 100 }}
    class="m-5 mt-7 mb-10 sm:mx-60 sm:flex sm:flex-row"
>
    <data.mdxComponent />
</div>
<Footer />
