<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'Blog Posts';
	export let data;
	const { blogSRC } = data;
</script>

<svelte:head>
	<title>KidzCanDurban-Blog Posts</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<div class="flex flex-col items-center relative w-full h-screen m-0 p-0 astro-4Y4XMH2W">
		<div
			class="absolute origin-top width-full h-screen scale-[0.43] xs:iframescale-xs sm:iframescale-sm md:iframescale-md -mt-16 xs:-iframemt-xs sm:-iframemt-sm md:-iframemt-md svelte-19c54l5">
			<iframe title="kidzcandurban blog" width="780px" height="250%" class="" src={blogSRC} />
		</div>
	</div>
</div>

<style>
	@media (min-width: 480px) {
		.xs\:iframescale-xs.svelte-19c54l5 {
			--tw-scale-x: 0.6;
			--tw-scale-y: 0.6;
			transform: var(--tw-transform);
		}

		.xs\:-iframemt-xs.svelte-19c54l5 {
			margin-top: -7rem;
		}
	}

	@media (min-width: 768px) {
		.sm\:iframescale-sm.svelte-19c54l5 {
			--tw-scale-x: 0.92;
			--tw-scale-y: 0.92;
			transform: var(--tw-transform);
		}

		.sm\:-iframemt-sm.svelte-19c54l5 {
			margin-top: -12rem;
		}
	}

	@media (min-width: 976px) {
		.md\:iframescale-md.svelte-19c54l5 {
			--tw-scale-x: 1.1;
			--tw-scale-y: 1.1;
			transform: var(--tw-transform);
		}

		.md\:-iframemt-md.svelte-19c54l5 {
			margin-top: -14rem;
		}
	}
</style>
