import { loadArticles } from "$lib/articles";
import { SITE_LINKS } from "@camball/ui/shared/site-links";

export const prerender = true;

const SITE_URL = SITE_LINKS["Blog"];

export async function GET() {
    const articles = await loadArticles();

    const urls = [
        `<url>
    <loc>${SITE_URL}/</loc>
  </url>`,
        ...articles.map((article) => {
            const lastmod = new Date(article.metadata.modified).toISOString().slice(0, 10);
            return `<url>
    <loc>${SITE_URL}/${article.slug}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
        }),
    ].join("\n  ");

    return new Response(
        `
<?xml version="1.0" encoding="UTF-8" ?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
  ${urls}
</urlset>`.trim(),
        {
            headers: {
                "Content-Type": "application/xml; charset=utf-8",
                "Cache-Control": "max-age=0, s-maxage=3600",
            },
        },
    );
}
