<script>
	import { base } from '$app/paths';
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'blue-on-white';
	export let headerTitle = 'Attention and Concentration';
</script>

<svelte:head>
	<title>KidzCanDurban-Attention & Concentration</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content gray-on-blue">
		<p>
			We recognise that attention and concentration difficulties in children can be caused by a
			variety of factors, of which only one is ADD or AD(H)D.
		</p>
		<p>
			Hence our focus on conducting comprehensive
			<a class="views-link" href="{base}/services-ot-assessment" target="_self"
				>Occupational Therapy assessments</a
			>to assist our therapists in identifying aspects that may be affecting a child’s ability to
			focus and attend.
		</p>
		<p>
			Our therapists are qualified and experienced to treat attention and concentration difficulties
			by:
		</p>
		<ul class="views-list-item">
			<li>
				Improving physical strength, balance and endurance in both sitting and handwriting so that a
				child does not fatigue as quickly.
			</li>
			<li>Making recommendations regarding life-style adaptations.</li>
			<li>
				Improving visual-perceptual delays that may affect the child’s performance during "looking
				and learning" tasks.
			</li>
			<li>
				Increasing motivation and facilitating the implementation of behavioural strategies such as
				token systems, timers and reward charts.
			</li>
			<li>
				Improving ocular motor skills which may be affecting the child’s performance during tasks
				that require scanning of the environment or tracking of objects such as reading or copying
				from the board.
			</li>
			<li>
				Addressing sensory modulation difficulties through the implementation of a
				<a class="views-link" href="{base}/services-sensory-diet" target="_self">Sensory Diet</a>
				or an
				<a class="views-link" href="{base}/services-alert-program" target="_self">Alert Program</a>
				depending on the child’s needs and abilities.
			</li>
		</ul>
		<p>
			Should the cause not be related to OT areas, the therapist will refer the child to other
			health care or medical professionals who will be able to address the concerns.
		</p>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
