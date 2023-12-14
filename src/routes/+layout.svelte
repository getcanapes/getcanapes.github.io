<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte'

  import '$lib/styles/app.css'
  import '$lib/styles/fonts.css'
</script>

<Navigation />
<main>
  <slot />
</main>
