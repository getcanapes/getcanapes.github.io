<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte'
  import { page } from '$app/stores'

  import '$lib/styles/app.css'
  import '$lib/styles/fonts.css'
  import '$lib/styles/table.css'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <link rel="canonical" href="https://getcanapes.com{ $page.url.pathname != '/' ? $page.url.pathname + $page.url.search : '' }">
</svelte:head>

<Navigation />
<main>
  <slot />
  <Footer />
</main>

<style>
  main {
    margin-left: var(--navigation-width);
    padding: var(--spacing-huge);
  }
</style>
