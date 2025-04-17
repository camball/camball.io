<script lang="ts">
	import { BinaryTextOverlay, Header } from '$lib/components';
	import { Separator } from '$lib/components/ui';
</script>

<Header />
<div class="flex h-screen bg-neutral-50 dark:bg-neutral-900">
	<div class="absolute sm:mt-20 sm:ml-[5.5rem]">
		<BinaryTextOverlay text={'discipline'} />
	</div>
	<div
		class="absolute m-auto mx-5 mt-[5.75rem] space-y-3 text-neutral-700 sm:relative sm:mx-7 sm:w-full sm:text-neutral-900 sm:dark:text-neutral-50"
	>
		<h1
			class="text-shadow-6xl font-serif text-[60px]/[4rem] font-bold tracking-tighter sm:text-[7rem]/[7rem]"
		>
			𐙚 ࣪ ⟡
			<br />
			cameron ball
		</h1>
		<div class="space-y-3 sm:max-w-[45rem]">
			<Separator />
			<div
				class="space-y-3 rounded-md bg-black/1 p-2 font-sans text-base font-[500] tracking-[0.02em] backdrop-blur-sm sm:m-1 sm:px-3 sm:py-3 sm:shadow-lg dark:sm:bg-white/1 sm:dark:text-neutral-400"
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
