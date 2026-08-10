const RESERVED = new Set(["rss.xml", "sitemap.xml"]);

/** @satisfies {import('@sveltejs/kit').ParamMatcher} */
export function match(param: string) {
    if (RESERVED.has(param)) return false;
    return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(param);
}
