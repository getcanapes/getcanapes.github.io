<script lang="ts">
  import '@canapes/canapes/lib/components/stage/stage.js'
  import designTokens from '@canapes/canapes/lib/declarations/designTokens.js'

  import Heading from '$lib/components/Heading.svelte'
</script>

<svelte:head>
	<title>Design Tokens · Canapés</title>
	<meta name="description" content="The design tokens used by Canapés.">
</svelte:head>

<ca-stage>
  <h1>Design Tokens</h1>
</ca-stage>

<ca-stage spacing-top="medium">
  <p>Canapés uses design tokens to define the rough styles of the individual components. You can find more information about the use of tokens in the individual components.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Design Tokens</Heading>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Property</th>
        <th>Default</th>
      </tr>
    </thead>
    <tbody>
      {#each designTokens as designToken}
        <tr>
          <td><code>{designToken.name}</code></td>
          <td>{designToken.description}</td>
          <td>{designToken.property}</td>
          <td><i>{designToken.default}</i></td>
        </tr>
      {/each}
    </tbody>
  </table>
</ca-stage>
