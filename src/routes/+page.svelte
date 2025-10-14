<script>
	/* Needed to remove target="_self" from all <a> tags to ensure that user will return to same scroll position after navigation away from the homepage.*/
	import { resolve } from "$app/paths";
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import SVGHome from "$lib/SVGHome.svelte";
	import SVGTherapist from "$lib/SVGTherapist.svelte";
	import SVGServices from "$lib/SVGServices.svelte";
	import SVGAbout from "$lib/SVGAbout.svelte";
	import SVGMedia from "$lib/SVGMedia.svelte";
	import SVGContact from "$lib/SVGContact.svelte";
	import SVGTelephone from "$lib/SVGTelephone.svelte";

	let { data } = $props();
	const { servicesCards, aboutCards, mediaCards } = data;
	// Need this to make this link work in GH Pages build workflows
	const locationLink = `contact-location`;

	onMount(() => {
		if (browser) {
			// Restore scroll position when returning to homepage
			const savedScrollY = parseInt(sessionStorage.getItem("homepage-scroll")) || 0;
			if (savedScrollY) {
				// Wait for page to be fully rendered
				setTimeout(() => {
					window.scrollTo({
						top: savedScrollY,
						behavior: "instant"
					});
				}, 20);
			}
		}
	});
	function handleLinkClick(event) {
		event.preventDefault();
		sessionStorage.setItem("homepage-scroll", Math.round(window.scrollY).toString());
		goto(event.currentTarget.getAttribute("href"));
	}
</script>

<main>
	<div id="home-page">
		<div class="mx-auto w-full max-w-7xl">
			<header
				class="fixed top-0 z-10 flex w-full max-w-7xl items-center justify-between border-b border-neutral-100 bg-white text-neutral-900">
				<div class="flex-column w-full">
					<div class="flex w-full flex-row items-center">
						<picture
							><source
								srcset="
                                    ./images/kcd-logo/small/kcd_logo_with_text_113x45_transparent.webp 113w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_184x74_transparent.webp 184w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_228x92_transparent.webp 228w"
								type="image/webp" />
							<source
								srcset="
                                    ./images/kcd-logo/small/kcd_logo_with_text_113x45_transparent.avif 113w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_184x74_transparent.avif 184w,
                                    ./images/kcd-logo/small/kcd_logo_with_text_228x92_transparent.avif 228w"
								type="image/avif" />
							<img
								class="xs:flex xs:w-24 ml-2 hidden py-1 md:w-28 lg:w-32"
								src="./images/kcd-logo/small/kcd_logo_with_text_113x45_transparent.png"
								alt="Kidzcan logo"
								width="113"
								height="45"
								aria-hidden="true" /></picture>
						<div class="flex-column w-full bg-transparent text-center">
							<h1 class="text-md m-0 font-bold md:text-xl lg:text-2xl">
								Elsje Stuiver - Occupational Therapy
							</h1>
							<div class="m-0 text-xs font-medium md:text-sm lg:text-base" aria-hidden="true">
								Practice no. 0684414
							</div>
						</div>
						<div class="xs:flex xs:w-24 hidden py-1 pl-2 md:w-28 lg:w-32" aria-hidden="true">
							&nbsp;
						</div>
					</div>
					<nav class="n0-on-blue flex w-full flex-row items-center justify-around py-1 lg:py-2">
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
			<div class="top-0 h-16 w-full md:h-20 lg:h-24">&nbsp;</div>
			<section class="section-wrapper blue-on-n200 pt-2 pb-8">
				<div id="home" class="section-id">&nbsp;</div>
				<main class="-mx-4 flex">
					<div
						class="hidden pr-3 pl-6 md:flex md:flex-grow md:flex-col md:justify-around"
						aria-hidden="true">
						<picture
							><source
								srcset="
                                    ./images/kidzLT/kidzLT_110x147.webp 110w,
                                    ./images/kidzLT/kidzLT_160x213.webp 160w,
                                    ./images/kidzLT/kidzLT_190x253.webp 190w,
                                    ./images/kidzLT/kidzLT_320x427.webp 320w,
                                    ./images/kidzLT/kidzLT_380x507.webp 380w"
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzLT/kidzLT_110x147.avif 110w,
                                    ./images/kidzLT/kidzLT_160x213.avif 160w,
                                    ./images/kidzLT/kidzLT_190x253.avif 190w,
                                    ./images/kidzLT/kidzLT_320x427.avif 320w,
                                    ./images/kidzLT/kidzLT_380x507.avif 380w"
								type="image/avif" />
							<img
								class="mx-auto rounded-lg shadow-xl"
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
                                    ./images/kidzLM/kidzLM_380x507.webp 380w"
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzLM/kidzLM_110x147.avif 110w,
                                    ./images/kidzLM/kidzLM_160x213.avif 160w,
                                    ./images/kidzLM/kidzLM_190x253.avif 190w,
                                    ./images/kidzLM/kidzLM_320x427.avif 320w,
                                    ./images/kidzLM/kidzLM_380x507.avif 380w"
								type="image/avif" />
							<img
								class="mx-auto rounded-lg shadow-xl"
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
                                    ./images/toyLB/toyLB_380x285.webp 380w"
								type="image/webp" />
							<source
								srcset="
                                    ./images/toyLB/toyLB_110x83.avif  110w,
                                    ./images/toyLB/toyLB_160x120.avif 160w,
                                    ./images/toyLB/toyLB_190x143.avif 190w,
                                    ./images/toyLB/toyLB_320x240.avif 320w,
                                    ./images/toyLB/toyLB_380x285.avif 380w"
								type="image/avif" />
							<img
								class="mx-auto rounded-lg shadow-xl"
								style="max-width: 190px"
								src="./images/toyLB/toyLB_160x120.jpg"
								alt="kids toys"
								width="160"
								height="120" /></picture>
					</div>
					<div
						class="blue-on-n0 xs:mt-1 mx-auto rounded-lg px-4 pb-4 text-sm font-semibold shadow-xl sm:text-base"
						style="width: 96%; max-width: 460px">
						<div class="flex justify-center">
							<div>
								<picture
									><source
										srcset="
                                            ./images/kcd-logo/large/kcd_logo_with_text_200x81_transparent.webp  200w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_300x121_transparent.webp 300w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_600x242_transparent.webp 600w"
										type="image/webp" />
									<source
										srcset="
                                            ./images/kcd-logo/large/kcd_logo_with_text_200x81_transparent.avif  200w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_300x121_transparent.avif 300w,
                                            ./images/kcd-logo/large/kcd_logo_with_text_600x242_transparent.avif 600w"
										type="image/avif" />
									<img
										class="rounded-sm pt-2"
										style="max-width: 300px"
										src="./images/kcd-logo/large/kcd_logo_with_text_300x121_transparent.png"
										alt="Kidzcan logo"
										width="300"
										height="121" /></picture>
							</div>
						</div>
						<div class="text-center text-xl font-extrabold tracking-tight sm:text-2xl">
							Unlocking your child's potential
						</div>
						<div class="text-center">
							<div class="mt-1">
								We are an Occupational Therapy practice located in Pinetown, Durban, South Africa.
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
							<div class="mt-3 text-center text-base font-extrabold underline sm:text-lg">
								We offer a free telephone consultation
							</div>
							<div>
								During this 15 minute conversation you can share concerns regarding your child with
								one of our Therapists and explore options.
							</div>
						</div>
						<a
							class="n50-on-blue mx-auto mt-4 block w-32 rounded-md p-2 text-center text-sm font-semibold shadow-xs sm:text-base"
							href="#contact">Contact us</a>
					</div>
					<div class="hidden pr-6 pl-3 md:flex md:flex-grow md:flex-col" aria-hidden="true">
						<picture
							><source
								srcset="
                                    ./images/kidzRT/kidzRT_110x147.webp 110w,
                                    ./images/kidzRT/kidzRT_160x213.webp 160w,
                                    ./images/kidzRT/kidzRT_190x253.webp 190w,
                                    ./images/kidzRT/kidzRT_320x427.webp 320w,
                                    ./images/kidzRT/kidzRT_380x507.webp 380w"
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzRT/kidzRT_110x147.avif 110w,
                                    ./images/kidzRT/kidzRT_160x213.avif 160w,
                                    ./images/kidzRT/kidzRT_190x253.avif 190w,
                                    ./images/kidzRT/kidzRT_320x427.avif 320w,
                                    ./images/kidzRT/kidzRT_380x507.avif 380w"
								type="image/avif" />
							<img
								class="m-4 mx-auto rounded-lg shadow-xl"
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
                                    ./images/kidzRM/kidzRM_380x507.webp 380w"
								type="image/webp" />
							<source
								srcset="
                                    ./images/kidzRM/kidzRM_110x147.avif 110w,
                                    ./images/kidzRM/kidzRM_160x213.avif 160w,
                                    ./images/kidzRM/kidzRM_190x253.avif 190w,
                                    ./images/kidzRM/kidzRM_320x427.avif 320w,
                                    ./images/kidzRM/kidzRM_380x507.avif 380w"
								type="image/avif" />
							<img
								class="m-4 mx-auto rounded-lg shadow-xl"
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
                                    ./images/toyRB/toyRB_380x285.webp 380w"
								type="image/webp" />
							<source
								srcset="
                                    ./images/toyRB/toyRB_110x83.avif  110w,
                                    ./images/toyRB/toyRB_160x120.avif 160w,
                                    ./images/toyRB/toyRB_190x143.avif 190w,
                                    ./images/toyRB/toyRB_320x240.avif 320w,
                                    ./images/toyRB/toyRB_380x285.avif 380w"
								type="image/avif" />
							<img
								class="m-4 mx-auto rounded-lg shadow-xl"
								style="max-width: 190px"
								src="./images/toyRB/toyRB_160x120.jpg"
								alt="kids toys"
								width="160"
								height="120" /></picture>
					</div>
				</main>
			</section>
			<section style="content-visibility: auto;" class="section-wrapper blue-on-n50">
				<div id="therapist" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGTherapist svgClass="section-head-svg" />
					<div class="section-head-text">THERAPISTS</div>
					<SVGTherapist svgClass="section-head-svg" />
				</div>
				<div class="grid-container">
					<div class="grid-cols-wrapper">
						<div class="grid-2cols">
							<div class="grid-card n50-on-blue">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<SVGTherapist svgClass="grid-card-svg" />
										<h2 class="grid-card-title">Occupational Therapist</h2>
									</div>
									<div class="grid-card-text mb-2">
										<picture
											><source
												srcset="
                                                    ./images/therapist-elsje/elsje200x253.webp 200w,
                                                    ./images/therapist-elsje/elsje300x380.webp 300w,
                                                    ./images/therapist-elsje/elsje400x506.webp 400w,
                                                    ./images/therapist-elsje/elsje600x760.webp 600w"
												type="image/webp" />
											<source
												srcset="
                                                    ./images/therapist-elsje/elsje200x253.avif 200w,
                                                    ./images/therapist-elsje/elsje300x380.avif 300w,
                                                    ./images/therapist-elsje/elsje400x506.avif 400w,
                                                    ./images/therapist-elsje/elsje600x760.avif 600w"
												type="image/avif" />
											<img
												class="mx-auto w-4/5 rounded-md shadow-xl"
												style="max-width: 300px"
												src="./images/therapist-elsje/elsje300x380.jpg"
												alt="Elsje Stuiver"
												width="300"
												height="380" /></picture>
										<p class="text-center text-xl font-bold tracking-wider" aria-hidden="true">
											Elsje Stuiver
										</p>
										<div class="mt-4 text-left">
											Elsje obtained an
											<a
												class="views-link"
												href={resolve("/home-page-about-ot")}
												onclick={(e) => handleLinkClick(e)}>Occupational Therapy</a>
											degree from the University of Pretoria in 2008 followed by international, post-graduate
											qualifications in
											<a
												class="views-link"
												href={resolve("/services-sensory-int")}
												onclick={(e) => handleLinkClick(e)}>Sensory Integration</a>
											and DIR & Floortime, and an Honours degree in
											<a
												class="views-link"
												href={resolve("/home-page-about-aac")}
												onclick={(e) => handleLinkClick(e)}
												>Augmentative and Alternative Communication (AAC)
											</a>at the University of Pretoria during 2023.
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
												Her specialist interest in <a
													class="views-link"
													href={resolve("/about-autism")}
													onclick={(e) => handleLinkClick(e)}>Autism Spectrum Disorder</a
												>has led her to complete a variety of post-graduate courses on this topic.
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
							<div class="grid-card n50-on-blue">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<SVGTherapist svgClass="grid-card-svg" />
										<h2 class="grid-card-title">Occupational Therapist</h2>
									</div>
									<div class="grid-card-text mb-2">
										<picture
											><source
												srcset="
                                                    ./images/therapist-sharon/sharon200x253.webp 200w,
                                                    ./images/therapist-sharon/sharon300x380.webp 300w,
                                                    ./images/therapist-sharon/sharon400x506.webp 400w,
                                                    ./images/therapist-sharon/sharon600x760.webp 600w"
												type="image/webp" />
											<source
												srcset="
                                                    ./images/therapist-sharon/sharon200x253.avif 200w,
                                                    ./images/therapist-sharon/sharon300x380.avif 300w,
                                                    ./images/therapist-sharon/sharon400x506.avif 400w,
                                                    ./images/therapist-sharon/sharon600x760.avif 600w"
												type="image/avif" />
											<img
												class="mx-auto w-4/5 rounded-md shadow-xl"
												style="max-width: 300px"
												src="./images/therapist-sharon/sharon300x380.jpg"
												alt="Sharon Lewis"
												width="300"
												height="380" /></picture>
										<p class="text-center text-xl font-bold tracking-wider" aria-hidden="true">
											Sharon Lewis
										</p>
										<div class="mt-4 text-left">
											Sharon joined our practice during 2023. She is a passionate and experienced
											Paediatric
											<a
												class="views-link"
												href={resolve("/home-page-about-ot")}
												onclick={(e) => handleLinkClick(e)}>Occupational Therapist</a>
											who qualified at the University of Kwa-Zulu Natal in 2007.
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
												<a
													class="views-link"
													href={resolve("/services-sensory-int")}
													onclick={(e) => handleLinkClick(e)}>Sensory Integration</a>
												and has completed other relevant training courses such as Therapeutic Listening,
												<a
													class="views-link"
													href="https://scerts.com/"
													target="_blank"
													rel="noopener"
													>SCERTS<span class="sr-only">
														, Warning, screen readers, this is an external link
													</span></a>
												and
												<a
													class="views-link"
													href={resolve("/services-dir-floortime")}
													onclick={(e) => handleLinkClick(e)}>DIR & Floortime.</a>
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
			<section style="content-visibility: auto;" class="section-wrapper blue-on-n200">
				<div id="services" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGServices svgClass="section-head-svg" />
					<div class="section-head-text">SERVICES</div>
					<SVGServices svgClass="section-head-svg" />
				</div>
				<div class="grid-container">
					<div class="grid-cols-wrapper">
						{#each servicesCards as servicesCard (servicesCard.id)}
							<div class="grid-4cols">
								<!-- eslint-disable svelte/no-at-html-tags -->
								<div class="grid-card blue-on-n50">
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
										href={resolve(`/${servicesCard.link}`)}
										onclick={(e) => handleLinkClick(e)}
										class="grid-card-btn n0-on-blue">{@html servicesCard.buttonHTML}</a>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
			<section style="content-visibility: auto;" class="section-wrapper blue-on-n50">
				<div id="about" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGAbout svgClass="section-head-svg" />
					<div class="section-head-text">ABOUT</div>
					<SVGAbout svgClass="section-head-svg" />
				</div>
				<div class="grid-container">
					<div class="grid-cols-wrapper">
						{#each aboutCards as aboutCard (aboutCard.id)}
							<div class="grid-2cols @container">
								<!-- eslint-disable svelte/no-at-html-tags -->
								<div class="grid-card n50-on-blue">
									<div class="section-id" id={aboutCard.id}></div>
									<div class="grid-card-top-outer">
										<div class="grid-card-top-inner">
											<div>
												{@html aboutCard.iconHTML}
											</div>
											<h2 class="grid-card-title">
												{#if aboutCard.title == "AAC"}
													<div class="sr-only">Augmentative Alternative Communication</div>
													<div aria-hidden="true">
														A<span class="hidden tracking-tight @[440px]:inline">ugmentative</span>
														A<span class="hidden tracking-tight @[440px]:inline">lternative</span>
														C<span class="hidden tracking-tight @[440px]:inline">ommunication</span>
													</div>
												{:else}
													{aboutCard.title}
												{/if}
											</h2>
										</div>
										<div class="grid-card-text text-left">
											{@html aboutCard.bodyHTML}
										</div>
									</div>
									<a
										href={resolve(`/${aboutCard.link}`)}
										onclick={(e) => handleLinkClick(e)}
										class="grid-card-btn blue-on-n50">
										{@html aboutCard.buttonHTML}
									</a>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
			<section style="content-visibility: auto;" class="section-wrapper blue-on-n200">
				<div id="media" class="section-id">&nbsp;</div>
				<div class="section-head">
					<SVGMedia svgClass="section-head-svg" />
					<div class="section-head-text">MEDIA</div>
					<SVGMedia svgClass="section-head-svg" />
				</div>
				<div class="grid-container">
					<div class="grid-cols-wrapper">
						{#each mediaCards as mediaCard (mediaCard.id)}
							<div class="grid-4cols lg:w-1/3">
								<!-- eslint-disable svelte/no-at-html-tags -->
								<div class="grid-card blue-on-n50">
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
										href={resolve(`/${mediaCard.link}`)}
										onclick={(e) => handleLinkClick(e)}
										class="grid-card-btn n0-on-blue">
										{@html mediaCard.buttonHTML}
									</a>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
			<section style="content-visibility: auto;" class="section-wrapper blue-on-n0">
				<div id="contact" class="section-id">&nbsp;</div>
				<div class="section-head">
					<div class="section-head-text">CONTACT US</div>
				</div>
				<div class="grid-container">
					<div class="grid-cols-wrapper">
						<div class="grid-2cols">
							<div class="grid-card blue-on-n50 relative">
								<div class="grid-card-top-outer">
									<div class="grid-card-top-inner">
										<h2 class="grid-card-title">Contact Details</h2>
									</div>
									<div class="grid-card-text relative">
										<!-- Start of special 2023/2024 closed message (includes position:relative above)-->
										<div
											class="absolute mt-16 mr-1 -rotate-[5deg] rounded-lg bg-red-500 text-left text-white">
											<p class="m-0 px-2 py-1">
												We are sorry to inform that after eight wonderful years, Elsje Stuiver will
												be relocating at the end of 2024.
											</p>
											<p class="m-0 px-2 py-1">
												As a result, this Occupational Therapy practice will be closing at the end
												of November 2024.
											</p>
											<p class="m-0 px-2 py-1">We apologise for any inconvenience caused.</p>
										</div>
										<!-- End of special 2023/2024 closed message -->
										<div>Mon to Fri 08h00 to 16h30</div>
										<div>We work on a pay per appointment basis</div>
										<div>Credit and Debit card facilities available</div>
										<div>Clients submit their own claims to their medical aid</div>
										<div class="mt-2 flex w-full items-center justify-center">
											<SVGTelephone svgClass="w-8 mr-2" />
											Phone: (064) 899 4748
										</div>
										<div class="flex w-full items-center justify-center">
											<SVGContact svgClass="w-8 mr-2" />
											Email : info@kidzcandurban.com
										</div>
										<p class="mt-6 text-lg font-bold">Send us a message by email</p>
										<form class="text-left" action="https://formspree.io/f/xvoypqwd" method="POST">
											<label id="name-label" for="name-input"
												>Type your name:
												<input
													id="name-input"
													class="w-full rounded-sm border border-blue-800 px-2 py-1 text-neutral-900"
													placeholder="Your name"
													autocomplete="name"
													name="name"
													type="text"
													required="" /></label>
											<label id="email-label" for="email-input"
												>Type your email address:
												<input
													id="email-input"
													class="w-full rounded-sm border border-blue-700 px-2 py-1 text-neutral-700"
													placeholder="Your email address"
													autocomplete="email"
													name="_replyto"
													type="email"
													required="" /></label>
											<label id="message-label" for="message-input"
												>Type your message:
												<textarea
													id="message-input"
													class="w-full rounded-sm border border-blue-700 px-2 py-1 text-left text-neutral-700"
													rows="5"
													placeholder="Provide a telephone number for a telephonic response"
													name="message"
													required=""></textarea>
											</label>
											<input type="text" name="_gotcha" style="display: none" aria-hidden="true" />
											<button
												class="n50-on-blue mx-auto my-2 block rounded-md p-2 text-center text-sm font-semibold"
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
							<div class="grid-card blue-on-n50">
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
										<a
											href={resolve(`/${locationLink}`)}
											aria-label="map"
											onclick={(e) => handleLinkClick(e)}
											><picture
												><source
													srcset="
                             ./images/kcd-map/kcdmap_260x235.webp 260w,
                             ./images/kcd-map/kcdmap_320x290.webp 320w,
                             ./images/kcd-map/kcdmap_450x407.webp 450w,
                             ./images/kcd-map/kcdmap_640x579.webp 640w,
                             ./images/kcd-map/kcdmap_900x814.webp 900w"
													type="image/webp" />
												<source
													srcset="
                             ./images/kcd-map/kcdmap_260x235.avif 260w,
                             ./images/kcd-map/kcdmap_320x290.avif 320w,
                             ./images/kcd-map/kcdmap_450x407.avif 450w,
                             ./images/kcd-map/kcdmap_640x579.avif 640w,
                             ./images/kcd-map/kcdmap_900x814.avif 900w"
													type="image/avif" />
												<img
													class="mx-auto mt-4 w-full rounded-md"
													src="./images/kcd-map/kcdmap_320x290.jpg"
													alt="Google Map"
													width="450"
													height="407" />
											</picture>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<footer id="footer-area" aria-label="footer area" style="content-visibility: auto;">
				<div class="n50-on-blue relative w-full border-b border-blue-700 py-2">
					<div class="xs:text-sm flex items-center justify-around text-xs">
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
