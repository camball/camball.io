<script lang="ts">
    import "../app.css";
    import "prism-themes/themes/prism-vsc-dark-plus.css";
    import { FaviconLinks } from "@camball/ui/components";
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();

    injectSpeedInsights();
</script>

<FaviconLinks />
<svelte:head>
    <link rel="alternate" type="application/rss+xml" title="Blog – Cameron Ball" href="/rss.xml" />
</svelte:head>
<ModeWatcher />
{@render children?.()}
