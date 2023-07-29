/** @type {import('./$types').PageLoad} */
export async function load() {
	let mediaCards = [
		{
			iconHTML: `<svg class="grid-card-svg" viewBox="0 4 48 48" aria-hidden="true">
			<title>Blogger icon</title>
			<path
				d="M24,8 H18 c-6 0 -10 4 -10 10 v12 c0 6 4 10 10 10 h12 c6 0 10 -4 10 -10 v-8 c0 -1.2 -.9 -2 -2 -2 H36 c-1 0 -2 -1 -2 -2 0 -5 -4 -10 -10 -10z m6,24 H18 c-1 0 -2 -1 -2 -2 s1 -2 2 -2 h12 c1 0 2 1 2 2 s-1 2 -2 2z m-5,-16 c1 0 2 1 2 2 s-1 2 -2 2 h-7 c-1 0 -2 -1 -2 -2 s1 -2 2 -2 h7z" /></svg>`,
			title: 'KidzCanDurban Blog',
			bodyHTML: `Read our blog`,
			link: `media-blog`,
			buttonHTML: `<span class="sr-only">Read our</span>Blog Posts...<span class="sr-only">Warning, this is an external link not suited to screen readers
			</span>`
		},
		{
			iconHTML: `<svg class="grid-card-svg w-28 -mt-4 sm:mt-0 sm:w-36"
			viewBox="0 0 144 48"
			aria-hidden="true">
			<title>5Star icon</title>
			<path d="M13,24 18.5,42 3.5,31.5 22.5,31.5 7.5,42z" />
			<path d="M37,15 45.3,42 23,26 51,26 28.7,42z" />
			<path d="M71,6 82,42 52,21 90,21 60,42z" />
			<path d="M105,15 113.3,42 91,26 119,26 96.7,42z" />
			<path d="M129,24 134.5,42 119.5,31.5 138.5,31.5 123.5,42z" /></svg>`,
			title: 'Client Reviews',
			bodyHTML: `<span class="font-bold">Rating average: 5 stars</span> 
		 			<br /><span>from 13 reviews</span>`,
			link: `media-reviews`,
			buttonHTML: `<span class="sr-only">Read our client</span>Reviews ...`
		},
		{
			iconHTML: `<svg class="grid-card-svg" viewBox="0 6 48 48" aria-hidden="true">
		<title>Lock icon</title>
		<path d="M35 19h-3v-4c0-5-3-9-8-9s-8 4-8 8v5h-2c-2 0-4 1-4 3v17c0 2 2 4 4 4h21c1 0 3-2 3-4V22c0-2-2-3-3-3zM25 30v6s0 1-1 1-1-1-1-1v-6c-1-1-2-2-2-3 0-2 1-3 3-3 1 0 3 1 3 3 0 1-1 2-2 3zm5-11H18v-5c0-1 1-3 2-4s2-2 4-2 3 1 4 2 2 3 2 4v5z" /></svg>`,
			title: 'Privacy Policy',
			bodyHTML: `<span class="font-bold">South African POPI Act</span>
					<br /><span>July 2021</span>`,
			link: `media-privacy`,
			buttonHTML: `<span class="sr-only">Read our privacy</span>Policy ...`
		}
	];

	return { mediaCards };
}
