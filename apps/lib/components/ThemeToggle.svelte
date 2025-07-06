<script lang="ts">
    import { Button } from "./ui";
    import { Moon, Sun } from "lucide-svelte/icons";
    import { toggleMode } from "mode-watcher";

    let { variant } = $props();
</script>

<Button on:click={toggleMode} {variant} size="icon">
    <Sun
        class="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
    />
    <Moon
        class="h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
    />
    <span class="sr-only">Toggle theme</span>
</Button>
