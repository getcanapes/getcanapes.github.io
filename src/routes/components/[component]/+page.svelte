<script lang="ts">
  import type { PageData } from './$types';
  import '@canapes/canapes/lib/components/stage/stage.js'
  import '@canapes/canapes/lib/components/badge/badge.js'

  import Heading from '$lib/components/Heading.svelte';
  import ComponentsHeader from '$lib/components/ComponentsHeader.svelte'
	
	export let data: PageData;
</script>

<svelte:head>
	<title>{ data.documentation?.name } · Canapés</title>
	<meta name="description" content="{ data.documentation?.description }">
</svelte:head>

{#if data.documentation}
  <ca-stage>
    <ComponentsHeader documentation={ data.documentation } />
  </ca-stage>
{/if}

{#if data.documentation?.properties}
  <ca-stage spacingtop="large">
    <Heading>Properties</Heading>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
          <th>Reflects</th>
        </tr>
      </thead>
      <tbody>
        {#each data.documentation.properties as property}
        <tr>
          <td><code>{property.name}</code></td>
          <td>{property.description}</td>
          <td>
            {#if typeof property.type === 'object'}
              {property.type.join(' | ')}
            {:else}
              {property.type}
            {/if}
          </td>
          <td>{typeof property.default !== 'undefined' ? property.default : ''}</td>
          <td>{property.required ? 'Yes' : 'No'}</td>
          <td>{property.reflected ? 'Yes' : 'No'}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.slots}
  <ca-stage spacingtop="large">
    <Heading>Slots</Heading>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {#each data.documentation.slots as slot}
        <tr>
          <td><code>{slot.name}</code></td>
          <td>{slot.description}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.styleVariables}
  <ca-stage spacingtop="large">
    <Heading>Style Variables</Heading>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {#each data.documentation.styleVariables as styleVariable}
          <tr>
            <td><code>{styleVariable.name}</code></td>
            <td>{styleVariable.description}</td>
            <td>{typeof styleVariable.default !== 'undefined' ? styleVariable.default : ''}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}
