<script lang="ts">
  import type { Documentation } from "@canapes/canapes"

  export let documentation: Documentation
</script>

<div class="component-example">
  <div class="result">
    {@html documentation.examples[0].code}
  </div>
  <div class="source">
    <pre><code>{documentation.examples[0].code}</code></pre>
  </div>
</div>

<style>
  .component-example {
    border: var(--border-width) var(--border-style) var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .result {
    padding: var(--spacing-large);
  }

  .source {
    background-color: var(--color-code);
    border-top: var(--border-width) var(--border-style) var(--border-color);
    font-size: var(--font-size-small);
    padding: calc(var(--spacing) * -1) var(--spacing-large) var(--spacing);
  }
</style>