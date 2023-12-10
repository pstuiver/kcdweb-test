<script>
	import RouteHead from '$lib/RouteHead.svelte';
	export let headerColor = 'blue-on-n50';
	export let headerTitle = 'Occupational Therapy';
</script>

<svelte:head>
	<title>KidzCanDurban-About OT</title>
</svelte:head>

<!-- This route was specifically created so that users who clicked on an "About OT" link in the home page, would be redirected to a route/page with a back button, so that they would go back to their previous scroll position in the home-page after clicking the link/route/page's back button  -->

<div class="views-container">
	<RouteHead {headerColor} {headerTitle} />

	<main class="views-content n50-on-blue">
		<p>
			Occupational Therapy (OT) is an allied health profession, focused on improving people's
			ability to participate in their
			<span class="font-bold italic">Occupations.</span>
		</p>
		<p>
			<span class="font-bold italic">Occupations</span> are the everyday activities that provide meaning
			to our lives, ranging from self-care tasks such as dressing and eating, to attending work or school
			and the ability to engage in leisure and social activities.
		</p>
		<p>
			During Occupational Therapy, the client is encouraged to take part in the therapy process by
			participating in structured and unstructured activities.
		</p>
		<p>
			Occupational Therapists are trained in activity-analysis and can adapt and develop activities,
			to be specific for each client's individual needs.
		</p>
		<p>
			Occupational Therapists aim to minimise the environmental barriers that their clients
			experience, to increase their client's participation in meaningful tasks.
		</p>
		<p>
			Our Occupational Therapy practice focuses on Paediatric intervention, working with babies and
			children up to the age of 13 years.
		</p>
		<p>
			As many of a child's daily occupations take place at home and at school, we will often assess
			areas of concern identified by a child's parents or teachers:
		</p>
		<p class="views-list-title">Difficulty with the activities of daily life</p>
		<ul class="views-list-item">
			<li>Eating, Dressing, Grooming, Bathing, Sleeping, Toileting</li>
		</ul>
		<p class="views-list-title">Developmental delay</p>
		<ul class="views-list-item">
			<li>Delays in achieving motor milestones such as rolling, sitting, crawling and walking.</li>
			<li>Delays in social interaction and communication when compared to their peers.</li>
			<li>Delays in play skills when compared to their peers.</li>
		</ul>
		<p class="views-list-title">Sensory Integration difficulties</p>
		<ul class="views-list-item">
			<li>Negative responses to non-threatening sounds, movement, touch, lights or colours.</li>
			<li>Difficulty managing and controlling emotions or staying calm.</li>
			<li>Trouble tolerating changes in routine or plans.</li>
			<li>Difficulty perceiving body language, personal space or facial expressions.</li>
			<li>Accident prone – clumsy or uncoordinated. Using inefficient ways of doing things.</li>
			<li>Difficulty playing with age-appropriately toys.</li>
			<li>
				Difficulty using objects such as scissors, crayons, buttons, zips and containers. (tool
				manipulation)
			</li>
			<li>Difficulty learning age-appropriate concepts such as colours, numbers and shapes.</li>
			<li>Inability to sit still, increased energy levels and always on the go.</li>
			<li>Day-dreaming, lethargic or inattentive</li>
		</ul>
		<p class="views-list-title">School related concerns</p>
		<ul class="views-list-item">
			<li>Poor physical development and sitting posture (gross motor skills)</li>
			<li>Challenges in areas of literacy and numeracy (visual perceptual skills)</li>
			<li>
				Delays in pencil grip, colouring and cutting (fine motor skills and eye-hand coordination)
			</li>
			<li>
				Difficulty with copying written work, letter formation, sizing and spacing (visual motor
				integration)
			</li>
			<li>
				Delayed personal management or independence (time-management, emotional control, social
				interaction)
			</li>
			<li>Poor attention and concentration</li>
		</ul>
		<p class="my-4">
			Children are best engaged when tasks are fun, novel and playful and our treatment sessions are
			therefore aimed at involving the child in play-based activities.
		</p>
		<p class="text-center">- - - END - - -</p>
	</main>
</div>
