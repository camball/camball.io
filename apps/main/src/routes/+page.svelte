<script lang="ts">
	import BinaryTextOverlay from '$lib/components/BinaryTextOverlay.svelte';
	import { Badge, Button, Drawer, Separator } from '$lib/components/ui';
	import { Socials } from '$lib/components';
	import { ArrowUp, Menu } from 'lucide-svelte/icons';
	import { toggleMode, mode } from 'mode-watcher';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const links = {
		Blog: 'https://blog.camball.io'
	};
</script>

<div class="flex h-screen flex-row justify-between bg-neutral-50 dark:bg-neutral-900">
	<div>
		<div class="absolute sm:ml-[5.5rem] sm:mt-20">
			<BinaryTextOverlay text={'discipline'} />
		</div>
		<div
			class="text-shadow absolute m-auto ml-5 mt-20 space-y-3 p-3 pl-0 text-neutral-700 sm:relative sm:ml-7 sm:text-neutral-900 sm:dark:text-neutral-50"
		>
			<h1 class="text-[60px]/[4rem] font-bold tracking-tighter sm:text-[7rem]/[7rem]">
				𐙚 ࣪ ⟡
				<br />
				cameron ball
			</h1>
			<Separator />
			<div
				class="space-y-3 rounded-md bg-black bg-opacity-[0.01] p-2 font-sans text-base font-[500] tracking-[0.02em] backdrop-blur sm:m-1 sm:px-3 sm:py-3 dark:sm:bg-white dark:sm:bg-opacity-[0.01] sm:dark:text-neutral-400"
			>
				<p>Full-stack software engineer based out of Scottsdale, AZ.</p>
				<p>
					Obsessed with design, architecture, and fashion. Avid skier and guitarist. Can unicycle.
					&lt;3
				</p>
			</div>
		</div>
	</div>
	<img
		src="$lib/assets/sitting-on-couch.jpeg"
		alt="Cameron, sitting on a couch in a tall, well-lit room, wearing a ball cap and crossing one leg over the other, looking out a large window."
		class="object-cover"
	/>
</div>
<Drawer.Root direction="top">
	<Drawer.Trigger class="fixed right-8 top-9 sm:hidden">
		<Button variant="ghost" class="dark h-fit border p-1.5 backdrop-blur-sm">
			<Menu color="#000" size="28" strokeWidth="2.5" class="m-1" />
		</Button>
	</Drawer.Trigger>
	<!-- TODO: use Overlay instead of modifying the default drawer implementation -->
	<!-- <Drawer.Overlay class="fixed inset-0 bg-black/40" /> -->
	<Drawer.Content class="space-y-5 p-6 font-sans">
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
	class="fixed bottom-6 mx-4 hidden w-[calc(100vw-2rem)] rounded-2xl bg-white bg-opacity-80 px-7 py-2 font-sans backdrop-blur-[3px] dark:bg-neutral-800 dark:bg-opacity-80 sm:flex sm:items-center sm:justify-between"
>
	<div
		class="hover:[&>*]:text-shadow flex items-center space-x-6 [&>*]:transition-all [&>*]:ease-in-out hover:[&>*]:transition-all hover:[&>*]:ease-in-out"
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
