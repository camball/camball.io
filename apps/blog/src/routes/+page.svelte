<script lang="ts">
	export let data;

	import BinaryTextOverlay from '$lib/components/BinaryTextOverlay.svelte';
	import { Card, Separator } from '$lib/components/ui';
	import { Header } from '../lib';
	import Tags from '../components/Tags.svelte';
	import moment from 'moment';

	const getFilenameFromPath = (filePath: string): string | null => {
		const filenameWithExtension = filePath.split('/').pop();
		return filenameWithExtension?.split('.').slice(0, -1).join('.') || null;
	};
</script>

<Header />
<div class="flex h-screen bg-neutral-50 dark:bg-neutral-900">
	<div class="absolute sm:ml-20 sm:mt-20">
		<BinaryTextOverlay text={'discipline'} />
	</div>
	<div
		class="text-shadow absolute m-auto ml-5 space-y-4 p-3 pl-0 text-neutral-700 sm:ml-5 sm:text-right sm:text-neutral-900 sm:dark:text-neutral-50"
	>
		<h1 class="mb-4 mt-20 font-serif text-6xl font-bold tracking-tighter sm:text-9xl">
			blog.camball.io
		</h1>
		<Separator />
		<div class="ml-1 text-lg sm:dark:text-neutral-400">
			<div class="inline-block space-y-2">
				{#each data.articles as article}
					<Card.Root class="opacity-90">
						<a href={getFilenameFromPath(article.filePath)}>
							<Card.Header class="pb-3">
								<Card.Title class="font-medium tracking-[0.023em]">
									{article.metadata.title}
								</Card.Title>
								<Card.Description>
									{moment(article.metadata.created).add(1, 'days').format('MMMM D, YYYY')}
								</Card.Description>
							</Card.Header>
							<Card.Content>
								<Tags tags={article.metadata.tags} />
							</Card.Content>
						</a>
					</Card.Root>
				{/each}
			</div>
		</div>
	</div>
	<img
		src="$lib/assets/sitting-on-couch.jpeg"
		alt="Cameron, sitting on a couch in a tall, well-lit room, wearing a ball cap and crossing one leg over the other, looking out a large window."
		class="object-cover sm:ml-auto"
	/>
</div>
