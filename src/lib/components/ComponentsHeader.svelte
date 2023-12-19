<script lang="ts">
  import type { Documentation } from "@canapes/canapes"

  export let documentation: Documentation
</script>

<h1>{ documentation.name }</h1>
<div class="tag">&lt;{ documentation.tag }&gt; <span class="tag__spacer">|</span> { documentation.type }</div>
{#if documentation.stable}
  <ca-badge pill colorscheme="success">Stable</ca-badge>
{:else}
  <ca-badge pill colorscheme="warning">Experimental</ca-badge>
{/if}
<div class="description">
  <p>{ documentation?.description }</p>
</div>

<style>
  h1 {
    font-size: var(--font-size-huge);
    font-weight: var(--font-weight-bold);
    line-height: 1;
  }

  .tag {
    color: var(--color-text-unobtrusive);
    font-size: var(--font-size-large);
    margin: var(--spacing) 0;
  }

  .tag__spacer {
    margin: 0 var(--spacing-small);
  }

  .description {
    font-size: var(--font-size-large);
    margin-top: var(--spacing-huge);
  }
</style>