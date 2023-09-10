<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'n50-on-blue';
	export let headerTitle = 'Blog Posts';
	export let data;
	const { blogSRC } = data;
</script>

<svelte:head>
	<title>KidzCanDurban-Blog Posts</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<div class="flex flex-col items-center relative w-full h-screen m-0 p-0">
		<div
			class="absolute origin-top width-full h-screen scale-[0.43] xs:scale-[0.66]
			md:scale-[1.0] -mt-16 xs:-mt-32 md:-mt-48">
			<iframe title="kidzcandurban blog" width="780px" height="250%" class="" src={blogSRC} />
		</div>
	</div>
</div>
