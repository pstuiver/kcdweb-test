<svelte:head>
    <title>KidzCanDurban-Reviews</title>
</svelte:head>

<script>
     export let data;
    const {reviews} = data
</script>


<main class="p-4">
    
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="javascript:history.back()">
        <svg viewBox="0 0 48 48" class="views-head-icon">
          <title>Back arrow icon</title>
          <path d="M13,24 23,13 23,20 34,20 34,28 23,28 23,35Z"></path>
        </svg>
      </a>
    
{#each reviews as review}
<div>{review.name}</div>
<span>{review.rating}</span>
<div>{review.text}</div>
{/each}
</main>
