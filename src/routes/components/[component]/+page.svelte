<script lang="ts">
  import type { PageData } from './$types';
  import '@canapes/canapes/lib/components/stage/stage.js'
  import '@canapes/canapes/lib/components/badge/badge.js'

  import Heading from '$lib/components/Heading.svelte';
	
	export let data: PageData;
</script>

<svelte:head>
	<title>{ data.documentation?.name } · Canapes</title>
	<meta name="description" content="{ data.documentation?.description }">
</svelte:head>

<ca-stage>
  <h1>{ data.documentation?.name }</h1>
  <ca-badge pill>{ data.documentation?.state }</ca-badge>
  <p>{ data.documentation?.description }</p>
  <p>&lt;{ data.documentation?.tag }&gt;</p>
</ca-stage>

{#if data.documentation?.properties}
  <ca-stage spacingtop="medium">
    <Heading><h3>Properties</h3></Heading>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
        <th>Reflected</th>
      </tr>
      {#each data.documentation.properties as property}
        <tr>
          <td>{property.name}</td>
          <td>{property.description}</td>
          <td>{property.type}</td>
          <td>{typeof property.default !== 'undefined' ? property.default : ''}</td>
          <td>{property.required ? 'Yes' : 'No'}</td>
          <td>{property.reflected ? 'Yes' : 'No'}</td>
        </tr>
      {/each}
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.slots}
  <ca-stage spacingtop="medium">
    <Heading><h3>Slots</h3></Heading>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      {#each data.documentation.slots as slot}
        <tr>
          <td>{slot.name}</td>
          <td>{slot.description}</td>
        </tr>
      {/each}
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.styleVariables}
  <ca-stage spacingtop="medium">
    <Heading><h3>Style Variables</h3></Heading>
    <table>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Default</th>
      </tr>
      {#each data.documentation.styleVariables as styleVariable}
        <tr>
          <td>{styleVariable.name}</td>
          <td>{styleVariable.description}</td>
          <td>{typeof styleVariable.default !== 'undefined' ? styleVariable.default : ''}</td>
        </tr>
      {/each}
    </table>
  </ca-stage>
{/if}
