<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'Picky Eaters';
</script>

<svelte:head>
	<title>KidzCanDurban-Picky Eaters</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-white">
		<p>
			It is important to note that fluctuating appetites, shifts in food preferences and changes in
			eating patterns are considered part of "normal" childhood development.
		</p>
		<p>
			However, being confronted with a child who is a picky eater can still be quite challenging and
			stressful.
		</p>
		<p>
			Eating stimulates our senses of taste, smell, touch and sight. Food aversion or "picky eating"
			is often the result of children experiencing difficulty with the processing of these
			simultaneous sensory inputs.
		</p>
		<p>
			Our therapists can conduct a variety of Sensory Integration Assessments to assist with the
			understanding of a child’s sensory needs.
		</p>
		<p>
			We also provide Sensory Integration Therapy, to improve a child's tolerance and processing of
			sensory information.
		</p>
		<p>
			If our assessment indicates that the mechanics of eating are the reason why a child struggles
			with food, we will adapt our therapy to work closely with Speech and Language Pathologist.
			Should nutritional support be required, we can refer to Dieticians and other Health Care
			Professionals.
		</p>
		<p>In addition, we also offer guidance and training to parents on:</p>
		<ul class="views-list-item mb-2">
			<li>Adapting the environment and timing of your child's meals.</li>
			<li>Presenting alternative food and food preparation options.</li>
			<li>Developing your child’s willingness to explore, try and engage with new foods.</li>
			<li>Developing your child's independence during meal times</li>
		</ul>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
