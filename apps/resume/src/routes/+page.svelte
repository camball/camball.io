<script lang="ts">
	import { BinaryTextOverlay, Header } from '$lib/components';
	import { Separator } from '$lib/components/ui';
</script>

<Header />
<div class="flex h-screen flex-row justify-between bg-neutral-50 dark:bg-neutral-900">
	<div>
		<div class="absolute sm:mt-20 sm:ml-[5.5rem]">
			<BinaryTextOverlay text={'discipline'} />
		</div>
		<div
			class="text-shadow-6xl absolute m-auto mt-20 ml-5 space-y-3 p-3 pl-0 text-neutral-700 sm:relative sm:ml-7 sm:text-neutral-900 sm:dark:text-neutral-50"
		>
			<h1 class="font-serif text-[60px]/[4rem] font-bold tracking-tighter sm:text-[7rem]/[7rem]">
				𐙚 ࣪ ⟡
				<br />
				resume
			</h1>
			<Separator />
			<div
				class="space-y-3 rounded-md bg-black/1 p-2 font-sans text-base font-[500] tracking-[0.02em] backdrop-blur-sm sm:m-1 sm:px-3 sm:py-3 sm:shadow-lg dark:sm:bg-white/1 sm:dark:text-neutral-400"
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
