<script lang="ts">
    import "../app.css";
    import { FaviconLinks, SiteMeta } from "@camball/ui/components";
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();

    injectSpeedInsights();
</script>

<SiteMeta
    title="Resume – Cameron Ball"
    description="Curriculum vitae of Cameron Ball."
    url="https://resume.camball.io"
/>

<FaviconLinks />
<ModeWatcher />
{@render children?.()}
