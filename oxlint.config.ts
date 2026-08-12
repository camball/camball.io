import { defineConfig } from "oxlint";

export default defineConfig({
    plugins: ["eslint", "typescript", "unicorn", "oxc", "vitest"],
    categories: {
        correctness: "error",
    },
    rules: {},
    options: {
        typeAware: true,
    },
});
