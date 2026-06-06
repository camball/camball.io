<script lang="ts">
    import Header from "../../lib/header.svelte";
    import { Separator } from "$lib/components/ui";
    import { Footer, SiteMeta } from "$lib/components";
    import Tags from "../../components/Tags.svelte";
    import { fade } from "svelte/transition";
    import dayjs from "dayjs";
    import advancedFormat from "dayjs/plugin/advancedFormat";

    import type { PageData } from "./$types";

    interface Props {
        /**
         * Contains the rendered mdx file from `+page.ts`.
         */
        data: PageData;
    }

    let { data }: Props = $props();

    const { title, author, description, created, modified, tags } = data.metadata;

    dayjs.extend(advancedFormat);
    const formatDate = (date: Date) => dayjs(date).add(1, "days").format("MMMM Do, YYYY");

    const dateCreated = new Date(created);
    const dateModified = new Date(modified);

    let dateDisplayed = dateCreated;

    const CREATED = "Created";
    const LAST_MODIFIED = "Last modified";
    let dateMessage = $state(formatDate(dateDisplayed));

    const computeDateMessage = () => {
        if (dateDisplayed === dateCreated) {
            dateDisplayed = dateModified;
            dateMessage = `${LAST_MODIFIED} ${formatDate(dateDisplayed)}`;
        } else {
            dateDisplayed = dateCreated;
            dateMessage = `${CREATED} ${formatDate(dateDisplayed)}`;
        }
    };
</script>

<SiteMeta
    {title}
    {description}
    url={`https://blog.camball.io/${data.slug}`}
    siteName="Blog – Cameron Ball"
    type="article"
    {tags}
/>
<Header />
<header class="mx-5 my-7 space-y-3 font-medium sm:mx-48" id="article-header">
    <Tags {tags} />
    <h1 class="text-4xl">{title}</h1>
    <div class="flex space-x-2">
        <p>By {author}</p>
        <p>•</p>
        <button onclick={computeDateMessage} class="cursor-pointer">
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
