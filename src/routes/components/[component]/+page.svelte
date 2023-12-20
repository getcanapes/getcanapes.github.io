<script lang="ts">
  import type { PageData } from './$types';
  import '@canapes/canapes/lib/components/stage/stage.js'
  import '@canapes/canapes/lib/components/badge/badge.js'
  
  import Heading from '$lib/components/Heading.svelte';
  import ComponentHeader from '$lib/components/ComponentHeader.svelte'
  import ComponentExample from '$lib/components/ComponentExample.svelte'
	
	export let data: PageData;
</script>

<svelte:head>
	<title>{ data.documentation?.name } · Canapés</title>
	<meta name="description" content="{ data.documentation?.description }">
</svelte:head>

{#if data.documentation}
  <ca-stage>
    <ComponentHeader documentation={ data.documentation } />
  </ca-stage>
{/if}

{#if data.documentation?.examples}
  <ca-stage spacing-top="medium">
    <ComponentExample documentation={ data.documentation } />
  </ca-stage>
{/if}

{#if data.documentation?.properties}
  <ca-stage spacing-top="large">
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
          <td>{@html typeof property.default !== 'undefined' ? `<i>${property.default}</i>` : ''}</td>
          <td>{property.required ? 'Yes' : 'No'}</td>
          <td>{property.reflected ? 'Yes' : 'No'}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.slots}
  <ca-stage spacing-top="large">
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
          <td>
            {#if slot.name}
              <code>{slot.name}</code>
            {:else}
              (default)
            {/if}
          </td>
          <td>{slot.description}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.styleVariables}
  <ca-stage spacing-top="large">
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
            <td>{@html typeof styleVariable.default !== 'undefined' ? `<i>${styleVariable.default}</i>` : ''}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}
