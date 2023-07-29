<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'Client Reviews';
	export let data;
	const { reviews } = data;
</script>

<svelte:head>
	<title>KidzCanDurban-Client Reviews</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-white">
		{#each reviews as review}
			<div>{review.name}</div>
			<span>{review.rating}</span>
			<div>{review.text}</div>
		{/each}
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
