/** @type {import('./$types').PageLoad} */
export async function load() {
	const servicesCards = [
		{
			title: 'OT Assessment',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden=true>
			<title>Assessment icon</title>
			<circle cx="14" cy="12.5" r="3" />
			<path d="M8,20 C8,17 20,17 20,20Z M20,20 20,22.5 8,22.5 8,20Z" />
			<path stroke-width="2"
				d="M24,12 41,12 M24,17 41,17 M24,22 41,22 M7,27 41,27 M7,32 41,32 M7,37 41,37" />
			<path stroke-width="2" fill="none" d="M6,6 42,6 44,8 44,40 42,42 6,42 4,40 4,8Z" />
			</svg>`,
			bodyHTML: `An assessment will typically be the first step in your child's and family's Occupational Therapy journey`,
			link: `services-ot-assessment`,
			buttonHTML: `Read more <span class="sr-only">about OT Assessments</span>...`
		},
		{
			title: 'Sensory Integration',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>Sensory Integration icon</title>
			<path stroke-width="2"
				d="M33,24 41,27 M31,16 40,8 M25,32 27,40 M14,29 8,35 M14,18 7,14" />
			<circle cx="23" cy="22" r="7" />
			<circle cx="41" cy="27" r="3" />
			<circle cx="40" cy="8" r="4" />
			<circle cx="27" cy="40" r="4" />
			<circle cx="8" cy="35" r="3" />
			<circle cx="7" cy="14" r="4" />
		</svg>`,
			bodyHTML: `Sensory Integration is a post-graduate field of study that is specific to Occupational Therapy`,
			link: `services-sensory-int`,
			buttonHTML: `Read more <span class="sr-only">about Sensory Integration</span>...`
		},
		{
			title: 'Sensory Diet',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>Sensory Diet icon</title>
			<path d="M15,20 C16,17 33,17 33,20Z M15,20 15,33 19,33 19,44 29,44 29,33 33,33 33,20Z " />
			<path fill="None" d="M16,12 C14,0 34,0 32,12" />
			<path d="M16,10 16,12 17.5,12 17.5,10Z M30.5,10 30.5,12 32,12 32,10Z" />
			<circle cx="24" cy="11" r="5" /></svg>`,
			bodyHTML: `A personalised activity plan that regulates the sensory input that a child needs to stay focused and organised`,
			link: `services-sensory-diet`,
			buttonHTML: `Read more <span class="sr-only">about Sensory Diets</span>...`
		},
		{
			title: 'DIR & Floortime',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>Floortime icon</title>
			<path d="M4 45c-1 0-2-1-2-1-1-1-1-2-1-3l1-12v-2c1-1 2-1 2-1h3c1 0 1 1 2 1 0 1 1 2 1 3-2-1 0 1 1 2l5-3c1 0 2 0 2 1s0 3-1 3l-5 3h-2l-2-1 1 4c1 0 3-1 4-1h1l6 3c1 0 2 2 1 3 0 1-1 2-2 1l-6-2c-3 1-4 1-5 1-2 1-3 1-4 1zm34.553-32.204c1.932-.518 3.346-2.967 2.311-6.831-.776-2.898-3.485-5.278-5.417-4.76-2.898.776-4.053 4.192-3.277 7.09 1.035 3.864 3.485 5.278 6.383 4.501zM6.564 24.981c1.992.174 4.159-1.644 4.421-4.632s-1.557-5.155-3.549-5.33-4.159 1.644-4.421 4.632 1.557 5.155 3.549 5.33zM44 39l-8 1 6-1c2-1 2-2 2-4V20c0-1 0-3-1-4-1 0-2-1-3-1h-4c-1 0-2 1-3 2 0 0-1 1-1 3 4-1-2 2-2 3l-6-4c-1 5-3 4-2 5l6 5h3l3-3v5l-2 4-5 2c-2 1-3 3-3 5 0 3 2 4 4 4h16c1 0 3-1 3-3s-2-4-3-4zM21.945 18.428s-1.991 5.481-2.182 4.499c-2.345-1.582-2.726-3.545-3.108-5.508.791-1.172 1.772-1.363 2.945-.572 0 0 2.154.6 2.345 1.582z" /></svg>`,
			bodyHTML: `Individual sessions to develop essential skills for communication, relationships and academic performance`,
			link: `services-dir-floortime`,
			buttonHTML: `Read more <span class="sr-only">about D I R and Floor time</span>...`
		},
		{
			title: 'Visual Schedules',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 44 44"
			aria-hidden="true">
			<title>visual schedule icon</title>
			<path fill-rule="evenodd" d="M10 23a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Zm4 0v2h-2v-2h2Zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm2 2h-2v2h2v-2Zm4 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Zm2 0h2v2h-2v-2Zm-16 6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm0 2v2h2v-2h-2Zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Zm2 0h2v2h-2v-2Z" clip-rule="evenodd" />
			<path d="M35 31.5a1 1 0 0 1 1 1v2.086l.707.707a1 1 0 0 1-1.414 1.414L34 35.414V32.5a1 1 0 0 1 1-1Z" />
			<path fill-rule="evenodd" d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-1H9a1 1 0 0 0-1 1v4h26v-4a1 1 0 0 0-1-1h-3V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.992 6.992 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3V7Zm16 28a7.001 7.001 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7.001 7.001 0 0 1-.29-2Zm7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" clip-rule="evenodd" />
			<path d="M27 13a1 1 0 0 1-1-1v-1H16V9h10V7a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z" /></svg>`,
			bodyHTML: `Visual schedules can help children understand and follow daily routines or sequential activities`,
			link: `services-visual-schedules`,
			buttonHTML: `Read more <span class="sr-only">about Visual Schedules</span>...`
		},
		{
			title: 'Social Stories',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 32 32"
			stroke-width="2"
			aria-hidden="true">
			<title>social stories icon</title>
			<path fill="#FFFFFF" d="M16 28c-.999-1.998-3.657-2-4-2c-2 0-5 2-8 2c-1 0-2-.896-2-2V8c0-1.104 1-2 2-2c3.255 0 6-2 8-2c3 0 4 1.896 4 3v19z" />
			<path fill="#FFFFFF" d="M16 28c.999-1.998 3.657-2 4-2c2 0 5 2 8 2c1 0 2-.896 2-2V8c0-1.104-1-2-2-2c-3.256 0-6-2-8-2c-3 0-4 1.896-4 3v19z" /></svg>`,
			bodyHTML: `Social stories are personalised tools to help children understand social situations and events`,
			link: `services-social stories`,
			buttonHTML: `Read more <span class="sr-only">about Social Stories</span>...`
		},
		{
			title: 'Picky Eaters',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 128 128" aria-hidden="true">
			<title>Knife and Fork icon</title>
			<path d="M123.85 113.04c-1.92-4.63-3.9-9.21-5.82-13.8c-6.03-14.35-11.35-29.2-17.44-43.61c-6.05-14.3-10.89-29.05-16.58-43.48c-1.18-3-3.22-9.03-6.87-9.66c-7.85-1.35-8.04 10.17-8.2 14.89c-.27 8.56.86 17.05 1.54 25.57c.59 7.29.92 14.65 2.71 21.77c1.35 5.34 3.49 11.09 7.77 14.79c2.15 1.86 4.98 2.63 7.79 2.37c2.92-.26 5.63-2.29 8.61-1.96c.77.09 1.59.56 2.1 1.15c1.62 1.91 2.06 5.54 2.63 7.91c1.85 7.63 3.68 15.35 5.97 22.86c1.39 4.54 3.21 10.34 7.22 13.28c2.45 1.78 6.48 2.81 8.97.58c3.73-3.31 1.14-8.98-.4-12.66zM52.52 7.05c-1.43.19-2.22 5.09-2.67 6.54c-.79 2.61-1.55 6.14-2.77 9.47c-.01.03-.02.05-.03.07c-.09.23-.18.48-.29.74c-.11.25-.22.49-.32.74c-.72 1.59-1.77 3.42-3.01 4.1c-1.41.78-3.86-.12-4.39-1.63c-.87-2.46.48-7.07.43-7.23c.53-2.21 2-8.93 2.71-13.43c.05-.34.52-2.34-1.17-3.02c-.79-.31-1.84.18-2.47 1.42c-1.86 3.66-4.61 10.85-4.97 12c-.04.11-.08.24-.11.35c0 0-.01.02-.01.03c-.07.24-1.9 5.96-3.85 7.58c-1.02.85-3.16 1.16-4.77-.46c-.64-.65-.93-1.65-1.05-2.67c-.27-6.97 3.42-13.58 4.58-16.89c.33-.93 2.01-3.88.13-4.27c-2.83-.59-9.73 10.76-11.13 13.41c-3.46 6.6-5.71 14.04-4.78 21.55c.52 4.16 2.68 8.03 5.98 10.51c1.46 1.09 3.15 2.05 5 2.84c-4.97 15.78-10.22 32.23-13.42 41.31c-2.42 6.83-4.96 13.71-6.75 20.74c-1.07 4.2-2.45 9.18-.74 13.4c1.79 4.41 8.09 4.29 10.83.38c3.08-4.41 4.09-10.24 5.89-19.37c1.8-9.14 4.4-21.57 5.79-28.26c2.05-9.85 4.13-18.38 6.15-26.13c5.12.59 10.3-.37 13.95-3.71c1.6-1.46 2.87-3.23 3.92-5.12c1.6-2.86 2.88-6.12 3.56-9.33c.61-2.96 4.38-26.27-.22-25.66z" /></svg>`,
			bodyHTML: `Start a path to happier meal times by understanding picky eaters and how to expand their food choices`,
			link: `services-picky-eaters`,
			buttonHTML: `Read more <span class="sr-only">about Picky Eaters</span>...`
		},
		{
			title: 'Alert Program',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>Alert program icon</title>
			<path d="M18,6 11,25 22,22 17,34 25,31 21,44 34,23 26,25 32,15 20,16 27,6" />
			</svg>`,
			bodyHTML: `Developed by Occupational Therapists to teach children self regulation and to support learning and positive behaviour`,
			link: `services-alert-program`,
			buttonHTML: `Read more <span class="sr-only">about our Alert Program</span>...`
		},
		{
			title: 'Handwriting',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>Pencil icon</title>
			<path transform="rotate(45, 24,24)" d="M24,48 22,44 Q24,43 26,44Z M18,34 21,32 24,34 27,32 30,34 27,42 Q 24,41 21,42Z M18,31 21,29 24,31 27,29 30,31 30,12 18,12Z M18,10 30,10 30,2 C30,0 18,0 18,2Z" /></svg>`,
			bodyHTML: `Foundational skills to develop legible, fluent and fast handwriting styles for success in handwriting`,
			link: `services-handwriting`,
			buttonHTML: `Read more <span class="sr-only">about Handwriting</span>...`
		},
		{
			title: 'Skills Development',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>Trophy icon</title>
			<path stroke-width="1" d="M11,7 24,9 38,7 32.5,30.5 14.5,30.5Z M16,43 16,40 32,40 32,43Z M21,30 20,41 28,41 27,30Z" />
			<ellipse fill="none" cx="24" cy="6" rx="13" ry="2" />
			<ellipse cx="23.5" cy="31" rx="9" ry="2" />
			<ellipse cx="24" cy="40" rx="8" ry="2" />
			<ellipse cx="24" cy="43" rx="8" ry="2" />
			<path stroke-width="3" fill="none" d="M36,7 C46,6 46,18 34,20 M12,7 C2,6 2,18 14,20" />
			</svg>`,
			bodyHTML: `Teaching children functional skills to become more independent in everyday activities`,
			link: `services-skills-dev`,
			buttonHTML: `Read more <span class="sr-only">about Skills Development</span>...`
		},
		{
			title: 'School Visits',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>School visit icon</title>
			<path d="M4,15.5 24,4 44,15.5 24,27Z M13,29 C12,37 36,37 35,29Z M13,23 13,30 35,30 35,23 24,29Z M6,17.5 6,28 5,41 9,41 8,28 8,18Z" />
			<circle cx="7" cy="28" r="2.5" /></svg>`,
			bodyHTML: `Observe children in their classroom setting. Establish communication with the child's teachers and educational support staff`,
			link: `services-school-visits`,
			buttonHTML: `Read more <span class="sr-only">about School Visits</span>...`
		},
		{
			title: 'Parent Support',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 0 48 48" aria-hidden="true">
			<title>Family icon</title>
			<path d="M7,44 15,44 15,28 18,28 18,15 4,15 4,28 7,28Z M4,15 Q11,9 18,15Z" />
			<path d="M20,44 26,44 26,38 28,38 28,33 18,33 18,38 20,38Z M18,32 Q23,30 28,32Z" />
			<path d="M34,44 40,44 40,33 45,33 41,14 33,14 29,33 34,33Z M41,14 Q37,11 33,14Z" />
			<circle cx="11px" cy="7px" r="4px" />
			<circle cx="37px" cy="7px" r="4px" />
			<circle cx="23px" cy="27px" r="3px" /></svg>`,
			bodyHTML: `Providing the family with equipment and strategies to best support their child achieve their full potential`,
			link: `services-parent-support`,
			buttonHTML: `Read more <span class="sr-only">about Parent Support</span>...`
		}
	];

	const mediaCards = [
		{
			title: 'KidzCanDurban Blog',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 4 48 48" aria-hidden="true">
			<title>Blogger icon</title>
			<path
				d="M24,8 H18 c-6 0 -10 4 -10 10 v12 c0 6 4 10 10 10 h12 c6 0 10 -4 10 -10 v-8 c0 -1.2 -.9 -2 -2 -2 H36 c-1 0 -2 -1 -2 -2 0 -5 -4 -10 -10 -10z m6,24 H18 c-1 0 -2 -1 -2 -2 s1 -2 2 -2 h12 c1 0 2 1 2 2 s-1 2 -2 2z m-5,-16 c1 0 2 1 2 2 s-1 2 -2 2 h-7 c-1 0 -2 -1 -2 -2 s1 -2 2 -2 h7z" /></svg>`,

			bodyHTML: `Read our blog`,
			link: `media-blog`,
			buttonHTML: `<span class="sr-only">Read our</span>Blog Posts...<span class="sr-only">Warning, this is an external link not suited to screen readers
			</span>`
		},
		{
			title: 'Client Reviews',
			iconHTML: `<svg class="grid-card-svg w-28 -mt-4 sm:mt-0 sm:w-36"
			viewBox="0 0 144 48"
			aria-hidden="true">
			<title>Five Star Curved icon</title>
			<path d="M13,24 18.5,42 3.5,31.5 22.5,31.5 7.5,42z" />
			<path d="M37,15 45.3,42 23,26 51,26 28.7,42z" />
			<path d="M71,6 82,42 52,21 90,21 60,42z" />
			<path d="M105,15 113.3,42 91,26 119,26 96.7,42z" />
			<path d="M129,24 134.5,42 119.5,31.5 138.5,31.5 123.5,42z" /></svg>`,
			bodyHTML: `<span class="font-bold">Rating average: 5 stars</span> 
		 			<br /><span>from 13 reviews</span>`,
			link: `media-reviews`,
			buttonHTML: `<span class="sr-only">Read our client</span>Reviews ...`
		},
		{
			title: 'Privacy Policy',
			iconHTML: `<svg class="grid-card-svg" viewBox="0 6 48 48" aria-hidden="true">
		<title>Lock icon</title>
		<path d="M35 19h-3v-4c0-5-3-9-8-9s-8 4-8 8v5h-2c-2 0-4 1-4 3v17c0 2 2 4 4 4h21c1 0 3-2 3-4V22c0-2-2-3-3-3zM25 30v6s0 1-1 1-1-1-1-1v-6c-1-1-2-2-2-3 0-2 1-3 3-3 1 0 3 1 3 3 0 1-1 2-2 3zm5-11H18v-5c0-1 1-3 2-4s2-2 4-2 3 1 4 2 2 3 2 4v5z" /></svg>`,

			bodyHTML: `<span class="font-bold">South African POPI Act</span>
					<br /><span>July 2021</span>`,
			link: `media-privacy`,
			buttonHTML: `<span class="sr-only">Read our privacy</span>Policy ...`
		}
	];

	return { servicesCards, mediaCards };
}
