<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [svgClass]
	 */

	/** @type {Props} */
	let { svgClass = "text-yellow-500 ml-2 w-24 sm:w-32 sm:-mt-1" } = $props();
</script>

<!-- Need wrapper div for Safari to render svg properly -->
<div>
	<svg class={svgClass} viewBox="0 0 240 48">
		<title>Five star icon</title>
		<path d="M24,6 35,42 6,21 42,21 13,42Z" />
		<path d="M72,6 83,42 54,21 90,21 61,42Z" />
		<path d="M120,6 131,42 102,21 138,21 109,42Z" />
		<path d="M168,6 179,42 150,21 186,21 157,42Z" />
		<path d="M216,6 227,42 198,21 234,21 205,42Z" />
	</svg>
</div>
