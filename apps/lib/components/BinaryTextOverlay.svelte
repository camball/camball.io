<script lang="ts">
    import { onMount } from "svelte";

    interface Props {
        text?: string;
    }

    let { text = "" }: Props = $props();

    const sparkle = () =>
        document.querySelectorAll(".sparkle").forEach((element) => {
            (element as HTMLElement).style.opacity = Math.random().toString();
        });

    onMount(() => setInterval(sparkle, 2000));
</script>

<div class="binary-text-overlay sm:binary-text-overlay-lg">
    <!-- grid-cols-8 corresponds to 8 bits in a byte -->
    <div
        class="grid grid-cols-8 gap-x-9 gap-y-5 pl-1 font-serif text-4xl tracking-widest text-neutral-700 sm:gap-1.5 sm:pl-0 sm:text-neutral-900 sm:dark:text-neutral-500"
    >
        {#each text
            .split("")
            .map((letter) => letter
                    .charCodeAt(0)
                    .toString(2)
                    .padStart(8, "0")
                    .split("")) as eightBitArray, i (i)}
            {#each eightBitArray as bit, j (j)}
                <span class="sparkle transition-opacity duration-[700ms] ease-linear">{bit}</span>
            {/each}
        {/each}
    </div>
</div>
