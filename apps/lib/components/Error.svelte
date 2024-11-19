<script lang="ts">
	import { page } from '$app/stores';
	import { Separator } from '$lib/components/ui';
	import { House } from 'lucide-svelte/icons';
</script>

<div class="grid h-screen font-sans sm:grid-cols-3">
	<div class="col-span-2 content-center bg-neutral-900 px-14 text-stone-100 sm:px-40">
		<h1 class="text-7xl font-bold">{$page.status}</h1>
		<span class="mt-1 block text-2xl">{$page.error?.message}</span>
		{#if String($page.status).startsWith('4')}
			<a class="mt-3 block" href="/">
				<House class="dark:invert-0" />
			</a>
		{/if}
		<Separator class="mt-5 bg-neutral-50" />
	</div>
</div>
