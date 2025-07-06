<script lang="ts">
    import { Button, Drawer } from "$lib/components/ui";
    import { ArrowUp, Menu } from "@lucide/svelte";
    import { Socials } from "$lib/components";
    import { cn } from "$lib/utils";
    import { toggleMode, mode } from "mode-watcher";
    import { buttonVariants } from "$lib/components/ui/button";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";

    const links = {
        Home: "https://camball.io",
        Blog: "https://blog.camball.io",
        Archive: "https://archive.camball.io",
        // Contact: 'https://contact.camball.io',
        // Resume: 'https://resume.camball.io'
    };
</script>

<Drawer.Root direction="top">
    <Drawer.Trigger>
        {#snippet child({ props })}
            <div
                {...props}
                class={cn(
                    buttonVariants({ variant: "ghost" }),
                    "fixed top-9 right-8 z-50 h-fit border p-1.5 backdrop-blur-xs sm:hidden",
                )}
            >
                <Menu color="#000" size="28" strokeWidth="2.5" class="m-1" />
            </div>
        {/snippet}
    </Drawer.Trigger>
    <Drawer.Content class="flex flex-col items-end gap-5 p-6 font-sans">
        <Socials imageSize="30px" class="space-x-4" />
        <Button onclick={toggleMode} variant="outline">
            {#if mode.current === "dark"}Toggle Light{:else}Toggle Dark{/if}
        </Button>
        {#each Object.entries(links) as [title, link] (link)}
            <p class="pr-1 text-xl font-semibold">
                <a href={link}>{title}</a>
            </p>
        {/each}
        <Drawer.Close><ArrowUp size="28px" /></Drawer.Close>
    </Drawer.Content>
</Drawer.Root>
<div
    class="bg-opacity-80 dark:bg-opacity-80 fixed bottom-6 z-50 mx-4 hidden w-[calc(100vw-2rem)] rounded-2xl bg-white px-7 py-2 font-sans backdrop-blur-[3px] sm:flex sm:items-center sm:justify-between dark:bg-neutral-800"
>
    <div
        class="*:hover:text-shadow-6xl flex items-center space-x-6 *:transition-all *:ease-in-out *:hover:transition-all *:hover:ease-in-out"
    >
        {#if mode.current === "dark"}
            <img src="$lib/assets/cb_logo_light.svg" alt="Logo Light" class="h-10" />
        {:else}
            <img src="$lib/assets/cb_logo_dark.svg" alt="Logo Dark" class="h-10" />
        {/if}
        {#each Object.entries(links) as [title, link] (link)}
            <p class="text-xl font-semibold">
                <a href={link}>{title}</a>
            </p>
        {/each}
    </div>
    <div class="flex items-center space-x-2">
        <ThemeToggle variant="ghost" />
        <Socials imageSize="25px" class="space-x-3" />
    </div>
</div>
