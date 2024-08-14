<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let previousScrollPosition = 0;
	let header: HTMLDivElement, spacer: HTMLDivElement;

	const handleScroll = () => {
		const scrollPosition = window.scrollY || document.documentElement.scrollTop;
		if (scrollPosition <= 0) {
			// when scroll position returns to very top, use relative positioning
			spacer.classList.add('hidden');
			header.classList.remove('fixed');
			header.classList.remove('transition-transform', 'duration-300');
		} else if (scrollPosition > header.offsetHeight) {
			// when scroll position goes past header height, apply animation
			spacer.classList.remove('hidden');
			if (scrollPosition > previousScrollPosition) {
				header.classList.add('fixed');
				header.classList.add('-translate-y-full'); // on scroll down
			} else {
				header.classList.add('transition-transform', 'duration-300');
				header.classList.remove('-translate-y-full'); // on scroll up
			}
		}
		previousScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div
	bind:this={header}
	class="left-0 top-0 z-50 flex w-full items-center justify-between bg-stone-100 p-3 dark:bg-stone-900"
>
	<div>
		<!-- TODO: Put logo here -->
		<p class="tracking-wide">
			<a href="/">blog.camball.io</a>
		</p>
	</div>
	<ThemeToggle variant="outline" />
</div>
<div bind:this={spacer} class="left-0 top-0 hidden h-16 w-full" />
