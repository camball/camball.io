<script lang="ts">
    import { onMount } from "svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import { mode } from "mode-watcher";

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
    class="top-0 left-0 z-50 flex w-full items-center justify-between bg-stone-100 px-3 py-2 dark:bg-stone-900"
>
    <a href="/">
        {#if mode.current === "dark"}
            <img src="$lib/assets/cb_logo_light.svg" alt="Logo Light" class="h-11" />
        {:else}
            <img src="$lib/assets/cb_logo_dark.svg" alt="Logo Dark" class="h-11" />
        {/if}
    </a>
    <ThemeToggle variant="outline" />
</div>
<div bind:this={spacer} class="top-0 left-0 hidden h-16 w-full"></div>
