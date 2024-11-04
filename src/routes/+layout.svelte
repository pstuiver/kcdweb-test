<script>
import "../tailwind.postcss";
  
// Start of Recently Added
  // import { setupViewTransition } from "sveltekit-view-transition";
  // setupViewTransition();
  // End of Recently Added

  import { onMount } from "svelte";
  let { children } = $props();
 
  let dialog;
  let closeBtn
  onMount(() => {
    dialog.showModal();
    closeBtn.focus()
  });
</script>

  <dialog bind:this={dialog}
  class="max-h-[60vh] overflow-auto rounded-lg text-sm backdrop:bg-white/10 open:bg-red-600 text-white border border-red-300 w-10/12 max-w-md sm:text-base px-4 py-2 shadow-white ">
   <p>
   We are sorry to inform that after eight wonderful years, Elsje Stuiver will be relocating at the end of 2024.</p>
   <p class="mt-1"> As a result, this Occupational Therapy practice will be closing at the end of the 2024 school year.</p>
    <button
    id="dialogCloseBtn"
    bind:this={closeBtn}
    onclick={(e) => {e.preventDefault(), dialog.close()}}
    class="absolute right-1 top-1 h-6 w-6 rounded-full text-xs font-semibold bg-red-200 text-red-500 ring-0">X
    </button>
  </dialog>

{@render children()}