<script lang="ts">
	import { Button, Drawer } from '$lib/components/ui';
	import { ArrowUp, Menu } from 'lucide-svelte/icons';
	import { Socials } from '$lib/components';
	import { toggleMode, mode } from 'mode-watcher';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const links = {
		Home: 'https://camball.io',
		Blog: 'https://blog.camball.io',
		Archive: 'https://archive.camball.io'
		// Contact: 'https://contact.camball.io',
		// Resume: 'https://resume.camball.io'
	};
</script>

<Drawer.Root direction="top">
	<Drawer.Trigger class="fixed top-9 right-8 z-50 sm:hidden">
		<Button variant="ghost" class="dark h-fit border p-1.5 backdrop-blur-xs">
			<Menu color="#000" size="28" strokeWidth="2.5" class="m-1" />
		</Button>
	</Drawer.Trigger>
	<!-- TODO: use Overlay instead of modifying the default drawer implementation -->
	<!-- <Drawer.Overlay class="fixed inset-0 bg-black/40" /> -->
	<Drawer.Content class="flex flex-col gap-5 p-6 font-sans">
		<Socials imageSize="30px" class="space-x-4" />
		<Button on:click={toggleMode} variant="outline">
			{#if $mode === 'dark'}Toggle Light{:else}Toggle Dark{/if}
		</Button>
		{#each Object.entries(links) as [title, link]}
			<p class="pr-1 text-xl font-semibold">
				<a href={link}>{title}</a>
			</p>
		{/each}
		<Drawer.Close><ArrowUp size="28px" /></Drawer.Close>
	</Drawer.Content>
</Drawer.Root>
<div
	class="bg-opacity-80 dark:bg-opacity-80 fixed bottom-6 z-50 mx-4 hidden w-[calc(100vw-2rem)] rounded-2xl bg-white px-7 py-2 font-sans backdrop-blur-[3px] sm:flex sm:items-center sm:justify-between dark:bg-neutral-800"
>
	<div
		class="*:hover:text-shadow-6xl flex items-center space-x-6 *:transition-all *:ease-in-out *:hover:transition-all *:hover:ease-in-out"
	>
		<!-- TODO: Logo goes here -->
		<p class="font-serif">camball.io</p>
		{#each Object.entries(links) as [title, link]}
			<p class="text-xl font-semibold">
				<a href={link}>{title}</a>
			</p>
		{/each}
	</div>
	<div class="flex items-center space-x-2">
		<ThemeToggle variant="ghost" />
		<Socials imageSize="25px" class="space-x-3" />
	</div>
</div>
