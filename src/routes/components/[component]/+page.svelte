<script lang="ts">
  import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>{ data.documentation?.name } · Canapes</title>
	<meta name="description" content="{ data.documentation?.description }">
</svelte:head>

<h1>{ data.documentation?.name }</h1>
