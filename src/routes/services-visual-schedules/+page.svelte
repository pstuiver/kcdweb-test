<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'n50-on-blue';
	export let headerTitle = 'Visual Schedules';
</script>

<svelte:head>
	<title>KidzCanDurban-Visual Schedules</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-n50">
		<p class="font-bold">Visual schedules can help children to:</p>
		<ul class="views-list-item">
			<li>Understand and/or follow daily routines</li>
			<li>Complete sequential tasks or activities</li>
			<li>Learn new skills</li>
			<li>Reduce their dependence on caretakers</li>
		</ul>
		<p>
			Visual schedules typically consist of a series of pictures, symbols, words or other visual
			format arranged in chronological order.
		</p>
		<p>
			They create an understanding and anticipation of upcoming tasks and events, thereby providing
			a sense of structure, predictability and accomplishment that assists with reducing anxiety,
			promoting independence and transitioning between activities.
		</p>
		<p>
			By including a series of separate tasks that are part of a single event, they can be used to
			teach a new skills by breaking down activities into smaller steps.
		</p>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
