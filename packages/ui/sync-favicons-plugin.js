/**
 * Custom Vite plugin to copy favicons to each repo in the monorepo at build time.
 */
// @ts-nocheck
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const FAVICON_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "assets/favicon");

/** @type {readonly string[]} */
export const FAVICON_FILES = [
    "favicon.svg",
    "favicon.png",
    "favicon-16.png",
    "favicon-32.png",
    "favicon-48.png",
    "favicon-64.png",
    "favicon-180.png",
];

/** @param {string} staticDir */
export function copyFaviconsToStatic(staticDir) {
    fs.mkdirSync(staticDir, { recursive: true });
    for (const file of FAVICON_FILES) {
        fs.copyFileSync(path.join(FAVICON_DIR, file), path.join(staticDir, file));
    }
}

export function faviconPlugin() {
    return {
        name: "camball-favicons",
        configResolved(/** @type {{ root: string }} */ config) {
            copyFaviconsToStatic(path.join(config.root, "static"));
        },
    };
}
