import { loadArticles } from "$lib/articles";
import { escapeXml } from "$lib/xml";
import { SITE_LINKS } from "@camball/ui/shared/site-links";

export const prerender = true;

const SITE_URL = SITE_LINKS["Blog"];
const CHANNEL_TITLE = "Blog – Cameron Ball";
const CHANNEL_DESCRIPTION = "Cameron's writing on software, career, learning, and more.";
const ARTICLE_COUNT_LIMIT = 100;

export async function GET() {
    const articles = await loadArticles();

    const items = articles
        .map((article) => {
            const url = `${SITE_URL}/${article.slug}`;
            const pubDate = new Date(article.metadata.created).toUTCString();

            return `<item>
    <title>${escapeXml(article.metadata.title)}</title>
    <link>${url}</link>
    <description>${escapeXml(article.metadata.description)}</description>
    <pubDate>${pubDate}</pubDate>
    <guid isPermaLink="true">${url}</guid>
  </item>`;
        })
        .slice(0, ARTICLE_COUNT_LIMIT)
        .join("\n  ");

    return new Response(
        `
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(CHANNEL_TITLE)}</title>
  <link>${SITE_URL}</link>
  <description>${escapeXml(CHANNEL_DESCRIPTION)}</description>
  <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
  ${items}
</channel>
</rss>`.trim(),
        {
            headers: {
                "Content-Type": "application/rss+xml; charset=utf-8",
                "Cache-Control": "max-age=0, s-maxage=3600",
            },
        },
    );
}
