<script lang="ts">
    import dayjs from "dayjs";
    import advancedFormat from "dayjs/plugin/advancedFormat";

    let { created, modified }: { created: string; modified: string } = $props();

    dayjs.extend(advancedFormat);
    const formatDate = (date: Date) => dayjs(date).add(1, "days").format("MMMM Do, YYYY");

    let mode = $state<"initial" | "created" | "modified">("initial");

    const dateMessage = $derived.by(() => {
        const dateCreated = new Date(created);
        const dateModified = new Date(modified);

        if (mode === "modified") {
            return `Last modified ${formatDate(dateModified)}`;
        }

        if (mode === "created") {
            return `Created ${formatDate(dateCreated)}`;
        }

        return formatDate(dateCreated);
    });

    const computeDateMessage = () => {
        mode = mode === "modified" ? "created" : "modified";
    };
</script>

<button onclick={computeDateMessage} class="cursor-pointer">
    {dateMessage}
</button>
