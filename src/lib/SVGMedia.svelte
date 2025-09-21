<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [svgClass]
	 * @property {boolean} [ariaHidden]
	 */

	/** @type {Props} */
	let { svgClass = 'index-nav-svg', ariaHidden = true } = $props();
</script>

<!-- Need wrapper div for Safari to render svg properly -->
<div>
	<svg class={svgClass} viewBox="0 0 48 48" aria-hidden={ariaHidden}>
		<title>Media icon</title>
		<path
			d="M24 9c3 0 6 1 8 3s3 4 3 7-1 6-3 7c0-1-1-1-1-2 1-2 2-3 2-5s-1-4-3-6c-1-1-3-2-6-2-2 0-4 1-6 2-1 2-2 4-2 6s1 4 1 5v3c-2-2-3-5-3-8s1-5 3-7 4-3 7-3zm-5 17c1-3 11-2 11 0 0 27-11 26-11 0zm5-12c3 0 5 2 5 5 0 2-2 4-5 4-2 0-4-2-4-4 0-3 2-5 4-5zm0-11c5 0 9 2 12 5s5 7 5 11c0 5-2 9-5 12-1 1-3 2-4 3v-3c1-1 2-1 2-2 3-2 4-6 4-10s-1-7-4-10c-2-2-6-4-10-4s-7 2-10 4c-2 3-4 6-4 10s2 8 4 10c1 1 2 1 2 2 1 1 1 2 1 3-2-1-3-2-4-3-3-3-5-7-5-12 0-4 2-8 5-11s7-5 11-5z" />
	</svg>
</div>
