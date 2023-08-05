<script>
	export let headerColor = 'blue-on-zero';
	export let headerTitle = 'Handwriting';
</script>

<header class="views-head {headerColor}">
	<nav class="w-full">
		<div class="w-full flex items-center justify-between">
			<div class="flex items-center">
				<button on:click={() => window.history.go(-1)} aria-label="back button">
					<svg viewBox="0 0 48 48" class="views-head-icon">
						<title>Back arrow icon</title>
						<path d="M13,24 23,13 23,20 34,20 34,28 23,28 23,35Z" />
					</svg>
				</button>
				<span class="views-head-back" aria-hidden="true">back</span>
			</div>
			<!-- eslint-disable svelte/no-at-html-tags -->
			<h1 class="views-head-text">{@html headerTitle}</h1>
			<div class="views-head-dummy" aria-hidden="true">&nbsp;</div>
		</div>
	</nav>
</header>
