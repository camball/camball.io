<script lang="ts">
    import "../app.css";
    import "prism-themes/themes/prism-vsc-dark-plus.css";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href="$lib/assets/cb_logo_favicon.svg" />
    <link rel="icon" type="image/png" sizes="16x16" href="$lib/assets/cb_logo_favicon_16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="$lib/assets/cb_logo_favicon_32.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="$lib/assets/cb_logo_favicon_48.png" />
    <link rel="icon" type="image/png" sizes="64x64" href="$lib/assets/cb_logo_favicon_64.png" />
</svelte:head>
<ModeWatcher />
{@render children?.()}
