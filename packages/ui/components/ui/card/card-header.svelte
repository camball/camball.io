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
    data-slot="card-header"
    class={cn("flex flex-col gap-1.5 px-6", className)}
    {...restProps}
>
    {@render children?.()}
</div>
