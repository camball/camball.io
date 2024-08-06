<script>
	import { onMount } from 'svelte';
	let time = new Date().toLocaleTimeString();

	let updateTime = () => (time = new Date().toLocaleTimeString());

	onMount(() => {
		const interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	});
</script>

<p class="float-right text-2xl backdrop-blur sm:backdrop-blur-none">{time}</p>
