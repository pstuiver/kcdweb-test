<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'n50-on-blue';
	export let headerTitle = 'Handwriting';
</script>

<svelte:head>
	<title>KidzCanDurban-Handwriting</title>
</svelte:head>

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content blue-on-n50">
		<p>
			Before developing a legible, fluent and fast handwriting style, children first need to develop
			the foundational skills for successful handwriting.
		</p>
		<p>We offer individual and group sessions focused on developing the following areas:</p>
		<ul class="views-list-item mt-2">
			<li>
				<span class="font-bold">Attention and concentration</span> - The ability to remain focused for
				a sustained period of time.
			</li>
			<li>
				<span class="font-bold">Balance and postural control</span> - Able to sit alone, using arms to
				hold a crayon or pencil and not using arms to support the trunk or to stay upright
			</li>
			<li>
				<span class="font-bold">Shoulder stability</span> - Stabilise the shoulder to reach and support
				the forearm, wrist and hand when holding a pencil.
			</li>
			<li>
				<span class="font-bold">Fine motor skills</span> - Accurately moving and controling the muscles
				of the hands and fingers.
			</li>
			<li>
				<span class="font-bold">Bilateral coordination</span> - The ability to use both hands together.
				One to stabilise the paper and the other to lead the writing action.
			</li>
			<li>
				<span class="font-bold">Eye hand coordination</span> - Coordinating the movement of arms, hand
				and eyes so that they will work together.
			</li>
			<li>
				<span class="font-bold">Letter perception</span> - The ability to recognise forms, notice likeness
				and differences, infer the movements necessary for the production of a form and to give accurate
				verbal descriptions of what is seen.
			</li>
			<li>
				<span class="font-bold">Ocular motor control</span> - Controlling the muscle movements in our
				eyes for smooth tracking during copying or reading tasks.
			</li>
			<li>
				<span class="font-bold">Proprioceptive feedback</span> - The sensory system that unconsciously
				tells us where our body parts are in space even if we are not visually monitoring them. This
				is necessary to attain the correct pencil grip as well as to use adequate pressure when writing.
			</li>
			<li>
				<span class="font-bold">Motor planning</span> - Forming a plan in our brain and sending accurate
				messages to our muscles to perform that plan.
			</li>
		</ul>
		<p>To address the above-mentioned aspects, we offer two specific handwriting programs:</p>
		<ul class="views-list-item mt-2">
			<li>
				<span class="font-bold">Write start program</span> - Teaching methods for developing accurate
				letter formation, sizing, placement and spacing in print-style writing.
			</li>
			<li>
				<span class="font-bold">Write smart program</span> - Teaching methods to increase the accuracy
				of letter formation, fluidity of handwriting, speed and legibility in cursive style writing.
			</li>
		</ul>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
