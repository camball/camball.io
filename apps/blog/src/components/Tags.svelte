<script lang="ts">
    import { Badge } from "$lib/components/ui";

    interface Props {
        tags: string[];
    }

    let { tags }: Props = $props();
</script>

<div class="space-x-2">
    {#each tags as tag}
        <Badge>
            <!-- TODO: Make tags a link to filtered article list with tag -->
            <p class="pt-[2px] text-sm">{tag}</p>
        </Badge>
    {/each}
</div>
