<script lang="ts">
  import type { PageData } from './$types';
  import '@canapes/canapes/lib/components/badge/badge.js'
  import '@canapes/canapes/lib/components/breadcrumb/breadcrumb.js'
  import '@canapes/canapes/lib/components/breadcrumb-item/breadcrumb-item.js'
  import '@canapes/canapes/lib/components/button/button.js'
  import '@canapes/canapes/lib/components/details/details.js'
  import '@canapes/canapes/lib/components/icon/icon.js'
  import '@canapes/canapes/lib/components/progress-bar/progress-bar.js'
  import '@canapes/canapes/lib/components/relative-time/relative-time.js'
  import '@canapes/canapes/lib/components/shortened-text/shortened-text.js'
  import '@canapes/canapes/lib/components/skeleton/skeleton.js'
  import '@canapes/canapes/lib/components/stage/stage.js'
  
  import Heading from '$lib/components/Heading.svelte'
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

{#if data.documentation?.attributes}
  <ca-stage spacing-top="large">
    <Heading>Attributes</Heading>
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
        {#each data.documentation.attributes as attribute}
        <tr>
          <td><code>{attribute.name}</code></td>
          <td>{attribute.description}</td>
          <td>
            {#if typeof attribute.type === 'object'}
              {attribute.type.join(' | ')}
            {:else}
              {attribute.type}
            {/if}
          </td>
          <td>{@html typeof attribute.default !== 'undefined' ? `<i>${attribute.default}</i>` : ''}</td>
          <td>{attribute.required ? 'Yes' : 'No'}</td>
          <td>{attribute.reflected ? 'Yes' : 'No'}</td>
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

{#if data.documentation?.shadowParts}
<ca-stage spacing-top="large">
  <Heading>CSS Parts</Heading>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {#each data.documentation.shadowParts as part}
      <tr>
        <td><code>{part.name}</code></td>
        <td>
          {#if part.name === 'base'}
            Component's base part.
          {:else}
            {part.description}
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</ca-stage>
{/if}

{#if data.documentation?.customProperties}
  <ca-stage spacing-top="large">
    <Heading>Custom Properties</Heading>
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
        {#each data.documentation.customProperties as customProperty}
          <tr>
            <td><code>{customProperty.name}</code></td>
            <td>{@html customProperty.description}</td>
            <td>{customProperty.property}</td>
            <td>{@html typeof customProperty.default !== 'undefined' ? `<i>${customProperty.default}</i>` : ''}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.designTokens}
  <ca-stage spacing-top="large">
    <Heading>Design Token</Heading>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {#each data.documentation.designTokens as designToken}
          <tr>
            <td><code>{designToken.name}</code></td>
            <td>{@html designToken.description}</td>
            <td>{@html typeof designToken.default !== 'undefined' ? `<i>${designToken.default}</i>` : ''}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </ca-stage>
{/if}

{#if data.documentation?.dependencies}
  <ca-stage spacing-top="large">
    <Heading>Dependencies</Heading>
    <p>This component has the following components as a dependency:</p>
    <ul>
      {#each data.documentation.dependencies as dependency}
        <li>&lt;{dependency}&gt;</li>
      {/each}
    </ul>
  </ca-stage>
{/if}
