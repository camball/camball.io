<script lang="ts">
    import "../app.css";
    import { FaviconLinks, SiteMeta } from "@camball/ui/components";
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();

    injectSpeedInsights();
</script>

<SiteMeta
    title="Archive – Cameron Ball"
    description="Welcome to the archives."
    url="https://archive.camball.io"
/>

<FaviconLinks />
<ModeWatcher />
{@render children?.()}
