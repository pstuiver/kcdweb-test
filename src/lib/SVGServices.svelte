<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [svgClass]
	 * @property {boolean} [ariaHidden]
	 */

	/** @type {Props} */
	let { svgClass = "index-nav-svg", ariaHidden = true } = $props();
</script>

<!-- Need wrapper div for Safari to render svg properly -->
<div>
	<svg class={svgClass} viewBox="0 0 48 48" aria-hidden={ariaHidden}>
		<title>Services icon</title>
		<circle cx="24" cy="10" r="5.5" />
		<path
			d="M22,43 23,33 26,33 27,43 33,43 32,24 39,11 33,11 28,18 20,18 15,11 9,11 17,24 16,43Z M16,43 C16,45 22,45 22,43Z M27,43 C27,45 33,45 33,43Z M39,11 C41,8 35,8 33,11Z M9,11 C7,8 13,8 15,11Z" />
	</svg>
</div>
