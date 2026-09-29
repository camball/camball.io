import { mount, unmount } from "svelte";
import type { Attachment } from "svelte/attachments";

import Footnote from "../components/Footnote.svelte";

function footnoteHtml(def: Element): string {
    const clone = def.cloneNode(true) as Element;
    clone.querySelectorAll(".footnote-backref").forEach((el) => el.remove());
    return clone.innerHTML.trim();
}

/** Replaces remark footnote ref links with tooltip triggers that preview the note. */
export function mountFootnoteTooltips(): Attachment<HTMLElement> {
    return (article) => {
        const instances: ReturnType<typeof mount>[] = [];

        article.querySelectorAll("a.footnote-ref").forEach((link) => {
            const href = link.getAttribute("href");
            if (!href?.startsWith("#")) return;

            const def = article.querySelector(href);
            if (!def) return;

            const sup = link.parentElement;
            if (!sup || sup.tagName !== "SUP") return;

            const noteHtml = footnoteHtml(def);
            const label = link.textContent?.trim() ?? "";
            link.remove();

            instances.push(
                mount(Footnote, {
                    target: sup,
                    props: { href, label, noteHtml },
                }),
            );
        });

        return () => {
            for (const instance of instances) void unmount(instance);
        };
    };
}
