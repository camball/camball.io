<script lang="ts">
    import { Tooltip } from "@camball/ui/components/ui";

    interface Props {
        href: string;
        label: string;
        noteHtml: string;
    }

    let { href, label, noteHtml }: Props = $props();
</script>

<Tooltip.Root>
    <Tooltip.Trigger>
        {#snippet child({ props }: { props: Record<string, unknown> })}
            <a {...props} {href} class="footnote-ref">{label}</a>
        {/snippet}
    </Tooltip.Trigger>
    <Tooltip.Content
        side="top"
        class="footnote-tooltip border bg-background/70 text-foreground shadow-sm backdrop-blur-[3px]"
    >
        <div class="footnote-tooltip-body prose prose-sm dark:prose-invert">
            {@html noteHtml}
        </div>
    </Tooltip.Content>
</Tooltip.Root>
