<script lang="ts">
    import { Drawer as DrawerPrimitive } from "vaul-svelte";
    import DrawerOverlay from "./drawer-overlay.svelte";
    import { cn } from "$lib/utils.js";

    type $$Props = DrawerPrimitive.ContentProps;

    interface Props {
        class?: $$Props["class"];
        children?: import('svelte').Snippet;
        [key: string]: any
    }

    let { class: className = undefined, children, ...rest }: Props = $props();
    
</script>

<DrawerPrimitive.Portal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
        class={cn(
            "bg-background fixed inset-x-0 top-0 z-50 flex h-auto flex-col items-end rounded-b-[10px] border",
            className,
        )}
        {...rest}
    >
        {@render children?.()}
    </DrawerPrimitive.Content>
</DrawerPrimitive.Portal>
