# camball.io

[`camball.io`](https://camball.io) — My personal website :)

Supports...

- My engineering blog ([`blog.camball.io`](https://blog.camball.io))
- A showcase of my guitar-playing endeavours ([`archive.camball.io`](https://archive.camball.io))
- ...more to follow soon

## 📚 Tech Stack & Credits

- [Svelte/SvelteKit](https://svelte.dev) and [Vite](https://vitejs.dev)
- [shadcn-svelte](https://www.shadcn-svelte.com) Components, modified as needed
- [Lucide](https://lucide.dev) Icons
- [TailwindCSS](https://tailwindcss.com) for Styling
- Blog
  - [mdsvex](https://mdsvex.pngwn.io) for markdown rendering (and svelte [mdx](https://mdxjs.com) support)
  - [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography) for content styling
  - [prism-themes](https://github.com/prismjs/prism-themes) for syntax highlighting
  - [remark-gfm](https://github.com/remarkjs/remark-gfm) for GFM (GitHub Flavored Markdown) support
  - [rehype-slug](https://github.com/rehypejs/rehype-slug) for auto-adding `id`s to headings
  - [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings) for auto-adding anchor tags to headings
  - [rehype-toc](https://github.com/JS-DevTools/rehype-toc) for auto-generating a table of contents
- Deployed on [Vercel](https://vercel.com/home)
- Registered the `camball.io` domain with [Cloudflare Registrar](https://www.cloudflare.com/en-gb/products/registrar/)

There's currently no back end for this project.

## 🗓️ Roadmap

See the [`camball.io` GitHub Project](https://github.com/users/camball/projects/1) for planned features and what's currently in-progress.

## Installation and Running

```sh
# Install
npm ci

# Run the main site (`camball.io`)
npm run dev:main

# Run the blog (`blog.camball.io`)
npm run dev:blog
```
