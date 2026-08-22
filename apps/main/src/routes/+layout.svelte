<script lang="ts">
    import "../app.css";
    import { FaviconLinks, SiteMeta } from "@camball/ui/components";
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();

    injectSpeedInsights();
</script>

<SiteMeta
    title="Cameron Ball"
    description="Software engineer based out of Phoenix, AZ. Obsessed with design, architecture, and fashion."
    url="https://camball.io"
/>

<FaviconLinks />
<ModeWatcher />
{@render children?.()}
