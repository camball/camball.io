<script lang="ts">
    interface Props {
        children?: import("svelte").Snippet;
    }

    let { children }: Props = $props();
</script>

<main class="min-w-0 font-sans sm:basis-3/4">
    <article class="prose dark:prose-invert w-full max-w-3xl min-w-0 text-pretty">
        {@render children?.()}
    </article>
</main>
