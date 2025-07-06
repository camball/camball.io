<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<main class="font-sans sm:basis-3/4">
    <article class="prose dark:prose-invert mr-4 max-w-3xl">
        {@render children?.()}
    </article>
</main>
