<script lang="ts">
  import type { Documentation } from "@canapes/canapes"

  export let documentation: Documentation
</script>

<h1>{ documentation.name }</h1>
<div class="tag">&lt;{ documentation.tag }&gt;</div>
<ca-badge pill>{ documentation?.state }</ca-badge>
<div class="description">
  <p>{ documentation?.description }</p>
</div>

<style>
  h1 {
    font-size: var(--font-size-huge);
    font-weight: var(--font-weight-normal);
  }

  .tag {
    color: var(--color-text-unobtrusive);
    font-size: var(--font-size-large);
    margin: var(--spacing) 0;
  }

  .description {
    font-size: var(--font-size-large);
    margin-top: var(--spacing-huge);
  }
</style>