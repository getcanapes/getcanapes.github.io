<script lang="ts">
	import '@canapes/canapes/lib/components/stage/stage.js'
</script>

<svelte:head>
	<title>Canapés · Reliable web components for everyday use.</title>
	<meta name="description" content="Reliable web components for everyday use.">
</svelte:head>

<ca-stage>
	<h1 class="headline">Canapés</h1>
	<p class="subline">Reliable web components for everyday use.</p>
	<ul class="advantages">
		<li>Works with all frameworks</li>
		<li>Fully customizable styles</li>
		<li>Built with accessibility in mind</li>
		<li>Machine-readable documentation</li>
		<li>Open source</li>
	</ul>
</ca-stage>

<style>
	.headline {
		color: var(--color-brand);
    font-family: var(--logo-font);
    font-size: 4rem;
		font-weight: normal;
		margin-bottom: var(--spacing-large);
    text-decoration: none;
	}

	.subline {
		font-size: var(--font-size-large);
	}

	.advantages li {
		padding: var(--spacing-tiny) 0;
	}
</style>