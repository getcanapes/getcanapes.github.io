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
  <p>You can add the following code to your markup to display a <a href="/components/button">button</a>:</p>
  <code>
    &lt;ca-button&gt;Foo&lt;/ca-button&gt;
  </code>
  <p>All Canapés components a prefixed with <i>ca-</i> to indicate a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements" target="_blank">custom element</a>. You can read more about all components on their dedicated documentation page, for example for the <a href="/components/button">button</a>.</p>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Attributes</Heading>
</ca-stage>

<ca-stage>
  <p>Most components have attributes to change the look or behaviour. The button component for example could be displayed with rounded edges with the <i>pill</i> attribute:</p>
  <code>
    &lt;ca-button pill&gt;Foo&lt;/ca-button&gt;
  </code>
  <p>Some attributes like <i>href</i> also require a value:</p>
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
    &lt;/ca-button&gt;
  </code>
  <p>The button also has a prefix slot, which is usually used for an icon. Slots that are not the default must be assigned with the <i>slot</i> attribute:</p>
  <code>
    &lt;ca-button&gt;<br>
    &nbsp;&nbsp;&lt;ca-icon slot="prefix" name="heart"&gt;&lt;ca-icon&gt;<br>
    &nbsp;&nbsp;Click me!<br>
    &lt;/ca-button&gt;
  </code>
</ca-stage>

<ca-stage spacing-top="medium">
  <Heading>Events</Heading>
</ca-stage>

<ca-stage>
  <p>Some components send events to which you can react. The <a href="/components/notification">Notification</a> for example send an event after hiding itself. To use this, you must first create a component:</p>
  <code>
    &lt;ca-notification duration="3000"&gt;<br>
    &nbsp;&nbsp;Hello, Canapés!<br>
    &lt;/ca-notification&gt;
  </code>
  <p>You can then react to the event using the EventListener. This is a common <a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent" target="_blank">CustomEvent</a> and you can listen to it like any other javascript event:</p>
  <code>
    &lt;script&gt;<br>
    &nbsp;&nbsp;const notification = document.querySelector('ca-notification')<br>
    <br>
    &nbsp;&nbsp;notification.addEventListener('ca-after-hide', () =&gt; &#x7B;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;// Do something special<br>
    &nbsp;&nbsp;&#x7D;)<br>
    &lt;/script&gt;
  </code>
  <p>You can find out more about the events of the respective component on its documentation page.</p>
</ca-stage>

<style>
  code {
    font-size: var(--font-size-tiny);
    padding: var(--spacing);
    margin: var(--spacing) 0 var(--spacing-large);
  }
</style>