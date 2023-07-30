<script>
	import { base } from '$app/paths';
	import SVGHome from '$lib/SVGHome.svelte';
	import SVGTherapist from '$lib/SVGTherapist.svelte';
	import SVGServices from '$lib/SVGServices.svelte';
	import SVGAbout from '$lib/SVGAbout.svelte';
	import SVGMedia from '$lib/SVGMedia.svelte';
	import SVGContact from '$lib/SVGContact.svelte';
	import SVGTelephone from '$lib/SVGTelephone.svelte';
	export let data;
	const { servicesCards, mediaCards } = data;
</script>

<main>
	/* eslint-disable svelte/no-at-html-tags */
	<div id="home-page">
		<div class="w-full max-w-7xl mx-auto">
			<header
				class="z-10 top-0 fixed flex max-w-7xl w-full text-neutral-900 bg-white items-center justify-between border-b border-neutral-50">
				<div class="flex-column w-full">
					<div class="flex flex-row w-full items-center">
						<picture
							><source
								srcset="
                                    ./images/kcd-logo/small/kcd_logo_with_text_113x45_transparent.webp 113w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_184x74_transparent.webp 184w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_228x92_transparent.webp 228w
                                "
								type="image/webp" />
							<source
								srcset="
                                    ./images/kcd-logo/small/kcd_logo_with_text_113x45_transparent.avif 113w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_184x74_transparent.avif 184w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_228x92_transparent.avif 228w
                                "
								type="image/avif" />
							<img
								class="hidden ml-2 py-1 xs:flex xs:w-24 md:w-28 lg:w-32"
								src="./images/kcd-logo/small/kcd_logo_with_text_113x45_transparent.png"
								alt="Kidzcan logo"
								width="113"
								height="45"
								aria-hidden="true" /></picture>
						<div class="flex-column w-full text-center">
							<h1 class="m-0 font-bold text-md md:text-xl lg:text-2xl">
								Elsje Stuiver - Occupational Therapy
							</h1>
							<div class="m-0 font-medium text-xs md:text-sm lg:text-base" aria-hidden="true">
								Practice no. 0684414
							</div>
						</div>
						<div class="hidden pl-2 py-1 xs:flex xs:w-24 md:w-28 lg:w-32" aria-hidden="true">
							&nbsp;
						</div>
					</div>
					<nav class="flex flex-row w-full py-1 lg:py-2 items-center justify-around white-on-blue">
						<a class="index-nav-a" href="#home">
							<SVGHome />
							Home</a>
						<a class="index-nav-a" href="#therapist">
							<SVGTherapist />
							Therapists</a>
						<a class="index-nav-a" href="#services">
							<SVGServices />
							Services</a>
						<a class="index-nav-a" href="#about">
							<SVGAbout />
							About</a>
						<a class="index-nav-a" href="#media">
							<SVGMedia />
							Media</a>
						<a class="index-nav-a relative" href="#contact">
							<SVGContact />
							Contact</a>
					</nav>
				</div>
			</header>
			<div class="top-0 w-full h-16 md:h-20 lg:h-24">&nbsp;</div>
			<section class="section-wrapper blue-on-gray py-2">
				<div id="home" class="section-id">&nbsp;</div>
				<main class="-mx-4 flex">
					<div
						class="hidden md:flex md:flex-col md:flex-grow md:justify-around pl-6 pr-3"
						aria-hidden="true">
						<picture
							><source
								srcset="
                                    ./images/kidzLT/kidzLT_110x147.webp 110w,
                                    ./images/kidzLT/kidzLT_160x213.webp 160w,
                                    ./images/kidzLT/kidzLT_190x253.webp 190w,
                                    ./images/kidzLT/kidzLT_320x427.webp 320w,
                                    ./images/kidzLT/kidzLT_380x507.webp 380w
                                "
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzLT/kidzLT_110x147.avif 110w,
                                    ./images/kidzLT/kidzLT_160x213.avif 160w,
                                    ./images/kidzLT/kidzLT_190x253.avif 190w,
                                    ./images/kidzLT/kidzLT_320x427.avif 320w,
                                    ./images/kidzLT/kidzLT_380x507.avif 380w
                                "
								type="image/avif" />
							<img
								class="rounded-lg mx-auto"
								style="max-width: 190px"
								src="./images/kidzLT/kidzLT_160x213.jpg"
								alt="kids in therapy"
								width="160"
								height="213" /></picture>
						<picture
							><source
								srcset="
                                    ./images/kidzLM/kidzLM_110x147.webp 110w,
                                    ./images/kidzLM/kidzLM_160x213.webp 160w,
                                    ./images/kidzLM/kidzLM_190x253.webp 190w,
                                    ./images/kidzLM/kidzLM_320x427.webp 320w,
                                    ./images/kidzLM/kidzLM_380x507.webp 380w
                                "
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzLM/kidzLM_110x147.avif 110w,
                                    ./images/kidzLM/kidzLM_160x213.avif 160w,
                                    ./images/kidzLM/kidzLM_190x253.avif 190w,
                                    ./images/kidzLM/kidzLM_320x427.avif 320w,
                                    ./images/kidzLM/kidzLM_380x507.avif 380w
                                "
								type="image/avif" />
							<img
								class="rounded-lg mx-auto"
								style="max-width: 190px"
								src="./images/kidzLM/kidzLM_160x213.jpg"
								alt="kids in therapy"
								width="160"
								height="213" /></picture>
						<picture
							><source
								srcset="
                                    ./images/toyLB/toyLB_110x83.webp  110w,
                                    ./images/toyLB/toyLB_160x120.webp 160w,
                                    ./images/toyLB/toyLB_190x143.webp 190w,
                                    ./images/toyLB/toyLB_320x240.webp 320w,
                                    ./images/toyLB/toyLB_380x285.webp 380w
                                "
								type="image/webp" />
							<source
								srcset="
                                    ./images/toyLB/toyLB_110x83.avif  110w,
                                    ./images/toyLB/toyLB_160x120.avif 160w,
                                    ./images/toyLB/toyLB_190x143.avif 190w,
                                    ./images/toyLB/toyLB_320x240.avif 320w,
                                    ./images/toyLB/toyLB_380x285.avif 380w
                                "
								type="image/avif" />
							<img
								class="rounded-lg mx-auto"
								style="max-width: 190px"
								src="./images/toyLB/toyLB_160x120.jpg"
								alt="kids toys"
								width="160"
								height="120" /></picture>
					</div>
					<div
						class="mx-auto text-sm sm:text-base font-semibold xs:mt-1 px-4 pb-4 bg-white rounded-lg shadow-xl"
						style="width: 96%; max-width: 460px">
						<div class="flex justify-center">
							<div>
								<picture
									><source
										srcset="
                                            ./images/kcd-logo/large/kcd_logo_with_text_200x81_transparent.webp  200w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_300x121_transparent.webp 300w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_600x242_transparent.webp 600w
                                        "
										type="image/webp" />
									<source
										srcset="
                                            ./images/kcd-logo/large/kcd_logo_with_text_200x81_transparent.avif  200w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_300x121_transparent.avif 300w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_600x242_transparent.avif 600w
                                        "
										type="image/avif" />
									<img
										class="pt-2 rounded"
										style="max-width: 300px"
										src="./images/kcd-logo/large/kcd_logo_with_text_300x121_transparent.png"
										alt="Kidzcan logo"
										width="300"
										height="121" /></picture>
							</div>
						</div>
						<div class="text-xl tracking-tight sm:text-2xl font-extrabold text-center">
							Unlocking your child's potential
						</div>
						<div class="text-center">
							<div class="mt-1">
								We are a private Occupational Therapy practice located in Pinetown, Durban, South
								Africa.
							</div>
							<p>
								We specialise in assessing and treating problems that can affect children at home,
								at school or with friends.
							</p>
							<p>Our therapy is fun and we encourage family participation.</p>
							<p>
								Our specialised input enables children to discover their strengths, overcome their
								difficulties and unlock their true potential.
							</p>
							<div class="text-base sm:text-lg font-extrabold text-center underline mt-3">
								We offer a free telephone consultation
							</div>
							<div>
								During this 15 minute conversation you can share concerns regarding your child with
								one of our Therapists and explore options.
							</div>
						</div>
						<a
							class="block w-32 mx-auto mt-4 text-center text-sm sm:text-base p-2 font-semibold rounded-md shadow-sm gray-on-blue"
							href="#contact">Contact us</a>
					</div>
					<div class="hidden md:flex md:flex-col md:flex-grow pl-3 pr-6" aria-hidden="true">
						<picture
							><source
								srcset="
                                    ./images/kidzRT/kidzRT_110x147.webp 110w,
                                    ./images/kidzRT/kidzRT_160x213.webp 160w,
                                    ./images/kidzRT/kidzRT_190x253.webp 190w,
                                    ./images/kidzRT/kidzRT_320x427.webp 320w,
                                    ./images/kidzRT/kidzRT_380x507.webp 380w
                                "
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzRT/kidzRT_110x147.avif 110w,
                                    ./images/kidzRT/kidzRT_160x213.avif 160w,
                                    ./images/kidzRT/kidzRT_190x253.avif 190w,
                                    ./images/kidzRT/kidzRT_320x427.avif 320w,
                                    ./images/kidzRT/kidzRT_380x507.avif 380w
                                "
								type="image/avif" />
							<img
								class="rounded-lg m-4 mx-auto"
								style="max-width: 190px"
								src="./images/kidzRT/kidzRT_160x213.jpg"
								alt="kids in therapy"
								width="160"
								height="213" /></picture>
						<picture
							><source
								srcset="
                                    ./images/kidzRM/kidzRM_110x147.webp 110w,
                                    ./images/kidzRM/kidzRM_160x213.webp 160w,
                                    ./images/kidzRM/kidzRM_190x253.webp 190w,
                                    ./images/kidzRM/kidzRM_320x427.webp 320w,
                                    ./images/kidzRM/kidzRM_380x507.webp 380w
                                "
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzRM/kidzRM_110x147.avif 110w,
                                    ./images/kidzRM/kidzRM_160x213.avif 160w,
                                    ./images/kidzRM/kidzRM_190x253.avif 190w,
                                    ./images/kidzRM/kidzRM_320x427.avif 320w,
                                    ./images/kidzRM/kidzRM_380x507.avif 380w
                                "
								type="image/avif" />
							<img
								class="rounded-lg m-4 mx-auto"
								style="max-width: 190px"
								src="./images/kidzRM/kidzRM_160x213.jpg"
								alt="kids in therapy"
								width="160"
								height="213" /></picture>
						<picture
							><source
								srcset="
                                    ./images/toyRB/toyRB_110x83.webp  110w,
                                    ./images/toyRB/toyRB_160x120.webp 160w,
                                    ./images/toyRB/toyRB_190x143.webp 190w,
                                    ./images/toyRB/toyRB_320x240.webp 320w,
                                    ./images/toyRB/toyRB_380x285.webp 380w
                                "
								type="image/webp" />
							<source
								srcset="
                                    ./images/toyRB/toyRB_110x83.avif  110w,
                                    ./images/toyRB/toyRB_160x120.avif 160w,
                                    ./images/toyRB/toyRB_190x143.avif 190w,
                                    ./images/toyRB/toyRB_320x240.avif 320w,
                                    ./images/toyRB/toyRB_380x285.avif 380w
                                "
								type="image/avif" />
							<img
								class="rounded-lg m-4 mx-auto"
								style="max-width: 190px"
								src="./images/toyRB/toyRB_160x120.jpg"
								alt="kids toys"
								width="160"
								height="120" /></picture>
					</div>
				</main>
			</section>
			<section class="section-wrapper blue-on-white">
				<div id="therapist" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGTherapist svgClass={'section-head-svg'} />
					<h1 class="section-head-text">THERAPISTS</h1>
					<SVGTherapist svgClass={'section-head-svg'} />
				</div>
				<div class="grid-container blue-on-white">
					<div class="grid-cols-wrapper">
						<div class="grid-2cols">
							<div class="grid-card gray-on-blue">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<SVGTherapist svgClass={'grid-card-svg'} />
										<h2 class="grid-card-title">Occupational Therapist</h2>
									</div>
									<div class="grid-card-text mb-2">
										<picture
											><source
												srcset="
                                                    ./images/therapist-elsje/elsje200x253.webp 200w,
                                                    ./images/therapist-elsje/elsje300x380.webp 300w,
                                                    ./images/therapist-elsje/elsje400x506.webp 400w,
                                                    ./images/therapist-elsje/elsje600x760.webp 600w
                                                "
												type="image/webp" />
											<source
												srcset="
                                                    ./images/therapist-elsje/elsje200x253.avif 200w,
                                                    ./images/therapist-elsje/elsje300x380.avif 300w,
                                                    ./images/therapist-elsje/elsje400x506.avif 400w,
                                                    ./images/therapist-elsje/elsje600x760.avif 600w
                                                "
												type="image/avif" />
											<img
												class="w-4/5 mx-auto rounded-md"
												style="max-width: 300px"
												src="./images/therapist-elsje/elsje300x380.jpg"
												alt="Elsje Stuiver"
												width="300"
												height="380" /></picture>
										<p class="font-bold text-xl text-center tracking-wider" aria-hidden="true">
											Elsje Stuiver
										</p>
										<div class="text-left mt-4">
											Following an
											<a class="views-link" href="#about-ot" target="_self">Occupational Therapy</a>
											degree from the University of Pretoria in 2008, Elsje obtained post-graduate qualifications
											in Sensory Integration and DIR Floortime.
											<div class="mt-2">
												She is currently enrolled for an Honours degree in<a
													class="views-link"
													href="#about-aac"
													target="_self"
													>Augmentative and Alternative Communication (AAC)
												</a>at the University of Pretoria.
											</div>
											<p>
												She has worked in paediatric private practice in South Africa and the United
												Kingdom, delivering services to schools, nurseries, special education
												centres and orphanages.
											</p>
											<p>
												Elsje is familiar working in multi-disciplinary settings with other
												health-care professionals on aspects such as communication, relationship
												building, behavioural modification, play and environmental adaptation.
											</p>
											<p>
												She is fluent in English and Afrikaans and can provide therapy, consultation
												and feedback in both languages.
											</p>
											<p>
												She has worked extensively with infants and children with special
												educational needs, learning difficulties, Attention Deficit Disorder, global
												developmental delay and sensory processing dysfunction.
											</p>
											<p>
												Her specialist interest in Autism Spectrum Disorder has led her to complete
												a variety of post-graduate courses on this topic.
											</p>
											<p>
												Elsje believes in family involvement and education. She actively encourages
												parents and teachers to engage in the child’s therapy process.
											</p>
											<p>
												She aims to provide needs-specific, family-orientated and play-based input
												in order to support each child in reaching their full potential.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-2cols">
							<div class="grid-card gray-on-blue">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<SVGTherapist svgClass={'grid-card-svg'} />
										<h2 class="grid-card-title">Occupational Therapist</h2>
									</div>
									<div class="grid-card-text mb-2">
										<picture
											><source
												srcset="
                                                    ./images/therapist-sharon/sharon200x253.webp 200w,
                                                    ./images/therapist-sharon/sharon300x380.webp 300w,
                                                    ./images/therapist-sharon/sharon400x506.webp 400w,
                                                    ./images/therapist-sharon/sharon600x760.webp 600w
                                                "
												type="image/webp" />
											<source
												srcset="
                                                    ./images/therapist-sharon/sharon200x253.avif 200w,
                                                    ./images/therapist-sharon/sharon300x380.avif 300w,
                                                    ./images/therapist-sharon/sharon400x506.avif 400w,
                                                    ./images/therapist-sharon/sharon600x760.avif 600w
                                                "
												type="image/avif" />
											<img
												class="w-4/5 mx-auto rounded-md"
												style="max-width: 300px"
												src="./images/therapist-sharon/sharon300x380.jpg"
												alt="Sharon Lewis"
												width="300"
												height="380" /></picture>
										<p class="font-bold text-xl text-center tracking-wider" aria-hidden="true">
											Sharon Lewis
										</p>
										<div class="text-left mt-4">
											Sharon joined us during 2023. She is a passionate and experienced Paediatric
											Occupational Therapist who qualified at the University of Kwa-Zulu Natal in
											2007.
											<p>
												Since qualifying, she has worked in South Africa and more than fourteen
												years in the United Kingdom as a Paediatric Occupational Therapist in
												private practice, local health trusts, community centres and specialist
												schools.
											</p>
											<p>
												Sharon has worked with children of all ages with varying educational needs
												and learning difficulties, including Autism, ADHD, Sensory Processing
												Dysfunction and other developmental challenges.
											</p>
											<p>
												She has a particular interest in autism, has post-graduate training in
												Sensory Integration and has completed other relevant training courses such
												as Therapeutic Listening,
												<a
													class="views-link"
													href="https://scerts.com/"
													target="_blank"
													rel="noopener"
													>SCERTS<span class="sr-only">
														, Warning, screen readers, this is an external link
													</span></a>
												and DIR/Floortime.
											</p>
											<p>
												Sharon takes a holistic approach to therapy and uses a combination of
												therapeutic interventions to ensure that her input is targeted and
												functional.
											</p>
											<p>
												She works with children, families and other key role players (e.g. teachers)
												to integrate therapy into daily life.
											</p>
											<p>
												As a mother of two busy little boys, Sharon understands the pressures of
												parenting and the desire to support one’s child in every possible way.
											</p>
											<p>
												Her experiences as a mother have given her a hands-on understanding of
												childhood development. She feels that this has helped her be more patient,
												compassionate and realistic in supporting parents to carry out therapy
												recommendations within the home setting.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="section-wrapper blue-on-gray">
				<div id="services" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGServices svgClass={'section-head-svg'} />
					<h1 class="section-head-text">SERVICES</h1>
					<SVGServices svgClass={'section-head-svg'} />
				</div>
				<div class="grid-container blue-on-gray">
					<div class="grid-cols-wrapper">
						{#each servicesCards as servicesCard}
							<div class="grid-4cols">
								<!-- eslint-disable svelte/no-at-html-tags -->
								<div class="grid-card blue-on-white">
									<div class="grid-card-top-outer">
										<div class="grid-card-top-inner">
											<div>
												{@html servicesCard.iconHTML}
											</div>
											<h2 class="grid-card-title">{servicesCard.title}</h2>
										</div>
										<div class="grid-card-text">
											{@html servicesCard.bodyHTML}
										</div>
									</div>
									<a
										href="{base}/{servicesCard.link}"
										target="_self"
										class="grid-card-btn white-on-blue">{@html servicesCard.buttonHTML}</a>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
			<section class="section-wrapper blue-on-white">
				<div id="about" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGAbout svgClass={'section-head-svg'} />
					<h1 class="section-head-text">ABOUT</h1>
					<SVGAbout svgClass={'section-head-svg'} />
				</div>
				<div class="grid-container bg-white">
					<div class="grid-cols-wrapper">
						<div class="grid-2cols">
							<div class="grid-card gray-on-blue">
								<div class="section-id" id="about-ot" />
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<div>
											<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
												<title>OT icon</title>
												<path
													d="M45.2 30.6c-.9-.8-2.3-.7-3.3 0l-7 5.7a5 5 0 0 1-3.1 1h-9c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2h6c1.2 0 2.3-.8 2.5-2 .3-1.6-.9-2.9-2.4-2.9H16.7a9 9 0 0 0-5.7 2l-3.5 2.9H3.2c-.6 0-1.2.5-1.2 1.2v7.3c0 .7.6 1.3 1.2 1.3h27.3c1.1 0 2.2-.4 3-1.1l11.6-9.2c1.1-1 1.2-2.7.1-3.8z" />
												<g id="child-jumping">
													<path
														d="M30.8 7.2C30.8 5.4 32.2 4 34 4s3.2 1.4 3.2 3.2c0 1.7-1.4 3.1-3.2 3.1s-3.2-1.4-3.2-3.1zm2 18.9l.6-5.8h1.8l.6 5.8h3.5l-.6-10.9 4.1-7.5h-3.5l-3 4h-4.6l-3-4h-3.5l4.7 7.5-.6 10.9zm-3.5 0c0 1.1 3.5 1.1 3.5 0zm6.5 0c0 1.1 3.5 1.1 3.5 0zm7-18.4c1.1-1.7-2.4-1.7-3.5 0zm-17.6 0c-1.1-1.7 2.4-1.7 3.5 0z" />
												</g>
											</svg>
										</div>
										<h2 class="grid-card-title">About Occupational Therapy</h2>
									</div>
									<div class="grid-card-text">
										<div class="text-left mb-2">
											<p>
												Occupational Therapy (OT) is an allied health profession, focused on
												improving people's ability to participate in their
												<span class="font-bold italic">Occupations.</span>
											</p>
											<p>
												<span class="font-bold italic">Occupations</span> are the everyday activities
												that provide meaning to our lives, ranging from self-care tasks such as dressing
												and eating, to attending work or school and the ability to engage in leisure
												and social activities.
											</p>
											<p>
												During Occupational Therapy, the client is encouraged to take part in the
												therapy process by participating in structured and unstructured activities.
											</p>
											<p>
												Occupational Therapists are trained in activity-analysis and can adapt and
												develop activities, to be specific for each client's individual needs.
											</p>
											<p>
												Occupational Therapists aim to minimise the environmental barriers that
												their clients experience, to increase their client's participation in
												meaningful tasks.
											</p>
										</div>
									</div>
								</div>
								<a href="{base}/about-ot" target="_self" class="grid-card-btn blue-on-white"
									>Read more <span class="sr-only">about Occupational Therapy</span>...</a>
							</div>
						</div>
						<div class="grid-2cols">
							<div class="grid-card gray-on-blue">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<div>
											<svg class="grid-card-svg" viewBox="0 0 24 24" aria-hidden="true">
												<title>Autism Puzzle icon</title>
												<path
													d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" />
											</svg>
										</div>
										<h2 class="grid-card-title">Autism Spectrum Disorder</h2>
									</div>
									<div class="grid-card-text">
										<p><span class="font-bold">From Autism South Africa:</span></p>
										<div class="text-left italic">
											<p>
												Autism spectrum disorder (ASD) and autism are both general terms for a group
												of complex disorders of brain development.
											</p>
											<p>
												ASD is a developmental disability and people with ASD may communicate,
												interact, behave and learn in ways that are different from most other
												people. The learning, thinking, and problem-solving abilities of people with
												ASD can range from gifted to severely impaired.
											</p>
											<p>
												Some people with ASD need high support (a lot of help and intensive
												intervention) while others need low support (less help and less intensive
												intervention).
											</p>
											<p>
												Autism spectrum disorder (ASD) is chararacterized, in varying degrees, by
												difficulties in social interaction, verbal and nonverbal communication,
												repetitive behaviours and differences in sensory perception.
											</p>
										</div>
									</div>
								</div>
								<a href="{base}/about-autism" target="_self" class="grid-card-btn blue-on-white"
									>Read more <span class="sr-only">about autism spectrum disorder</span>...</a>
							</div>
						</div>
					</div>
					<div class="grid-cols-wrapper">
						<div class="grid-2cols">
							<div class="@container grid-card gray-on-blue">
								<div class="section-id" id="about-aac" />
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<div>
											<svg class="grid-card-svg" viewBox="0 0 64 64" aria-hidden="true">
												<path
													d="M20 0c1 1 1 2-1 5-1 1-2 3-3 5h0c0 1 0 1 1 0l3-3h0c1 0 2-1 2-1 2-1 3-1 4-2h0c2 0 3 1 3 3 0 0-1 1-2 1l-1 1h-1c-1 1-2 1-2 2h0c-1 0-2 1-2 2h0c-1 0-1 1-2 1h0 1 6 0c5 0 9 4 7 6 0 1-1 1-2 0-2-1-4-2-6-2-1 0-3 0-4 1h0c-1 0-1 0 0 1h1 0 1 0 1 0c2 1 3 1 4 2h0c1 1 2 3 3 4h0c1 3 1 5 0 5-1 1-1 0-2-1-1-3-3-5-5-5h0-2 1c-5 1-7 8-4 11 1 1 2 2 4 2s4-2 5-3h0c1-2 2-3 3-2 2 0-1 5-4 8 0 0-1 1-2 1h0-1-1c-2 1-5 1-7 1h0c-5 0-5 0-8 3 0 0-1 1-2 1 0 1 0 1-1 0-3-2-5-6-5-10h0c0-1 0-1 1-2 2-1 5-4 5-5 0 0 1-2 1-3h0v-1h0v-3c1-2 1-4 2-6h0c2-6 4-11 8-15h0c1-2 3-2 3-2zm39 17c2 1 4 4 5 7h0v4h0l-2 2c-1 0-2 1-2 2-1 0-1 1-1 1-1 0-1 1-1 1v1c0 1-1 2-1 2 0 2 0 5-1 7 0 2-1 4-2 7l-3 6h0l-1 1c-2 4-6 7-6 6-1-1-1-2 1-4 1-1 1-3 2-4h0c0-1 1-2 1-2h0c0-1 0 0-1 0-1 1-3 2-5 3v1h0c-1 0-3 1-3 1-1 1-1 1-2 1h0c-1 0-1-1-2-1 0-1 0-2 1-3h0 1 0l1-1h1c2-1 4-3 5-5h0 1-3 0c-2 1-4 0-6 0h0c-4-1-7-4-5-6 0-1 1-1 2 0h1 0v1h2 0c1 1 2 1 3 1s2 0 3-1h0 1c1 0 0-1 0-1-2 0-3 0-5-1h0c-1 0-2-2-3-3h0-1c-1-2-1-3-2-5h0c0-2 1-3 2-2l1 1c2 4 4 6 8 5 2-1 4-5 4-9h0c-1-3-5-4-8-3-1 1-3 2-4 3h0c0 1-1 2-1 2-1 0-2-1-1-3h0c0-1 0-1 1-2h0c0-1 1-2 2-3h0c3-2 5-3 7-3h0 7c1 0 3 0 4-1h0c2-1 3-2 4-4h0l1 1z" />
											</svg>
										</div>
										<h2 class="grid-card-title">
											A<span class="hidden @[440px]:inline tracking-tight">ugmentative</span>
											A<span class="hidden @[440px]:inline tracking-tight">lternative</span>
											C<span class="hidden @[440px]:inline tracking-tight">ommunication</span>
										</h2>
									</div>
									<div class="grid-card-text text-left">
										<p>
											Communication devices, systems, strategies and tools that replace or support
											natural speech are known as
											<span class="font-bold">Augmentative and Alternative Communication (AAC)</span
											>.
										</p>
										<p>
											The first “A” in AAC stands for
											<span class="font-bold">Augmentative</span>.
										</p>
										<div>
											When you augment something, you add to it.
											<div>
												Augmentative communication adds something to the communication (eg.
												sign-language, pictures or a letter board) to make it more understandable.
											</div>
										</div>
										<p>
											The second “A” in AAC stands for
											<span class="font-bold">Alternative</span>.
										</p>
										<div>
											If a person is not able to speak or if their speech is difficult to
											understand, they need a different (alternative) way to communicate.
										</div>
									</div>
								</div>
								<a href="{base}/about-aac" target="_self" class="grid-card-btn blue-on-white"
									>Read more
									<span class="sr-only">about augmenative alternative communication</span>...</a>
							</div>
						</div>
						<div class="grid-2cols">
							<div class="grid-card gray-on-blue">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<div>
											<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
												<title>Concentration icon</title>
												<path d="M24,5 44,5 24,13Z M24,43 4,43 24,35" />
												<circle stroke-width="11" fill="none" cx="24" cy="24" r="14" />
											</svg>
										</div>
										<h2 class="grid-card-title">Attention and Concentration</h2>
									</div>
									<div class="grid-card-text">
										<div class="text-left mb-2">
											<p>
												Children who struggle with attention and concentration are often described
												as:
											</p>
											<ul class="views-list-item">
												<li>
													Having trouble completing everyday tasks such as homework, schoolwork,
													chores or paperwork.
												</li>
												<li>Thinking about or doing other things than the task at hand.</li>
												<li>
													Over-aroused or difficulty dealing with normal sights and sounds in their
													environment.
												</li>
												<li>
													Untidy - Rooms, closets, desks, books and bags are frequently a disaster.
												</li>
												<li>
													They tend to be late and have trouble predicting how long things will
													take.
												</li>
												<li>
													Chores and school assignments put off to the last minute, often not
													completed on time or at all.
												</li>
												<li>Overly affectionate or talkative.</li>
												<li>
													Impulsive and often doing or saying before thinking. Easily angered or
													excited.
												</li>
											</ul>
										</div>
									</div>
								</div>
								<a href="{base}/about-attention" target="_self" class="grid-card-btn blue-on-white"
									>Read more
									<span class="sr-only">about attention and concentration</span>...</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="section-wrapper blue-on-gray">
				<div id="media" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGMedia svgClass={'section-head-svg'} />
					<h1 class="section-head-text">MEDIA</h1>
					<SVGMedia svgClass={'section-head-svg'} />
				</div>
				<div class="grid-container blue-on-gray">
					<div class="grid-cols-wrapper">
						{#each mediaCards as mediaCard}
							<div class="grid-4cols lg:w-1/3">
								<!-- eslint-disable svelte/no-at-html-tags -->
								<div class="grid-card blue-on-white">
									<div class="grid-card-top-outer">
										<div class="grid-card-top-inner">
											<div>
												{@html mediaCard.iconHTML}
											</div>
											<h2 class="grid-card-title">{mediaCard.title}</h2>
										</div>
										<div class="grid-card-text">
											{@html mediaCard.bodyHTML}
										</div>
									</div>
									<a
										href="{base}/{mediaCard.link}"
										target="_self"
										class="grid-card-btn white-on-blue">
										{@html mediaCard.buttonHTML}
									</a>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
			<section class="section-wrapper blue-on-white">
				<div id="contact" class="section-id">&nbsp;</div>
				<div class="section-head"><h1 class="section-head-text">CONTACT US</h1></div>
				<div class="grid-container blue-on-white">
					<div class="grid-cols-wrapper">
						<div class="grid-2cols">
							<div class="grid-card text-blue-800 bg-neutral-100 relative">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<h2 class="grid-card-title">Contact Details</h2>
									</div>
									<div class="grid-card-text">
										<div>Mon to Fri 08h00 to 16h30</div>
										<div>We work on a pay per appointment basis</div>
										<div>Credit and Debit card facilities available</div>
										<div>Clients submit their own claims to their medical aid</div>
										<div class="flex items-center w-full justify-center mt-2">
											<SVGTelephone svgClass={'w-8 mr-2'} />
											Phone: (064) 899 4748
									</div>
									<div class="flex items-center w-full justify-center">
										<SVGContact svgClass={'w-8 mr-2'} />
										 Email : info@kidzcandurban.com
									</div>
										<p class="font-bold text-lg mt-6">Send us a message by email</p>
										<form class="text-left" action="https://formspree.io/f/xvoypqwd" method="POST">
											<label id="name-label" for="name-input"
												>Type your name:
												<input
													id="name-input"
													class="w-full py-1 px-2 text-neutral-900 border border-blue-800 rounded"
													placeholder="Your name"
													name="name"
													type="text"
													required="" /></label>
											<label id="email-label" for="email-input"
												>Type your email address:
												<input
													id="email-input"
													class="w-full py-1 px-2 text-neutral-700 border border-blue-700 rounded"
													placeholder="Your email address"
													name="_replyto"
													type="email"
													required="" /></label>
											<label id="message-label" for="message-input"
												>Type your message:
												<textarea
													id="message-input"
													class="w-full py-1 px-2 text-left text-neutral-700 border border-blue-700 rounded"
													rows="5"
													placeholder="Provide a telephone number for a telephonic response"
													name="message"
													required="" />
											</label>
											<input type="text" name="_gotcha" style="display: none" aria-hidden="true" />
											<button
												class="block mx-auto my-2 text-center text-sm p-2 font-semibold rounded-md gray-on-blue"
												type="submit"
												value="Send">
												Send Message
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="grid-2cols">
							<div class="grid-card text-blue-700 bg-neutral-100">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<h2 class="grid-card-title">Location</h2>
									</div>
									<div class="grid-card-text">
										<div>Whizz Kidz Special Needs Centre</div>
										<div>5 Gordon Road, Hatton Estates, Pinetown, South Africa</div>
										<p>On Google maps type in:</p>
										<div class="mb-2">
											<span class="font-bold">5 Gordon Road, Pinetown</span>
										</div>
										<a href="{base}/googlemap" target="_self"
											><picture
												><source
													srcset="
                                                        ./images/kcd-map/kcdmap_260x235.webp 260w,
                                                        ./images/kcd-map/kcdmap_320x290.webp 320w,
                                                        ./images/kcd-map/kcdmap_450x407.webp 450w,
                                                        ./images/kcd-map/kcdmap_640x579.webp 640w,
                                                        ./images/kcd-map/kcdmap_900x814.webp 900w
                                                    "
													type="image/webp" />
												<source
													srcset="
                                                        ./images/kcd-map/kcdmap_260x235.avif 260w,
                                                        ./images/kcd-map/kcdmap_320x290.avif 320w,
                                                        ./images/kcd-map/kcdmap_450x407.avif 450w,
                                                        ./images/kcd-map/kcdmap_640x579.avif 640w,
                                                        ./images/kcd-map/kcdmap_900x814.avif 900w
                                                    "
													type="image/avif" />
												<img
													class="mx-auto mt-4 rounded-md w-full"
													src="./images/kcd-map/kcdmap_320x290.jpg"
													alt="Google Map"
													width="450"
													height="407" /></picture
											></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer id="footer-area" aria-label="footer area">
				<div class="py-2 relative w-full border-b border-blue-700 gray-on-blue">
					<div class="flex items-center justify-around text-xs xs:text-sm">
						<div class="text-center">
							<div><span class="font-bold">Website design:</span></div>
							<div>paul@kidzcandurban.com</div>
						</div>
						<div class="text-center">
							<div>©KidzCanDurban</div>
							<div>All rights reserved</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	</div>
</main>
