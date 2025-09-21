<script>
	import '../tailwind.postcss';

	// Start of Recently Added
	// import { setupViewTransition } from "sveltekit-view-transition";
	// setupViewTransition();
	// End of Recently Added

	import { onMount } from 'svelte';
	let { children } = $props();

	let dialog;
	let closeBtn;
	onMount(() => {
		dialog.showModal();
		closeBtn.focus();
	});
</script>

<dialog
	bind:this={dialog}
	class="max-h-[60vh] w-10/12 max-w-md overflow-auto rounded-lg border border-red-300 px-4 py-2 text-sm text-white shadow-white backdrop:bg-white/10 open:bg-red-600 sm:text-base">
	<p>
		We are sorry to inform that after eight wonderful years, Elsje Stuiver will be relocating at the
		end of 2024.
	</p>
	<p class="mt-1">
		As a result, this Occupational Therapy practice will be closing at the end of November 2024.
	</p>
	<p class="mt-1">We apologise for any inconvenience caused</p>
	<button
		id="dialogCloseBtn"
		bind:this={closeBtn}
		onclick={(e) => {
			(e.preventDefault(), dialog.close());
		}}
		class="absolute right-1 top-1 h-6 w-6 rounded-full bg-red-200 text-xs font-semibold text-red-500 ring-0"
		>X
	</button>
</dialog>

{@render children?.()}
