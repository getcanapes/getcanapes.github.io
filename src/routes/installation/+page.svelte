<script lang="ts">
  import '@canapes/canapes/lib/components/stage/stage.js'

  import Heading from '$lib/components/Heading.svelte'
  import pkg from '../../../package.json'
</script>

<svelte:head>
	<title>Installation · Canapés</title>
	<meta name="description" content="How to install Canapés.">
</svelte:head>

<ca-stage>
  <h1>Installation</h1>
</ca-stage>

<ca-stage spacing-top="small">
  <p>Canapés can be integrated in two different ways: With a simple script directly in your markup or as a <a href="https://www.npmjs.com/package/@canapes/canapes" target="_blank">package via NPM</a>. Both variants have their own advantages, which are explained below.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Import with script module</Heading>
</ca-stage>

<ca-stage>
  <p>The easiest way to use Canapés and get started right away is to integrate it via a script in the HTML markup. Simply copy the following code into your HTML <i>&lt;head&gt;</i> to import all components:</p>
  <code>
    &lt;script type="module" src="https://unpkg.com/@canapes/canapes/modules/canapes.js"&gt;&lt;/script&gt;
  </code>
  <p>You can also define a specific version:</p>
  <code>
    &lt;script type="module" src="https://unpkg.com/@canapes/canapes@{ pkg.version }/modules/canapes.js"&gt;&lt;/script&gt;
  </code>
  <p>Or just import a single component:</p>
  <code>
    &lt;script type="module" src="https://unpkg.com/@canapes/canapes@{ pkg.version }/modules/components/badge/badge.js"&gt;&lt;/script&gt;
  </code>
  <p>In a professional project, it is advisable not to reference the files via <a href="https://unpkg.com" target="_blank">unpkg.com</a>, but to store them on your own server. Simply copy the Canapés <i>modules</i> folder and change the <i>src</i> in your import statement.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Import with package manager</Heading>
</ca-stage>

<ca-stage>
  <p>Another method to install Canapés is using a <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank">packet manager</a>. This way you can integrate it into your build process and benefit from <a href="https://www.typescriptlang.org" target="_blank">TypeScript</a>.</p>
</ca-stage>

<ca-stage spacing-top="small">
  <p>Simply install the latest version with the following command:</p>
  <code>npm i @canapes/canapes</code>
  <p>After that you can import the component you want to use in your <i>script</i> part:</p>
  <code>
    &lt;script&gt;<br>
    &nbsp;&nbsp;import '@canapes/canapes/lib/components/badge/badge.js'<br>
    &lt;/script&gt;<br>
  </code>
</ca-stage>

<style>
  code {
    font-size: var(--font-size-tiny);
    padding: var(--spacing);
    margin: var(--spacing) 0 var(--spacing-large);
  }
</style>