import type { Attachment } from "svelte/attachments";

export type TocItem = {
    href: string;
    label: string;
    level: number;
};

/** Reads heading links from the rehype-generated desktop TOC into mobile menu items. */
export function tocItemsFromElement(toc: Element | null): TocItem[] {
    if (!toc) return [];

    return [...toc.querySelectorAll<HTMLAnchorElement>("a.toc-link")].flatMap((anchor) => {
        const href = anchor.getAttribute("href");
        const label = anchor.textContent?.trim();
        if (!href || !label) return [];

        const levelMatch = /toc-link-h(\d)/.exec(anchor.className);
        return [{ href, label, level: levelMatch ? Number(levelMatch[1]) : 2 }];
    });
}

/** Watches the article for the appearance of a `nav.toc` element and keeps mobile TOC state in sync. */
export function captureToc(setItems: (items: TocItem[]) => void): Attachment<HTMLElement> {
    return (node) => {
        const update = () => setItems(tocItemsFromElement(node.querySelector("nav.toc")));
        update();
        const observer = new MutationObserver(update);
        observer.observe(node, { childList: true, subtree: true });
        return () => observer.disconnect();
    };
}
