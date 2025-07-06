<script lang="ts">
    import { mode } from "mode-watcher";
    import { cn } from "$lib/utils";

    let className: string | null | undefined = undefined;
    export { className as class };
    export let imageSize: string;
</script>

<div class={cn("my-1 flex flex-row", className)}>
    <a href="https://github.com/camball">
        {#if $mode === "dark"}
            <img src="$lib/assets/github-logo-light.png" alt="GitHub logo" width={imageSize} />
        {:else}
            <img src="$lib/assets/github-logo-dark.png" alt="GitHub logo" width={imageSize} />
        {/if}
    </a>
    <a href="https://www.linkedin.com/in/camballl">
        {#if $mode === "dark"}
            <img src="$lib/assets/linkedin-logo-light.png" alt="LinkedIn logo" width={imageSize} />
        {:else}
            <img src="$lib/assets/linkedin-logo-dark.png" alt="LinkedIn logo" width={imageSize} />
        {/if}
    </a>
    <a href="https://www.instagram.com/camballl">
        {#if $mode === "dark"}
            <img
                src="$lib/assets/instagram-logo-light.png"
                alt="Instagram logo"
                width={imageSize}
            />
        {:else}
            <img src="$lib/assets/instagram-logo-dark.png" alt="Instagram logo" width={imageSize} />
        {/if}
    </a>
</div>
