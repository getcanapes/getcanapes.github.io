<script lang="ts">
  import '@canapes/canapes/lib/components/stage/stage.js'
</script>

<svelte:head>
	<title>Installation · Canapés</title>
	<meta name="description" content="How to install Canapés.">
</svelte:head>

<ca-stage>
  <h1>Installation</h1>
</ca-stage>

<ca-stage spacing-top="small">
  <p>Install Canapés via npm:</p>
</ca-stage>

<ca-stage spacing-top="small">
  <code>npm i @canapes/canapes</code>
</ca-stage>

<style>
  code {
    padding: var(--spacing);
  }
</style>