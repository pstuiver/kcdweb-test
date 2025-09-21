<script>
	import RouteHead from '$lib/RouteHead.svelte';
	const headerColor = 'n50-on-blue';
	const headerTitle = 'Blog Posts';
	let { data } = $props();
	const { blogSRC } = data;
</script>

<svelte:head>
	<title>KidzCanDurban-Blog Posts</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<div class="relative m-0 flex h-screen w-full flex-col items-center p-0">
		<div
			class="width-full absolute -mt-16 h-screen origin-top scale-[0.43]
			xs:-mt-32 xs:scale-[0.66] md:-mt-48 md:scale-[1.0]">
			<iframe title="kidzcandurban blog" width="780px" height="250%" class="" src={blogSRC}
			></iframe>
		</div>
	</div>
</div>
