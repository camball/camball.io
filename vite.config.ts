import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

import { faviconPlugin } from "./packages/ui/sync-favicons-plugin.js";

export default defineConfig({
    plugins: [faviconPlugin(), sveltekit(), tailwindcss()],
    server: {
        fs: {
            // blog content glob + monorepo packages/ui source
            allow: ["content", "../.."],
        },
    },
});
