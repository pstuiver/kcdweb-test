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
	<svg class={svgClass} viewBox="0 3 48 48" aria-hidden={ariaHidden}>
		<title>About icon</title>
		<path
			stroke-width="3"
			stroke="currentColor"
			d="M4,28 4,14 Q14,9 22,14 v14 M4,28 4,42 Q14,37 22,42 v-14z" />
		<path
			stroke-width="3"
			stroke="currentColor"
			fill="none"
			d="M22,14 Q34,9 44,14 v15 M22.8,43.3 Q34,37 44,42 v-14" />
		<path
			stroke-width="1.5"
			stroke="currentColor"
			fill="none"
			d="M26,19 Q33,16 40,19 M26,24 Q33,21 40,24 M26,29 Q33,26 40,29 M26,34 Q33,31 40,34" />
	</svg>
</div>
