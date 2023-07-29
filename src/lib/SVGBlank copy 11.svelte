<script>
	export let svgClass = 'index-nav-svg';
	export let ariaHidden = true;
</script>

<!-- Need wrapper div for Safari to render svg properly -->
<div>
	<svg class={svgClass} viewBox="0 0 48 48" aria-hidden={ariaHidden} />
</div>
