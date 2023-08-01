<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'Alert Program';
</script>

<svelte:head>
	<title>KidzCanDurban-Alert Program</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-white">
		<p>
			The Alert Program was developed by Occupational Therapists to teach children self-regulation
			and to teach adults how to support learning, attending and positive behaviour in children.
		</p>
		<p>
			It uses the analogy that the body is like a car engine sometimes running <span
				class="font-semibold italic">too high</span
			>, sometimes
			<span class="font-semibold italic">too low</span>
			and sometimes <span class="font-semibold italic">just right.</span>
		</p>
		<p>
			Participation in the Alert Program will provide the child and adults with a common language
			and words to describe how the child's
			<span class="font-semibold italic">engine is running.</span>
		</p>
		<p>
			It will also provide a range of simple, low-budget strategies and activities that can be
			incorporated easily into the home and into school routines, to assist the child with feeling
			<span class="font-semibold italic">just right.</span>
		</p>
		<p>
			We have enhanced our Alert Program by adding additional visual support and interactive cue
			cards, to better support children with special needs.
		</p>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
