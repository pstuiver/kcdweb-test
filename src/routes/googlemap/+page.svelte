<script>
	export let data;
</script>

<svelte:head>
	<title>KidzCanDurban - Location</title>
</svelte:head>

<div class="views-container">
	<header class="views-head blue-on-white">
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

				<h1 class="views-head-text">Our Location</h1>
				<div class="views-head-dummy" aria-hidden="true">&nbsp;</div>
			</div>
		</nav>
	</header>

	<div class="views-content gray-on-blue w-full" style="height: 70vh">
		<iframe
			title="kidzcandurban google map"
			frameborder="0"
			width="100%"
			height="100%"
			src={data.mapSRC} />
	</div>
</div>
