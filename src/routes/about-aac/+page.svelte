<script>
	import { resolve } from '$app/paths';
	import RouteHead from '$lib/RouteHead.svelte';
	const headerColor = 'blue-on-n50';
	const headerTitle = `<div class="sr-only text-md">Augmentative Alternative Communication</div>
		<div class="views-head-text" aria-hidden="true">
			A<span class="hidden xs:inline tracking-tight">ugmentative</span>
			A<span class="hidden xs:inline tracking-tight">lternative</span>
			C<span class="hidden xs:inline tracking-tight">ommunication</span>
		</div>`;
	// Need this to make this link work in GH Pages build workflows
	const socialStoriesLink = `services-social-stories`;
	const visualSchedulesLink = `services-visual-schedules`;
</script>

<svelte:head>
	<title>KidzCanDurban-AAC</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />
	<main class="views-content n50-on-blue">
		<p>
			Children who cannot communicate effectively, miss out on opportunities to play, learn and
			socialise.
		</p>
		<p>At Elsje Stuiver – Occupational Therapy we acknowledge that communication is power!</p>
		<p>
			Our therapists are experienced in the use and implementation of AAC strategies, tools and
			devices and we work closely with AAC experts to find the support that will best suit each
			individual child.
		</p>
		<p>Our AAC services may include</p>
		<ul class="views-list-item">
			<li class="mt-2">
				<span class="block font-semibold italic">Training and use of Makaton</span>
				Makaton is a system of communication that uses signs, symbols, and gestures to help people who
				struggle with speaking or understanding spoken language. It uses hand movements, facial expressions
				and pictures to convey meaning and to improve understanding.
			</li>
			<li class="mt-2">
				<span class="block font-semibold italic">Graphic Symbol use</span>
				Symbols can be pictures, drawings or icons that represent specific words or concepts. For parents,
				the use of graphic symbols can be incredibly beneficial to engage in meaningful interactions
				with their child. It provides an alternative way for both parents and children to express their
				needs and thoughts, thereby reducing frustration, enhancing comprehension and promoting independence
				in communication.
			</li>

			<li class="mt-2">
				<span class="block font-semibold italic">Advice on Speech Generating Devices</span>
				Speech generating devices (SGDs) are electronic devices that produce spoken output. Using an
				SGD, a child can select symbols by touch or by alternative methods such as eye gaze or switches,
				to generate synthesized speech. SGDs can be customised to meet each child's specific needs, store
				common phrases and to offer personalised messages. They empower their users to connect with others
				by participating in meaningful conversation and social interaction.
			</li>
			<li class="mt-3">
				<a href={resolve(`/${visualSchedulesLink}`)} class="views-link"
					>Implementing Visual Schedules</a>
			</li>
			<li class="mt-3">
				<a href={resolve(`/${socialStoriesLink}`)} class="views-link">Designing Social Stories</a>
			</li>
			<p class="mt-4">
				If your child has difficulty making their thoughts, needs and feelings known, they may
				benefit from additional support from an Occupational Therapist with a specific interest in
				AAC.
			</p>
		</ul>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
