<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte'
  
  import '$lib/styles/app.css'
  import '$lib/styles/fonts.css'
  import '$lib/styles/table.css'
  import Footer from '$lib/components/Footer.svelte'
</script>

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
