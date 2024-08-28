<script>
	/**
	 * Contains the rendered mdx file from `+page.ts`.
	 */
	export let data;

	import Header from '../../lib/header.svelte';
	import { Separator } from '$lib/components/ui';
	import { Footer } from '$lib/components';
	import Tags from '../../components/Tags.svelte';
	import { fade } from 'svelte/transition';
	import moment from 'moment';

	const { title, author, created, modified, tags } = data.metadata;

	const dateCreated = new Date(created);
	const dateModified = new Date(modified);

	let date = dateCreated;

	const CREATED = 'Created';
	const LAST_MODIFIED = 'Last modified';
	let dateMessage = moment(date).add(1, 'days').format('MMMM Do, YYYY');

	const computeDateMessage = () => {
		if (date === dateCreated) {
			date = dateModified;
			dateMessage = `${LAST_MODIFIED} ${moment(date).add(1, 'days').format('MMMM Do, YYYY')}`;
		} else {
			date = dateCreated;
			dateMessage = `${CREATED} ${moment(date).add(1, 'days').format('MMMM Do, YYYY')}`;
		}
	};
</script>

<Header />
<header class="mx-5 my-7 space-y-3 font-medium sm:mx-48" id="article-header">
	<Tags {tags} />
	<h1 class="text-4xl">{title}</h1>
	<div class="flex space-x-2">
		<p>By {author}</p>
		<p>•</p>
		<button on:click={computeDateMessage}>
			{dateMessage}
		</button>
	</div>
</header>
<Separator />
<div
	in:fade|global={{ delay: 150, duration: 350 }}
	out:fade|global={{ duration: 100 }}
	class="m-5 mb-10 mt-7 sm:mx-60 sm:flex sm:flex-row"
>
	<svelte:component this={data.mdxComponent} />
</div>
<Footer />
