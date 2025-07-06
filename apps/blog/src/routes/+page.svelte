<script lang="ts">
    import { BinaryTextOverlay, Header } from "$lib/components";
    import { Card, ScrollArea, Separator } from "$lib/components/ui";
    import Tags from "../components/Tags.svelte";
    import moment from "moment";

    let { data } = $props();

    const { articles } = data;

    const getFilenameFromPath = (filePath: string): string | null => {
        const filenameWithExtension = filePath.split("/").pop();
        return filenameWithExtension?.split(".").slice(0, -1).join(".") || null;
    };
</script>

<Header />
<div class="flex h-[100svh] bg-neutral-50 sm:h-screen dark:bg-neutral-900">
    <div class="absolute sm:mt-20 sm:ml-20">
        <BinaryTextOverlay text={"discipline"} />
    </div>
    <div
        class="text-shadow-6xl absolute mx-5 my-3 space-y-4 text-neutral-700 sm:relative sm:mx-7 sm:w-full sm:text-neutral-900 sm:dark:text-neutral-50"
    >
        <h1 class="mt-20 mb-4 font-serif text-6xl font-bold tracking-tighter sm:text-[7rem]/[7rem]">
            𐙚 ࣪ ⟡
            <br />
            blog.camball.io
        </h1>
        <Separator />
        <ScrollArea
            class="mx-1 h-[calc(91vh-17rem)] rounded-md text-lg backdrop-blur-xs sm:float-right sm:h-[calc(85vh-18rem)] sm:max-w-sm sm:text-right"
            scrollbarYClasses="hidden"
        >
            <div class="space-y-2">
                {#each articles as article}
                    <Card.Root class="opacity-90">
                        <a href={getFilenameFromPath(article.filePath)}>
                            <Card.Header class="pb-3">
                                <Card.Title class="font-medium tracking-[0.023em]">
                                    {article.metadata.title}
                                </Card.Title>
                                <Card.Description class="space-y-1">
                                    <p>
                                        {moment(article.metadata.created)
                                            .add(1, "days")
                                            .format("MMMM D, YYYY")}
                                    </p>
                                    <p class="tracking-wide">{article.metadata.description}</p>
                                </Card.Description>
                            </Card.Header>
                            <Card.Content>
                                <Tags tags={article.metadata.tags} />
                            </Card.Content>
                        </a>
                    </Card.Root>
                {/each}
            </div>
        </ScrollArea>
    </div>
    <img
        src="$lib/assets/sitting-on-couch.jpeg"
        alt="Cameron, sitting on a couch in a tall, well-lit room, wearing a ball cap and crossing one leg over the other, looking out a large window."
        class="object-cover sm:ml-auto"
    />
</div>
