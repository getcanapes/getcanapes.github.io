<script lang="ts">
  import type { Documentation } from "@canapes/canapes"

  export let documentation: Documentation
</script>

<div class="component-header">
  <h1>{ documentation.name }</h1>
  <div class="tag">&lt;{ documentation.tag }&gt; <span class="tag__spacer">|</span> { documentation.type }</div>
  {#if documentation.stable}
    <ca-badge pill color-scheme="success">Stable</ca-badge>
  {:else}
    <ca-badge pill color-scheme="warning">Experimental</ca-badge>
  {/if}
  <div class="summary">
    <p>{@html documentation?.summary }</p>
  </div>
  {#if documentation.description}
    <div class="description">
      <p>{@html documentation?.description }</p>
    </div>
  {/if}
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

  .summary {
    font-size: var(--font-size-large);
    margin-top: var(--spacing-huge);
  }

  .description {
    font-size: var(--font-size);
    margin-top: var(--spacing-large);
  }
</style>