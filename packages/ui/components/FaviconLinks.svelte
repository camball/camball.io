<script lang="ts">
    // Dynamic hrefs avoid Vite 8 rewriting static link URLs into `?import` modules.
    const faviconSvg = "/favicon.svg";
    const favicon192 = "/favicon.png";
    const favicon16 = "/favicon-16.png";
    const favicon32 = "/favicon-32.png";
    const favicon48 = "/favicon-48.png";
    const favicon64 = "/favicon-64.png";
    const favicon180 = "/favicon-180.png";
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href={faviconSvg} />
    <link rel="icon" type="image/png" sizes="192x192" href={favicon192} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="48x48" href={favicon48} />
    <link rel="icon" type="image/png" sizes="64x64" href={favicon64} />
    <link rel="apple-touch-icon" type="image/png" sizes="180x180" href={favicon180} />
</svelte:head>
