<!-- Had AI scrape the `vaul-svelte` Drawer component source and modify to -->
<!-- create this. The original `vaul-svelte` Drawer captures and restores -->
<!-- scroll position on close, which is undesirable for a table of contents -->
<!-- (the whole point is to change the scroll position to the new heading), -->
<!-- so when implementing the mobile table of contents, the agent copied most -->
<!-- of the functionality of the original component, which works flawlessly. -->
<script lang="ts">
    import { ArrowUp } from "@lucide/svelte";

    import type { TocItem } from "./toc";

    const DURATION_MS = 500;
    const EASE = "cubic-bezier(0.32, 0.72, 0, 1)";
    const CLOSE_RATIO = 0.25;
    const VELOCITY_THRESHOLD = 0.4;

    const dampenValue = (v: number) => 8 * (Math.log(v + 1) - 2);

    interface Props {
        tocItems?: TocItem[];
        open?: boolean;
    }

    let { tocItems = [], open = $bindable(false) }: Props = $props();

    let displayed = $state(false);
    let offsetY = $state(0);
    let isDragging = $state(false);
    let height = $state(0);
    let pointerStartY = 0;
    let dragStartMs = 0;

    $effect(() => {
        if (open) {
            displayed = true;
            isDragging = false;
            offsetY = typeof window === "undefined" ? 0 : -window.innerHeight;
            const frame = requestAnimationFrame(() => {
                offsetY = 0;
            });
            return () => cancelAnimationFrame(frame);
        }

        isDragging = false;
        if (displayed) offsetY = -Math.max(height, 1);
    });

    const close = () => (open = false);

    const motionMs = () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : DURATION_MS;

    const overlayOpacity = $derived(1 - Math.min(1, Math.max(0, -offsetY) / Math.max(height, 1)));

    const onTransformEnd = (event: TransitionEvent) => {
        if (event.propertyName !== "transform" || open) return;
        displayed = false;
    };

    const onPanelPointerDown = (event: PointerEvent) => {
        if (event.button !== 0) return;
        if ((event.target as Element).closest("nav, a, button")) return;
        isDragging = true;
        pointerStartY = event.pageY;
        dragStartMs = Date.now();
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    };

    const onPanelPointerMove = (event: PointerEvent) => {
        if (!isDragging) return;
        const draggedDistance = event.pageY - pointerStartY;
        offsetY = draggedDistance > 0 ? Math.max(0, dampenValue(draggedDistance)) : draggedDistance;
    };

    const onPanelPointerUp = (event: PointerEvent) => {
        if (!isDragging) return;
        isDragging = false;
        const distMoved = pointerStartY - event.pageY;
        const velocity = Math.abs(distMoved) / Math.max(Date.now() - dragStartMs, 1);

        if (distMoved < 0) {
            offsetY = 0;
            return;
        }
        if (velocity > VELOCITY_THRESHOLD || -offsetY >= height * CLOSE_RATIO) close();
        else offsetY = 0;
    };
</script>

<svelte:window
    onkeydown={(event) => {
        if (event.key === "Escape") close();
    }}
/>

{#if displayed}
    <button
        type="button"
        class="fixed inset-0 z-60 backdrop-blur-lg sm:hidden"
        style:opacity={overlayOpacity}
        style:transition={isDragging ? "none" : `opacity ${motionMs()}ms ${EASE}`}
        aria-label="Dismiss table of contents"
        onclick={close}
    ></button>
    <div
        id="mobile-toc"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-toc-title"
        tabindex="-1"
        bind:clientHeight={height}
        class="fixed inset-x-0 top-0 z-60 flex max-h-[80vh] touch-none flex-col gap-5 rounded-b-lg border-b bg-background p-6 font-sans sm:hidden"
        style:transform={`translate3d(0, ${offsetY}px, 0)`}
        style:transition={isDragging ? "none" : `transform ${motionMs()}ms ${EASE}`}
        style:will-change="transform"
        onpointerdown={onPanelPointerDown}
        onpointermove={onPanelPointerMove}
        onpointerup={onPanelPointerUp}
        onpointercancel={onPanelPointerUp}
        ontransitionend={onTransformEnd}
    >
        <div
            class="pointer-events-none absolute inset-x-0 bottom-full h-dvh bg-background"
            aria-hidden="true"
        ></div>
        <p id="mobile-toc-title" class="text-xl font-semibold">Contents</p>
        <nav class="flex touch-pan-y flex-col overflow-y-auto overscroll-contain">
            {#each tocItems as item (item.href)}
                <a
                    href={item.href}
                    class="mb-3 block"
                    style:padding-left={`${(item.level - 2) * 0.75}rem`}
                    onclick={close}
                >
                    {item.label}
                </a>
            {/each}
        </nav>
        <button
            type="button"
            class="self-end p-1"
            aria-label="Close table of contents"
            onclick={close}
        >
            <ArrowUp size="28px" />
        </button>
    </div>
{/if}
