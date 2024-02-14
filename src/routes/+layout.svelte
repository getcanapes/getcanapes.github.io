<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte'
  import '@canapes/canapes/lib/components/notification/notification.js'
  
  import '$lib/styles/app.css'
  import '$lib/styles/fonts.css'
  import '$lib/styles/table.css'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Navigation />
<main>
  <ca-notification color-scheme="deprecation" class="deprecation">This library is deprecated and is no longer updated. It will be deleted shortly.</ca-notification>
  <slot />
  <Footer />
</main>

<style>
  main {
    margin-left: var(--navigation-width);
    padding: var(--spacing-huge);
  }

  .deprecation {
		display: block;
		margin-bottom: var(--spacing-large);
	}
</style>
