<script>
	import Clock from '../components/Clock.svelte';
	import BinaryTextOverlay from '../components/BinaryTextOverlay.svelte';
</script>

<div class="flex h-screen bg-neutral-50 dark:bg-neutral-900">
	<div class="absolute sm:mt-20 sm:ml-20">
		<BinaryTextOverlay text={'discipline'} />
	</div>
	<div
		class="text-shadow absolute m-auto ml-5 space-y-0.5 border-b p-3 pl-0 text-neutral-700 sm:ml-5 sm:text-right sm:text-neutral-900 sm:dark:text-neutral-50"
	>
		<h1 class="mt-20 pb-1 text-6xl font-bold tracking-tighter sm:text-9xl">blog.camball.io</h1>
		<div class="pl-1 text-lg sm:dark:text-neutral-400">
			<p>is still under development.</p>
			<p>check back soon :)</p>
			<Clock />
		</div>
	</div>
	<img
		src="$lib/assets/sitting-on-couch.jpeg"
		alt="Cameron, sitting on a couch in a tall, well-lit room, wearing a ball cap and crossing one leg over the other, looking out a large window."
		class="object-cover sm:ml-auto sm:py-4 sm:pr-3"
	/>
</div>
