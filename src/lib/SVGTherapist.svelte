<script>
	export let svgClass = 'index-nav-svg';
	export let ariaHidden = true;
</script>

<!-- Need wrapper div for Safari to render svg properly -->
<div>
	<svg class={svgClass} viewBox="0 4 48 48" aria-hidden={ariaHidden}>
		<title>Therapist icon</title>
		<path d="M24,8 4,28 24,48 44,28z" />
		<path transform="rotate(22.5 24 28)" d="M24,8 4,28 24,48 44,28z" />
		<path transform="rotate(45 24 28)" d="M24,8 4,28 24,48 44,28z" />
		<path transform="rotate(67.5 24 28)" d="M24,8 4,28 24,48 44,28z" />
	</svg>
</div>
