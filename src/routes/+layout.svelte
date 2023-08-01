<script>
	import { onMount } from 'svelte';
	import '../tailwind.postcss';
	onMount(() => {
		window.history.scrollRestoration = 'auto';
	});
</script>

<slot />
