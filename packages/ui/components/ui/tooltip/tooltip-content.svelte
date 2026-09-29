<script lang="ts">
    import { cn } from "@camball/ui/utils.js";
    import type { WithoutChildrenOrChild } from "@camball/ui/utils.js";
    import { Tooltip as TooltipPrimitive } from "bits-ui";
    import type { ComponentProps } from "svelte";

    import TooltipPortal from "./tooltip-portal.svelte";

    let {
        ref = $bindable(null),
        class: className,
        sideOffset = 0,
        side = "top",
        children,
        portalProps,
        ...restProps
    }: TooltipPrimitive.ContentProps & {
        portalProps?: WithoutChildrenOrChild<ComponentProps<typeof TooltipPortal>>;
    } = $props();
</script>

<TooltipPortal {...portalProps}>
    <TooltipPrimitive.Content
        bind:ref
        data-slot="tooltip-content"
        {sideOffset}
        {side}
        class={cn(
            "z-50 inline-flex w-fit max-w-xs items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm",
            className,
        )}
        {...restProps}
    >
        {@render children?.()}
    </TooltipPrimitive.Content>
</TooltipPortal>
