<script lang="ts">
    import { type WithElementRef } from "@camball/ui/utils";
    import type { HTMLAttributes } from "svelte/elements";
    import { cn } from "tailwind-variants";

    let {
        ref = $bindable(null),
        class: className,
        children,
        ...restProps
    }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
    bind:this={ref}
    data-slot="card-description"
    class={cn("text-sm text-muted-foreground", className)}
    {...restProps}
>
    {@render children?.()}
</div>
