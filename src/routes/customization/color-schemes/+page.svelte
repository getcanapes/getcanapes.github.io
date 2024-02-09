<script lang="ts">
  import '@canapes/canapes/lib/components/stage/stage.js'
  
  import Heading from '$lib/components/Heading.svelte'
</script>

<svelte:head>
	<title>Color Schemes · Canapés</title>
	<meta name="description" content="How to use color schemes in Canapés.">
</svelte:head>

<ca-stage>
  <h1>Color Schemes</h1>
</ca-stage>

<ca-stage spacing-top="medium">
  <p>In Canapés, color schemes can be defined using CSS variables. These color schemes are automatically taken into account by many components.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Defining Color Schemes</Heading>
</ca-stage>

<ca-stage spacing-top="small">
  <p>Color schemes are defined as css variables. They need a <i>--ca</i> prefix, the <i>color-scheme</i> keyword, a name and a property. Here is an example of a color scheme called "success":</p>
  <code>
    &lt;style&gt;<br>
    &nbsp;&nbsp;--ca-color-scheme-success-color: green;<br>
    &nbsp;&nbsp;--ca-color-scheme-success-contrary: white;<br>
    &lt;/style&gt;<br>
  </code>
  <p>In most cases, the <i>color</i> is used as a background color, the <i>contrary</i> as text color.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Using Color Schemes</Heading>
</ca-stage>

<ca-stage spacing-top="small">
  <p>Once a color scheme has been defined, it can be transferred as an attribute for many components:</p>
  <code>
    &lt;ca-button color-scheme="success"&gt;Foo&lt;/ca-button&gt;
  </code>
  <p>Detailed information on how the color scheme affects the component can be found on the respective documentation page of the component.</p>
</ca-stage>

<style>
  code {
    display: block;
    font-size: var(--font-size-tiny);
    padding: var(--spacing);
    margin: var(--spacing) 0 var(--spacing-large);
  }
</style>
