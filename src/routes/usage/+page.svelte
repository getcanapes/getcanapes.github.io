<script lang="ts">
  import '@canapes/canapes/lib/components/stage/stage.js'
  import Heading from '$lib/components/Heading.svelte'
</script>

<svelte:head>
	<title>Usage · Canapés</title>
	<meta name="description" content="How to use Canapés.">
</svelte:head>

<ca-stage>
  <h1>Usage</h1>
</ca-stage>

<ca-stage spacing-top="small">
  <p>After you followed the <a href="/installation">instructions to install Canapés</a> you can simply use the components like any other native web component.</p>
</ca-stage>

<ca-stage spacing-top="small">
  <p>You can add the following code to your markup to display a button:</p>
  <code>
    &lt;ca-button&gt;Foo&lt;/ca-button&gt;
  </code>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Attributes</Heading>
</ca-stage>

<ca-stage>
  <p>Most components have attributes to change the look or behaviour. The button component for example could be displayed with rounded edges with the <i>pill</i> attribute:</p>
  <code>
    &lt;ca-button pill&gt;Foo&lt;/ca-button&gt;
  </code>
  <p>Some attributes like <i>href</i> require also a value:</p>
  <code>
    &lt;ca-button href="https://docs.getcanapes.com"&gt;Foo&lt;/ca-button&gt;
  </code>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Slots</Heading>
</ca-stage>

<ca-stage>
  <p>Some components have slots to put content in. The button for example has a default slot which is used for the label:</p>
  <code>
    &lt;ca-button&gt;<br>
    &nbsp;&nbsp;Click me!<br>
    &lt;/ca-badge&gt;
  </code>
  <p>The button also has a prefix slot, which is usually used for an icon. Slots that are not the default must be assigned with the <i>slot</i> attribute:</p>
  <code>
    &lt;ca-button&gt;<br>
    &nbsp;&nbsp;&lt;ca-icon slot="prefix" name="heart"&gt;&lt;ca-icon&gt;<br>
    &nbsp;&nbsp;Click me!<br>
    &lt;/ca-badge&gt;
  </code>
</ca-stage>

<style>
  code {
    font-size: var(--font-size-tiny);
    padding: var(--spacing);
    margin: var(--spacing) 0 var(--spacing-large);
  }
</style>