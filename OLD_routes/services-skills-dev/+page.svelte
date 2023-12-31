<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'Skills Development';
</script>

<svelte:head>
	<title>KidzCanDurban-Skills Development</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-white">
		<p>
			These individual and group treatment sessions focus on teaching children functional skills so
			that they can become more independent in everyday activities.
		</p>
		<p>
			The need to improve these skills is often identified by the child themselves and addressing
			them has a positive effect on the child's self-esteem and overall emotional well-being.
		</p>
		<p>Children with the following difficulties may benefit from skills development:</p>
		<ul class="views-list-item">
			<li>Dyslexia.</li>
			<li>Motor planning difficulties. (Dyspraxia)</li>
			<li>Learning difficulties.</li>
			<li>Visual Impairment.</li>
			<li>Attention Deficit Disorder.</li>
			<li>Global developmental delays.</li>
			<li>Genetic disorders.</li>
			<li>Autism Spectrum Disorder.</li>
			<li>Intellectual impairment</li>
		</ul>
		<p>
			We employ a variety of therapeutic techniques to develop a child's functional skills. These
			include:
		</p>
		<ul class="views-list-item">
			<li>
				<span class="font-bold">Multisensory activities</span> - Exposing a child to age-appropriate
				activities that allow them to learn through touching, feeling, moving, listening and
				looking.
				<p class="mt-1">
					This is helpful for children who have different learning styles. Each sense that is
					engaged during these activities gives the brain additional opportunity to encode and
					“integrate” the information for future reference.
				</p>
			</li>
			<li>
				<p>
					<span class="font-bold">Behavioural modification</span> - Desired behaviours such as attending,
					listening and engaging is encouraged through positive verbal and non-verbal praise as well
					as pre-determined rewards or activities.
				</p>
				<p class="mt-1">
					Additional visual support such as timers, tokens and visual schedule cards are often used
					to ensure that the child has a good understanding of what is expected.
				</p>
			</li>
			<li>
				<p>
					<span class="font-bold">Teaching and coaching</span> - The child is provided with multiple
					opportunities to practice new skills.
				</p>
				<p class="mt-1">
					Significant adults are encouraged to demonstrate or model tasks and to break activities
					into smaller, more manageable steps.
				</p>
				<p class="mt-1">
					Each step is practised individually before they are combined, to ensure that the child
					will have the self-confidence to complete the total skill.
				</p>
			</li>
			<li>
				<p>
					<span class="font-bold">Logical thinking and problem solving </span> - The therapy room becomes
					a safe space where children can try out new and novel tasks as well as solve old problems.
				</p>
				<p class="mt-1">
					Instead of being given the solution, children are encouraged to work through obstacles,
					constructional games and abstract concepts in a logical manner and are guided by the
					therapist to find the solutions themselves.
				</p>
				<p class="mt-1">This creates a sense of achievement in many children.</p>
			</li>
		</ul>
		<p>
			Parents, guardians and caregivers are encouraged to attend their child's therapy sessions as
			this provides an opportunity for training, understanding and interaction with the therapist.
		</p>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
