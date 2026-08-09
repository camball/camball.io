import type MdxSvelteComponent from "./MdxSvelteComponent";

export type Article = {
    slug: string;
    metadata: MdxSvelteComponent["metadata"];
};

function slugFromPath(filePath: string): string {
    const filename = filePath.split("/").pop()!;
    return filename.split(".").slice(0, -1).join(".");
}

export async function loadArticles(): Promise<Article[]> {
    const imports = import.meta.glob("../../content/*.mdx");
    const articles: Article[] = [];

    for (const importPath in imports) {
        const articleFile = await (imports[importPath]() as Promise<MdxSvelteComponent>);
        articles.push({
            slug: slugFromPath(importPath),
            metadata: articleFile.metadata,
        });
    }

    return articles.sort(
        (a, b) => new Date(b.metadata.modified).getTime() - new Date(a.metadata.modified).getTime(),
    );
}
