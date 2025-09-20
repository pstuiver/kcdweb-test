<script>
	import RouteHead from '$lib/RouteHead.svelte';
	const headerColor = 'n50-on-blue';
	const headerTitle = 'Client Reviews';
	let { data } = $props();
	const { reviews } = data;
	import SVGFiveStar from '$lib/SVGFiveStar.svelte';
	import SVGFourStar from '$lib/SVGFourStar.svelte';
	
</script>

<svelte:head>
	<title>KidzCanDurban-Client Reviews</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-n50">
		<div class="flex items-center justify-center my-2">
			<div class="text-base sm:text-xl md:text-2xl">Average</div>
			<SVGFiveStar svgClass={'text-yellow-500 w-32 sm:w-48 -mt-1'} />
			<div class="text-sm sm:text-lg md:text-xl">from 20 reviews</div>
		</div>

		{#each reviews as review}
			<div class="flex items-center mt-6">
				<div class="font-bold">{review.name}</div>
				{#if review.rating == 5}
					<SVGFiveStar />
				{:else if review.rating == 4}
					<SVGFourStar />
				{:else}
					<SVGFiveStar />
				{/if}
			</div>
			<p class="mt-0 text-left">{review.text}</p>
		{/each}
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
