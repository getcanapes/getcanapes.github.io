<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>An error occured</h1>
<p>{$page?.error?.message}</p>
