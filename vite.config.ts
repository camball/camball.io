import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [sveltekit(), tailwindcss()],
    server: {
        fs: {
            // blog content glob + monorepo packages/ui source
            allow: ["content", "../.."],
        },
    },
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
});
