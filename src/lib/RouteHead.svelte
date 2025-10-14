<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [headerColor]
	 * @property {string} [headerTitle]
	 */

	/** @type {Props} */
	let { headerColor = "blue-on-n50", headerTitle = "Handwriting" } = $props();
</script>

<header class="views-head {headerColor} border-b border-neutral-50">
	<nav class="w-full">
		<div class="flex w-full items-center justify-between">
			<div class="flex items-center">
				<!-- svelte-ignore a11y_invalid_attribute -->
				<a href="javascript:history.back()">
					<svg viewBox="0 0 48 48" class="views-head-icon">
						<title>Back arrow icon</title>
						<path d="M13,24 23,13 23,20 34,20 34,28 23,28 23,35Z" />
					</svg>
				</a>
				<span class="views-head-back" aria-hidden="true">back</span>
			</div>
			<!-- eslint-disable svelte/no-at-html-tags -->
			<div class="views-head-text">{@html headerTitle}</div>
			<div class="views-head-dummy" aria-hidden="true">&nbsp;</div>
		</div>
	</nav>
</header>
