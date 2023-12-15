<script lang="ts">

</script>

<nav>
  <div class="navigation__header">
    <div class="navigation__logo">Canapés</div>
    <div class="navigation__version">0.7.0</div>
  </div>
  <div class="navigation__body">
    <div class="navigation__section">
      <h3 class="navigation__subline">Getting started</h3>
      <ul>
        <li class="navigation__item">Home</li>
        <li class="navigation__item">Installation</li>
        <li class="navigation__item">Usage</li>
      </ul>
    </div>
    <div class="navigation__section">
      <h3 class="navigation__subline">Customization</h3>
      <ul>
        <li class="navigation__item">Design Tokens</li>
        <li class="navigation__item">Color schemes</li>
        <li class="navigation__item">Component styles</li>
      </ul>
    </div>
    <div class="navigation__section">
      <h3 class="navigation__subline">Components</h3>
      <ul>
        <li class="navigation__item">Badge</li>
        <li class="navigation__item">Breadcrumb</li>
        <li class="navigation__item">Breadcrumb item</li>
        <li class="navigation__item">Button</li>
        <li class="navigation__item">Details</li>
        <li class="navigation__item">Icon</li>
        <li class="navigation__item">Progress bar</li>
        <li class="navigation__item">QR code</li>
        <li class="navigation__item">Relative time</li>
        <li class="navigation__item">Shortened text</li>
        <li class="navigation__item">Skeleton</li>
        <li class="navigation__item">Stage</li>
      </ul>
    </div>
  </div>
</nav>

<style>
  nav {
    border-right: var(--border-width) var(--border-style) var(--border-color);
    min-height: 100vh;
    position: fixed;
    width: var(--navigation-width);
  }

  .navigation__header {
    margin: var(--spacing);
  }

  .navigation__logo {
    color: var(--color-brand);
    font-family: var(--logo-font);
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }
</style>
