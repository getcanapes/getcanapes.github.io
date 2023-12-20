<script lang="ts">
  import type { Documentation } from "@canapes/canapes"

  export let documentation: Documentation
</script>

<div class="component-example">
  <div class="result">
    {@html documentation.examples[0].code}
  </div>
  <div class="source">
    <code>
      {documentation.examples[0].code}
    </code>
  </div>
</div>

<style>
  .component-example {
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
  }

  .result {
    padding: var(--spacing-large);
  }

  .source {
    background-color: var(--color-code);
    border-top: var(--border-width) var(--border-style) var(--border-color);
    font-size: var(--font-size-small);
    padding: var(--spacing-large);
  }
</style>