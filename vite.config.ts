import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [sveltekit(), tailwindcss()],
    server: {
        fs: {
            // blog content glob + monorepo packages/ui source
            allow: ["content", "../.."],
        },
    },
});
