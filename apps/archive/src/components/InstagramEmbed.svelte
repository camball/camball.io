<script lang="ts">
	import { Jellyfish } from 'svelte-loading-spinners';

	export let url: string;
</script>

<div class="flex items-center justify-center">
	<!-- Heavily modified embed script copied from Instagram. -->

	<!-- Instagram's `embed.js` deletes the special blockquote element (identified by the -->
	<!-- special classes/attributes) once the content loads, replacing it with an iframe. -->
	<!-- By default, some HTML is provided that matches the iframe content so the loading -->
	<!-- looks seamless, but we're replacing it with a custom loader animation. -->

	<blockquote
		class="instagram-media flex min-h-[677px] min-w-[326px] items-center justify-center border"
		data-instgrm-captioned
		data-instgrm-permalink={url}
		data-instgrm-version="14"
	>
		<Jellyfish size="70" color="#FF3E00" unit="px" duration="2s" />
		<script async src="https://www.instagram.com/embed.js"></script>
	</blockquote>
</div>
