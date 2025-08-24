<script lang="ts">
    import { onMount } from "svelte";
    import { Menu } from "@lucide/svelte";
    import { mode } from "mode-watcher";
    import { Drawer } from "$lib/components/ui";
    import { cn } from "$lib/utils";
    import { buttonVariants } from "$lib/components/ui/button";
    import { siteLinksEntries } from "$lib/shared/site-links";
    import { HeaderDrawerContent, Socials, ThemeToggle } from "$lib/components";

    let previousScrollPosition = 0;
    let header: HTMLDivElement | undefined = $state();
    let spacer: HTMLDivElement | undefined = $state();

    const handleScroll = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition <= 0) {
            // when scroll position returns to very top, use relative positioning
            spacer?.classList.add("hidden");
            header?.classList.remove("fixed");
            header?.classList.remove("transition-transform", "duration-300");
        } else if (scrollPosition > (header?.offsetHeight ?? 0)) {
            // when scroll position goes past header height, apply animation
            spacer?.classList.remove("hidden");
            if (scrollPosition > previousScrollPosition) {
                header?.classList.add("fixed");
                header?.classList.add("-translate-y-full"); // on scroll down
            } else {
                header?.classList.add("transition-transform", "duration-300");
                header?.classList.remove("-translate-y-full"); // on scroll up
            }
        }
        previousScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<div
    bind:this={header}
    class="top-0 left-0 z-50 flex w-full items-center justify-between bg-stone-100 px-3 py-2 sm:px-4 dark:bg-stone-900"
>
    <div class="flex items-center space-x-6">
        <a href="/">
            {#if mode.current === "dark"}
                <img src="$lib/assets/cb_logo_light.svg" alt="Logo Light" class="h-11" />
            {:else}
                <img src="$lib/assets/cb_logo_dark.svg" alt="Logo Dark" class="h-11" />
            {/if}
        </a>
        <div
            class="*:hover:text-shadow-6xl hidden items-center space-x-6 *:transition-all *:ease-in-out *:hover:transition-all *:hover:ease-in-out sm:flex"
        >
            {#each siteLinksEntries() as [title, link] (link)}
                <p class="text-xl font-semibold">
                    <a href={link}>{title}</a>
                </p>
            {/each}
        </div>
    </div>
    <div class="hidden items-center space-x-2 px-2 sm:flex">
        <ThemeToggle variant="ghost" />
        <Socials imageSize="25px" class="space-x-3" />
    </div>

    <Drawer.Root direction="top">
        <Drawer.Trigger>
            {#snippet child({ props })}
                <div {...props} class={cn(buttonVariants({ variant: "ghost" }), "p-1 sm:hidden")}>
                    <Menu
                        color={mode.current === "dark" ? "#EEE" : "#111"}
                        size="28"
                        strokeWidth="2.5"
                        class="m-1"
                    />
                </div>
            {/snippet}
        </Drawer.Trigger>
        <HeaderDrawerContent />
    </Drawer.Root>
</div>
<div bind:this={spacer} class="top-0 left-0 hidden h-16 w-full"></div>
