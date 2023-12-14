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
