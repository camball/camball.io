<script lang="ts">
	import Clock from '../components/Clock.svelte';
	import BinaryTextOverlay from '../components/BinaryTextOverlay.svelte';
	import { Badge } from '$lib/components/ui';
	import { mode } from 'mode-watcher';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<div class="flex h-screen bg-neutral-50 dark:bg-neutral-900">
	<div class="absolute sm:ml-20 sm:mt-20">
		<BinaryTextOverlay text={'discipline'} />
	</div>
	<div
		class="text-shadow absolute m-auto ml-5 space-y-0.5 border-b p-3 pl-0 text-neutral-700 sm:ml-5 sm:text-right sm:text-neutral-900 sm:dark:text-neutral-50"
	>
		<h1 class="mt-20 text-7xl font-bold tracking-tighter sm:text-9xl">camball.io</h1>
		<div class="pl-1 text-lg sm:dark:text-neutral-400">
			<div class="inline-block backdrop-blur sm:backdrop-blur-none">
				<p>is still under development.</p>
				<p>check back soon :)</p>
			</div>
			<div>
				<Clock />
			</div>
		</div>
	</div>
	<img
		src="$lib/assets/sitting-on-couch.jpeg"
		alt="Cameron, sitting on a couch in a tall, well-lit room, wearing a ball cap and crossing one leg over the other, looking out a large window."
		class="object-cover sm:ml-auto sm:py-4 sm:pr-3"
	/>
	<div class="fixed bottom-3 left-3 flex flex-col space-y-1.5">
		<ThemeToggle variant="secondary" />
		<Badge variant="secondary">
			<div class="my-1 flex space-x-2">
				<a href="https://github.com/camball">
					{#if $mode === 'dark'}
						<img src="$lib/assets/github-logo-light.png" alt="GitHub logo" width="25px" />
					{:else}
						<img src="$lib/assets/github-logo-dark.png" alt="GitHub logo" width="25px" />
					{/if}
				</a>
				<a href="https://www.linkedin.com/in/camballl">
					{#if $mode === 'dark'}
						<img src="$lib/assets/linkedin-logo-light.png" alt="LinkedIn logo" width="25px" />
					{:else}
						<img src="$lib/assets/linkedin-logo-dark.png" alt="LinkedIn logo" width="25px" />
					{/if}
				</a>
				<a href="https://www.instagram.com/camballl">
					{#if $mode === 'dark'}
						<img src="$lib/assets/instagram-logo-light.png" alt="Instagram logo" width="25px" />
					{:else}
						<img src="$lib/assets/instagram-logo-dark.png" alt="Instagram logo" width="25px" />
					{/if}
				</a>
			</div>
		</Badge>
	</div>
</div>
