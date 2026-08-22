import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit(), tailwindcss()],
    build: {
        // Ignore favicons in base64 `data:` URL inlining, as
        // Google does not display `data:` URLs in search results.
        assetsInlineLimit(filePath) {
            if (filePath.includes("cb_logo_favicon")) return false;
        },
    },
    server: {
        fs: {
            // blog content glob + monorepo packages/ui source
            allow: ["content", "../.."],
        },
    },
});
