<script lang="ts">
    import "../app.css";
    import "prism-themes/themes/prism-vsc-dark-plus.css";
    import { ModeWatcher } from "mode-watcher";
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import favicon from "@camball/ui/assets/cb_logo_favicon.svg";
    import favicon16 from "@camball/ui/assets/cb_logo_favicon_16.png";
    import favicon32 from "@camball/ui/assets/cb_logo_favicon_32.png";
    import favicon48 from "@camball/ui/assets/cb_logo_favicon_48.png";
    import favicon64 from "@camball/ui/assets/cb_logo_favicon_64.png";

    let { children } = $props();

    injectSpeedInsights();
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href={favicon} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="48x48" href={favicon48} />
    <link rel="icon" type="image/png" sizes="64x64" href={favicon64} />
</svelte:head>
<ModeWatcher />
{@render children?.()}
