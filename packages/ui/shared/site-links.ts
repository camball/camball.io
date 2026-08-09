export const SITE_LINKS: Readonly<Record<string, string>> = {
    Home: "https://camball.io",
    Blog: "https://blog.camball.io",
    Archive: "https://archive.camball.io",
    // Contact: 'https://contact.camball.io',
    // Resume: 'https://resume.camball.io'
} as const;

export const siteLinksEntries = () => Object.entries(SITE_LINKS);
