<script>
	import { resolve } from '$app/paths';
	import RouteHead from '$lib/RouteHead.svelte';
	const headerColor = 'blue-on-n50';
	const headerTitle = 'Autism Spectrum Disorder';
	// Need this to make this link work in GH Pages build workflows
	const skillsDevLink = `services-skills-dev`;
	const dirFloortimeLink = `services-dir-floortime`;
	const sensoryIntLink = `services-sensory-int`;
	const sensoryDietLink = `services-sensory-diet`;
	const alertLink = `services-alert-program`;
</script>

<svelte:head>
	<title>KidzCanDurban-About Autism</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content n50-on-blue">
		<p>
			Link to :
			<a class="views-link ml-0" href="http://aut2know.co.za/" target="_blank" rel="noopener"
				>Autism South Africa
				<span class="sr-only"> , Warning, screen readers, this is an external link </span></a>
		</p>
		<p>
			Link to :
			<a
				class="views-link ml-0"
				href="https://www.cdc.gov/ncbddd/autism/index.html"
				target="_blank"
				rel="noopener"
				>CDC(USA) - ASD Homepage<span class="sr-only">
					, Warning, screen readers, this is an external link
				</span></a>
		</p>
		<p>
			As experienced therapists we understand the importance of early Autism Spectrum Disorder (ASD)
			intervention and the impact that ASD can have on the entire family.
		</p>
		<p>
			As no two children on the spectrum are the same, we take great care to develop aims and
			targets that are specific to each individual child and each family’s needs.
		</p>
		<p>
			Our therapeutic interventions are focussed on family involvement and education, to generalise
			skills to the home environment and to ensure the sustainability of our recommended programs.
		</p>
		<p>
			Our Therapists are experienced in working with other health care practitioners and can provide
			a multi-disciplinary approach with other practitioners that might be providing additional
			services to our ASD clients.
		</p>
		<p>
			Our therapists are trained and experienced to address the following aspects that are typically
			associated with ASD:
		</p>
		<ul class="views-list-item">
			<li class="mt-2">
				<span class="font-semibold italic">Language and communication</span>: Although this area
				also requires specialised support from speech and language therapists, our therapists'
				knowledge in Alternative and Augmentative Communication (AAC) will support your child’s
				ability to communicate.
			</li>
			<li class="mt-2">
				<span class="font-semibold italic">Social interaction:</span>
				Sensory Integration, DIR,
				<a class="views-link" href={resolve(`/${skillsDevLink}`)}>Skills development</a>
				and other behavioural techniques are used to promote awareness of the child to themselves and
				to others, appropriate social responses, behaviours in public spaces and tolerance to change.
			</li>
			<li class="mt-2">
				<span class="mt-1 font-semibold italic">Imagination and Creative play: </span>Sensory
				Integration and
				<a class="views-link" href={resolve(`/${dirFloortimeLink}`)}>DIR &amp; Floortime</a>
				techniques are used to assist the child in feeling calm and alert, sharing attention, engaging
				and relating to others, interacting, shared problem so and creative or abstract thinking.
			</li>
			<li class="mt-2">
				<span class="font-semibold italic">Sensory Integration difficulties:</span>
				<a class="views-link" href={resolve(`/${sensoryIntLink}`)}>Sensory Integration</a>
				techniques are used to address the child’s behaviour, emotional responses, focus and attention.
				This may include the implementation of a
				<a class="views-link" href={resolve(`/${sensoryDietLink}`)}>Sensory Diet</a>
				and/or an
				<a class="views-link" href={resolve(`/${alertLink}`)}>Alert Program</a>
				or alternatively addressing the child’s motor planning and sensory processing skills.
			</li>
		</ul>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
