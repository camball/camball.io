import { defineConfig } from "oxfmt";

export default defineConfig({
    tabWidth: 4,
    svelte: true,
    sortImports: true,
    sortTailwindcss: {
        stylesheet: "packages/ui/app.css",
        functions: ["clsx", "cn"],
    },
    ignorePatterns: ["pnpm-lock.yaml", "*.mdx"],
    overrides: [
        {
            files: ["*.json", "*.yaml", "*.md"],
            options: {
                tabWidth: 2,
            },
        },
    ],
});
