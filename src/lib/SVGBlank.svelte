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
	<svg class={svgClass} viewBox="0 0 48 48" aria-hidden={ariaHidden} />
</div>
