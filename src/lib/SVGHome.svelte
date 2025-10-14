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
		<title>Home icon</title>
		<path
			d="M8,44 20,44 20,35 28,35 28,44 40,44 40,31 24,11 8,31Z M42,30 44,30 44,29 37,20 37,6 32,6 32,14 24,4 4,29 4,30 6,30 24,7z" />
	</svg>
</div>
