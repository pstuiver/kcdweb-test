<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'Blog Posts';
	export let data;
	const { blogs } = data;
</script>

<svelte:head>
	<title>KidzCanDurban-Blog Posts</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-white">
		{blogs}
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
