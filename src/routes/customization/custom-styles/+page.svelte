<script lang="ts">
  import '@canapes/canapes/lib/components/stage/stage.js'
  
  import Heading from '$lib/components/Heading.svelte'
</script>

<svelte:head>
	<title>Custom Styles · Canapés</title>
	<meta name="description" content="How to use custom styles in Canapés.">
</svelte:head>

<ca-stage>
  <h1>Custom Styles</h1>
</ca-stage>

<ca-stage spacing-top="medium">
  <p>In addition to the Design Tokens and the Color Schemes, it is of course also possible to style each component individually.</p>
</ca-stage>

<ca-stage spacing-top="small">
  <p>But because Canapés components are web components at their core, the styles are encapsulated. This means that CSS styles of the surrounding page do not affect the component and the styles of the component do not affect the surrounding page. In order to still be able to style the component, CSS parts are provided that act as selectors for certain parts.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Styling with Custom Properties</Heading>
</ca-stage>

<ca-stage spacing-top="tiny">
  <p>Some components offer custom properties to easily change the main styles. Here is an example of how you can style a component with these properties:</p>
  <code>
    &lt;ca-button&gt;Foo&lt;/ca-button&gt;<br>
    <br>
    &lt;style&gt;<br>
    &nbsp;&nbsp;ca-button &#x7B;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--disabled-opacity: 0.8;<br>
    &nbsp;&nbsp;&#x7D;<br>
    &lt;/style&gt;<br>
  </code>
  <p>For more information about custom properties and their behavior in the component context, see the component`s documentation page.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Styling with CSS Parts</Heading>
</ca-stage>

<ca-stage spacing-top="tiny">
  <p>Each component has CSS parts, which are listed in the documentation. Here is an example of how a component can be styled with the help of these parts:</p>
  <code>
    &lt;ca-button&gt;Foo&lt;/ca-button&gt;<br>
    <br>
    &lt;style&gt;<br>
    &nbsp;&nbsp;ca-button::part(base) &#x7B;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color: red;<br>
    &nbsp;&nbsp;&#x7D;<br>
    &lt;/style&gt;<br>
  </code>
</ca-stage>

<style>
  code {
    display: block;
    font-size: var(--font-size-tiny);
    padding: var(--spacing);
    margin: var(--spacing) 0 var(--spacing-large);
  }
</style>
