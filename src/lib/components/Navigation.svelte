<script lang="ts">

</script>

<aside class="navigation">
  <div class="navigation__header">
    <div class="navigation__logo">Canapés</div>
  </div>
  <div class="navigation__body">
    <div class="navigation__section">
      <h3 class="navigation__subline">Getting Started</h3>
      <ul class="navigation__items">
        <li class="navigation__item">Home</li>
        <li class="navigation__item">Installation</li>
        <li class="navigation__item">Usage</li>
      </ul>
    </div>
    <div class="navigation__section">
      <h3 class="navigation__subline">Customization</h3>
      <ul class="navigation__items">
        <li class="navigation__item">Design Tokens</li>
        <li class="navigation__item">Color Schemes</li>
        <li class="navigation__item">Component Styles</li>
      </ul>
    </div>
    <div class="navigation__section">
      <h3 class="navigation__subline">Components</h3>
      <ul class="navigation__items">
        <li class="navigation__item">Badge</li>
        <li class="navigation__item">Breadcrumb</li>
        <li class="navigation__item">Breadcrumb Item</li>
        <li class="navigation__item">Button</li>
        <li class="navigation__item">Details</li>
        <li class="navigation__item">Icon</li>
        <li class="navigation__item">Progress Bar</li>
        <li class="navigation__item">QR Code</li>
        <li class="navigation__item">Relative Time</li>
        <li class="navigation__item">Shortened Text</li>
        <li class="navigation__item">Skeleton</li>
        <li class="navigation__item">Stage</li>
      </ul>
    </div>
  </div>
</aside>

<style>
  .navigation {
    border-right: var(--border-width) var(--border-style) var(--border-color);
    bottom: 0;
    display: flex;
    flex-direction: column;
    left: 0;
    overflow: auto;
    padding: var(--spacing-large);
    position: fixed;
    top: 0;
    scrollbar-width: thin;
    width: calc(var(--navigation-width) - (var(--spacing-large)) * 2);
  }

  .navigation__header {
    align-items: flex-end;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .navigation__logo {
    color: var(--color-brand);
    font-family: var(--logo-font);
    font-size: 3rem;
    text-align: center;
  }

  .navigation__body {
    display: flex;
    flex-direction: column;
    margin-top: var(--spacing-large);
  }

  .navigation__section:not(:first-child) {
    margin-top: var(--spacing-large);
  }

  .navigation__subline {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    margin: 0;
  }

  .navigation__items {
    padding: 0;
    margin: var(--spacing-small) 0 0 var(--spacing);
  }

  .navigation__item {
    font-size: var(--font-size-small);
    list-style-type: none;
  }

  .navigation__item:not(:first-child) {
    margin-top: var(--spacing-tiny);
  }
</style>
