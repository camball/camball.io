<script lang="ts">
    import "../app.css";
    import { FaviconLinks, SiteMeta } from "@camball/ui/components";
    import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();

    injectSpeedInsights();
</script>

<SiteMeta
    title="Contact – Cameron Ball"
    description="Get in touch :)"
    url="https://contact.camball.io"
/>

<FaviconLinks />
<ModeWatcher />
{@render children?.()}
