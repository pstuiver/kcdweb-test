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
  });
</script>

  <dialog bind:this={dialog}
  class="max-h-[60vh] overflow-auto rounded-lg text-sm backdrop:bg-black/20 open:bg-red-500 text-white open:ring-1 open:ring-neutral-500 w-10/12 max-w-[320px] sm:text-base">
    <p>This is a special message!</p>
    <button
    id="dialogCloseBtn"
    bind:this={closeBtn}
    onclick={(e) => {e.preventDefault(), dialog.close()}}
    class="absolute right-1 top-1 h-6 w-6 rounded-full text-sm font-semibold hover:bg-blue-300 focus:bg-blue-100 focus:text-blue-600">X
    </button>
  </dialog>

{@render children()}
