<script lang="ts">
    import logoDark from "@camball/ui/assets/cb_logo_dark.svg";
    import logoLight from "@camball/ui/assets/cb_logo_light.svg";
    import { HeaderDrawerContent, Socials, ThemeToggle } from "@camball/ui/components";
    import { Drawer } from "@camball/ui/components/ui";
    import { buttonVariants } from "@camball/ui/components/ui/button";
    import { siteLinksEntries } from "@camball/ui/shared/site-links";
    import { cn } from "@camball/ui/utils";
    import { Menu } from "@lucide/svelte";
    import { mode } from "mode-watcher";

    // Header initially flows with the document from the top to simply scroll off the page.
    // Once it leaves the viewport, it transitions to a fixed overlay, with animation to hide
    // on scroll down and show on scroll up, and a spacer div to smoothly scroll up to, until
    // the header locks back into flowing with the document when we reach the very top again.
    let previousScrollY = 0;
    let isNavigatingViaHashClick = false;
    let isFixedOverlay = $state(false);
    let shouldHideHeader = $state(false);
    let shouldAnimateTransform = $state(false);
    let headerHeight = $state(0);

    const clearHashClickNavigation = () => (isNavigatingViaHashClick = false);

    const onHashAnchorClick = (event: MouseEvent) => {
        const href = (event.target as Element).closest("a[href^='#']")?.getAttribute("href");
        if (!href || href === "#") return;
        isNavigatingViaHashClick = true;
        shouldHideHeader = true; // Can always hide here; don't want to show when clicking a header above *or* below.
        shouldAnimateTransform = false;
        if (window.scrollY > 0) isFixedOverlay = true;
    };

    const onScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) {
            // At the top of the document
            isFixedOverlay = false;
            shouldHideHeader = false;
            shouldAnimateTransform = false;
            clearHashClickNavigation();
        } else if (isNavigatingViaHashClick) {
            // Special case to not show header when navigating up to a heading
            isFixedOverlay = true;
            shouldHideHeader = true;
        } else if (currentScrollY >= headerHeight) {
            // The initial document-flow header is no longer in viewport, so transition to fixed-position overlay mode.
            isFixedOverlay = true;
            shouldHideHeader = currentScrollY > previousScrollY;
            if (!shouldHideHeader) shouldAnimateTransform = true;
        }

        // Track to compare against next time we scroll
        previousScrollY = Math.max(0, currentScrollY);
    };
</script>

<svelte:window onscroll={onScroll} onscrollend={clearHashClickNavigation} />
<svelte:document onclick={onHashAnchorClick} />

<div
    bind:offsetHeight={headerHeight}
    class={[
        "top-0 z-50 w-full bg-stone-100 dark:bg-stone-900",
        isFixedOverlay && "fixed left-0",
        isFixedOverlay && shouldHideHeader && "-translate-y-full",
        shouldAnimateTransform && "transition-transform duration-300",
    ]}
>
    <div class="site-container flex items-center justify-between px-3 py-2 sm:px-4">
        <div class="flex items-center space-x-6">
            <a href="/">
                {#if mode.current === "dark"}
                    <img src={logoLight} alt="Logo Light" class="h-11" />
                {:else}
                    <img src={logoDark} alt="Logo Dark" class="h-11" />
                {/if}
            </a>
            <div
                class="hidden items-center space-x-6 *:transition-all *:ease-in-out *:hover:transition-all *:hover:ease-in-out *:hover:text-shadow-6xl sm:flex"
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
                    <div
                        {...props}
                        class={cn(buttonVariants({ variant: "ghost" }), "p-1 sm:hidden")}
                    >
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
</div>
<!-- If in `isFixedOverlay` mode, add a `headerHeight` spacer so the article doesn't jump. -->
{#if isFixedOverlay}
    <div style="height: {headerHeight}px"></div>
{/if}
