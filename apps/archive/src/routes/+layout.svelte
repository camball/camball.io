<script lang="ts">
    import "../app.css";
    import { SiteMeta } from "$lib/components";
    import { ModeWatcher } from "mode-watcher";
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

    let { children } = $props();

    injectSpeedInsights();
</script>

<SiteMeta
    title="Archive – Cameron Ball"
    description="Welcome to the archives."
    url="https://archive.camball.io"
/>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href="$lib/assets/cb_logo_favicon.svg" />
    <link rel="icon" type="image/png" sizes="16x16" href="$lib/assets/cb_logo_favicon_16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="$lib/assets/cb_logo_favicon_32.png" />
    <link rel="icon" type="image/png" sizes="48x48" href="$lib/assets/cb_logo_favicon_48.png" />
    <link rel="icon" type="image/png" sizes="64x64" href="$lib/assets/cb_logo_favicon_64.png" />
</svelte:head>
<ModeWatcher />
{@render children?.()}
