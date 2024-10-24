<script>
	export let headerColor = 'blue-on-n50';
	export let headerTitle = 'Handwriting';
</script>

<header class="views-head {headerColor} border-b border-neutral-50">
	<nav class="w-full">
		<div class="w-full flex items-center justify-between">
			<div class="flex items-center">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:history.back()">
					<svg viewBox="0 0 48 48" class="views-head-icon">
						<title>Back arrow icon</title>
						<path d="M13,24 23,13 23,20 34,20 34,28 23,28 23,35Z" />
					</svg>
				</a>
				<span class="views-head-back" aria-hidden="true">back</span>
			</div>
			<!-- eslint-disable svelte/no-at-html-tags -->
			<h1 class="views-head-text">{@html headerTitle}</h1>
			<div class="views-head-dummy" aria-hidden="true">&nbsp;</div>
		</div>
	</nav>
</header>
