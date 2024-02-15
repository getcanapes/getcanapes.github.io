<script lang="ts">
	import '@canapes/canapes/lib/components/grid/grid.js'
	import '@canapes/canapes/lib/components/notification/notification.js'
	import '@canapes/canapes/lib/components/stage/stage.js'
</script>

<svelte:head>
	<title>Canapés · Reliable Web Components for everyday use.</title>
	<meta name="description" content="Reliable web components for everyday use.">
</svelte:head>

<ca-stage>
	<h1 class="headline">Canapés</h1>
	<p class="subline">Reliable Web Components for everyday use.</p>
</ca-stage>

<ca-stage spacing-top="small">
	<ca-grid>
		<div slot="a">
			<ul class="advantages">
				<li>Works with all frameworks (and even without a framework)</li>
				<li>Directly embedable in your markup</li>
				<li>Ready for your build process with NPM</li>
				<li>Support of TypeScript</li>
				<li>Fully customizable styles</li>
				<li>Built with accessibility in mind</li>
			</ul>
			<ca-notification color-scheme="deprecation" class="wip-notification">This library is still under development. Please be careful, especially when updating to a newer version.</ca-notification>
		</div>
		<div slot="b">
			<img src="/assets/images/wip.jpeg" alt="Work in progress." class="wip-image" />
		</div>
	</ca-grid>
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

	.wip-notification {
 		display: block;
 		margin: var(--spacing-large) var(--spacing-large) 0 0;
 	}

	.wip-image {
		width: 400px;
		max-width: 100%;
	}
</style>