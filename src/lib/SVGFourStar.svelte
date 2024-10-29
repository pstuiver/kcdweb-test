<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [svgClass]
	 */

	/** @type {Props} */
	let { svgClass = 'text-yellow-500 ml-2 w-[4.8rem] sm:w-[6.4rem] sm:-mt-1' } = $props();
</script>

<!-- Need wrapper div for Safari to render svg properly -->
<div>
	<svg class={svgClass} viewBox="0 0 192 48">
		<title>Four star icon</title>
		<path d="M24,6 35,42 6,21 42,21 13,42Z" />
		<path d="M72,6 83,42 54,21 90,21 61,42Z" />
		<path d="M120,6 131,42 102,21 138,21 109,42Z" />
		<path d="M168,6 179,42 150,21 186,21 157,42Z" />
	</svg>
</div>
