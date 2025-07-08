<script lang="ts">
    import { Header } from "$lib/components";
    import { Carousel } from "$lib/components/ui";

    import InstagramEmbed from "../components/InstagramEmbed.svelte";

    const reelUrls = [
        "https://www.instagram.com/reel/C_KEssYPsD9",
        "https://www.instagram.com/reel/C-si0HiPPSv",
        "https://www.instagram.com/reel/C5mc23yvcI6",
        "https://www.instagram.com/reel/C_g2GBlSnjJ",
        "https://www.instagram.com/reel/C7TQPI4utel",
    ];
</script>

<Header />
<!-- Desktop -->
<div class="screen-height hidden items-center justify-center sm:flex">
    <Carousel.Root class="w-full overflow-y-visible sm:max-w-[326px] lg:max-w-2xl xl:max-w-5xl">
        <Carousel.Content class="space-x-[18px]">
            {#each reelUrls as reelUrl (reelUrl)}
                <div>
                    <Carousel.Item
                        class="visible max-h-[677px] overflow-y-scroll transition-colors hover:bg-neutral-100 lg:basis-1/2 xl:basis-1/3 dark:hover:bg-neutral-800"
                    >
                        <InstagramEmbed url={reelUrl} />
                    </Carousel.Item>
                </div>
            {/each}
            <Carousel.Item
                class="max-h-[677px] max-w-[326px] basis-1/2 overflow-y-scroll transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
                <a href="https://www.instagram.com/cameron_archives" target="_blank">
                    <div
                        class="flex min-h-[677px] w-[326px] items-center justify-center border font-serif"
                    >
                        <p>...see more on <span class="underline">@cameron_archives</span></p>
                    </div>
                </a>
            </Carousel.Item>
        </Carousel.Content>
        <Carousel.Previous class="flex" />
        <Carousel.Next class="flex" />
    </Carousel.Root>
</div>
<!-- Mobile -->
<!-- 326px / 2 => 163px to apply dynamic margin to centre first and last carousel items -->
<div class="screen-height flex w-max items-center space-x-[18px] px-[calc(50vw-163px)] sm:hidden">
    {#each reelUrls as reelUrl (reelUrl)}
        <div class="max-h-[677px] min-w-[326px] basis-1/2 overflow-y-scroll">
            <InstagramEmbed url={reelUrl} />
        </div>
    {/each}
    <div class="max-h-[677px] max-w-[326px] basis-1/2 overflow-y-scroll">
        <a href="https://www.instagram.com/cameron_archives" target="_blank">
            <div class="flex min-h-[677px] w-[326px] items-center justify-center border font-serif">
                <p>...see more on <span class="underline">@cameron_archives</span></p>
            </div>
        </a>
    </div>
</div>
