<script lang="ts">
	import { BinaryTextOverlay, Header } from '$lib/components';
	import { Separator } from '$lib/components/ui';
</script>

<Header />
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
				get in touch
			</h1>
			<Separator />
			<div
				class="space-y-3 rounded-md bg-black bg-opacity-[0.01] p-2 font-sans text-base font-[500] tracking-[0.02em] backdrop-blur-sm sm:m-1 sm:px-3 sm:py-3 dark:sm:bg-white dark:sm:bg-opacity-[0.01] sm:dark:text-neutral-400"
			>
				<p>*page still under development*</p>
			</div>
		</div>
	</div>
	<img
		src="$lib/assets/sitting-on-couch.jpeg"
		alt="Cameron, sitting on a couch in a tall, well-lit room, wearing a ball cap and crossing one leg over the other, looking out a large window."
		class="object-cover"
	/>
</div>
