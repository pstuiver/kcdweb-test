<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'gray-on-blue';
	export let headerTitle = 'OT Assessments';
</script>

<svelte:head>
	<title>KidzCanDurban-OT Assessments</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />
	<main class="views-content blue-on-white">
		<p>
			An assessment will typically be the first step in your child and your family's Occupational
			Therapy journey.
		</p>
		<p>
			An assessment provides family members, teachers and caregivers with opportunities to share
			background information and concerns regarding the child's development through verbal
			discussion and the completion of written questionnaires.
		</p>
		<p>
			Assessment sessions provide our therapists with opportunities to interact and engage with a
			child to establish the child's areas of strength and weakness.
		</p>
		<p>
			Activities during an assessment are focussed on developmental tasks and educational games
			specific to each child's age and abilities.
		</p>
		<p>
			The assessment's outcomes provide valuable insight on how to better support the child's every
			day performance and will guide the therapist in developing a comprehensive treatment program.
		</p>
		<p>
			The therapist will make recommendations regarding environmental adaptations, assistive devices
			and equipment, behavioural strategies, additional therapy and/or medical support.
		</p>
		<p>
			Our Occupational Therapy practice offers a variety of assessment options specific to your
			child's age, ability and areas of concern:
		</p>
		<ul class="views-list-item">
			<li>
				<p>
					<span class="font-bold">Early Years Assessment</span>: A one hour, individual session with
					the therapist in the practice, during which the child will be presented with structured
					and unstructured play and educational activities. Non-standardised test, observations and
					developmental checklists are used to determine the child's performance with regards to
					their peers
				</p>
				<p class="mt-1">
					Parents receive a written assessment report plus feedback during a 45 minute session with
					the therapist, approximately 2 weeks after the assessment.
				</p>
			</li>
			<li>
				<p>
					<span class="font-bold">School Years Assessment:</span> A two hour, individual session with
					the therapist in the practice, during which the child will be presented with structured and
					unstructured play and educational tasks. Standardised tests, observations, checklists and questionnaires
					are used to determine the child's performance with regards to their peers.
				</p>
				<p class="mt-1">
					Parents receive a written assessment report plus feedback during a 45 minute session with
					the therapist, approximately 2 weeks after the assessment.
				</p>
			</li>
			<li>
				<p>
					<span class="font-bold">Developmental screenings:</span>
					Children over the age of 4, with similar needs and abilities may on occasion be screened in
					groups or pairs. These screenings typically take place at their school
				</p>
				<p class="mt-1">
					Parents receive a written assessment report plus feedback during a 45 minute session with
					the therapist, approximately 2 weeks after the assessment.
				</p>
			</li>
		</ul>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
