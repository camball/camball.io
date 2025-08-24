<script lang="ts">
    import { Button, Drawer } from "$lib/components/ui";
    import { ArrowUp } from "@lucide/svelte";
    import { Socials } from "$lib/components";
    import { toggleMode, mode } from "mode-watcher";
    import { siteLinksEntries } from "$lib/shared/site-links";
</script>

<Drawer.Content class="flex flex-col items-end gap-5 p-6 font-sans">
    <Socials imageSize="30px" class="space-x-4" />
    <Button onclick={toggleMode} variant="outline">
        {#if mode.current === "dark"}Toggle Light{:else}Toggle Dark{/if}
    </Button>
    {#each siteLinksEntries() as [title, link] (link)}
        <p class="pr-1 text-xl font-semibold">
            <a href={link}>{title}</a>
        </p>
    {/each}
    <Drawer.Close><ArrowUp size="28px" /></Drawer.Close>
</Drawer.Content>
