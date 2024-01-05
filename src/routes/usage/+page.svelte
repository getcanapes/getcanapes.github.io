<script lang="ts">
  import '@canapes/canapes/lib/components/stage/stage.js'
</script>

<svelte:head>
	<title>Usage · Canapés</title>
	<meta name="description" content="How to use Canapés.">
</svelte:head>

<ca-stage>
  <h1>Usage</h1>
</ca-stage>

<ca-stage spacing-top="small">
  <p>Import the component you want to use in your javascript file:</p>
</ca-stage>

<ca-stage spacing-top="small">
  <code>
    &lt;script&gt;<br>
    &nbsp;&nbsp;import '@canapes/canapes/lib/components/badge/badge.js'<br>
    &lt;/script&gt;<br>
    <br>
    &lt;ca-badge&gt;Hello, Canapés!&lt;/ca-badge&gt;
  </code>
</ca-stage>

<style>
  code {
    padding: var(--spacing);
  }
</style>