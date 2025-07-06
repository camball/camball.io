<script lang="ts">
    // See my GitHub issue for why we are using our own instead of the package's
    // https://github.com/Schum123/svelte-loading-spinners/issues/59

    import type { SpinnerTypes } from "./types/spinner.type";
    import { range, durationUnitRegex } from "./utils";
    interface Props {
        color?: SpinnerTypes["color"];
        unit?: SpinnerTypes["unit"];
        duration?: SpinnerTypes["duration"];
        size?: SpinnerTypes["size"];
        pause?: SpinnerTypes["pause"];
    }

    let {
        color = "#FF3E00",
        unit = "px",
        duration = "2.5s",
        size = "60",
        pause = false,
    }: Props = $props();
    let durationUnit: string = duration.match(durationUnitRegex)?.[0] ?? "s";
    let durationNum: string = duration.replace(durationUnitRegex, "");
</script>

<div
    class="wrapper"
    style="--size: {size}{unit}; --color: {color}; --motionOne: {-size /
        5}{unit}; --motionTwo: {+size / 4}{unit}; --motionThree: {-size /
        5}{unit}; --duration: {duration};"
>
    {#each range(6, 0) as version}
        <div
            class="circle"
            class:pause-animation={pause}
            style="animation-delay: {version * (+durationNum / 25)}{durationUnit}; width: {version *
                (+size / 6) +
                unit}; height: {(version * (+size / 6)) / 2 + unit}; "
        ></div>
    {/each}
</div>

<style>
    .wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--size);
        height: var(--size);
    }

    /* The following classname was renamed from `ring` to `circle` to avoid conflict with Tailwind */
    .circle {
        position: absolute;
        border: 2px solid var(--color);
        border-radius: 50%;
        background-color: transparent;
        animation: motion var(--duration) ease infinite;
    }
    .pause-animation {
        animation-play-state: paused;
    }
    @keyframes motion {
        0% {
            transform: translateY(var(--motionOne));
        }
        50% {
            transform: translateY(var(--motionTwo));
        }
        100% {
            transform: translateY(var(--motionThree));
        }
    }
</style>
