<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<main class="font-sans sm:basis-3/4">
    <article class="prose dark:prose-invert max-w-3xl text-pretty">
        {@render children?.()}
    </article>
</main>
