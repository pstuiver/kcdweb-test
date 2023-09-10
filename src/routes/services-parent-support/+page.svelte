<script>
	import { base } from '$app/paths';
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'n50-on-blue';
	export let headerTitle = 'Parent Support';
	// Need this to make this link work in GH Pages build workflows
	const assessmentLink = `services-ot-assessment`;
</script>

<svelte:head>
	<title>KidzCanDurban-Parent Support</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />
	<main class="views-content blue-on-n50">
		<p>
			Our therapists recognise the importance of parent, guardian and care-giver involvement to
			achieve maximum gains from therapy,
		</p>
		<p>
			Emphasis is placed on helping parents understand the areas that may boost or hamper their
			child’s development.
		</p>
		<p>
			The therapists' specialised training and experience enable them to provide families with
			strategies, handouts, equipment and other resources to best support the child in achieving
			their full potential.
		</p>
		<p>
			After the
			<a class="views-link" href="{base}/{assessmentLink}" target="_self"
				>Occupational Therapy Assessment</a>
			and before commencing the therapy process, the parents and child will be provided with opportunity
			to collaborate on setting the goals for therapy.
		</p>
		<p>
			This goal-setting process ensures that there will be realistic expectations and tangible
			outcomes on which to measure the success of the therapy intervention.
		</p>
		<p>
			In addition, each therapy session incorporates a 5-10 minute collaboration between family
			members and the therapist and opportunity for the therapist to provide recommendations with
			regards to home practice and repetition.
		</p>
		<p>
			Our therapists are available for private parent meetings as well as community and school
			presentations on Occupational Therapy or related topics.
		</p>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
