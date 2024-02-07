<script lang="ts">
  import '@canapes/canapes/lib/components/button/button.js'
  import '@canapes/canapes/lib/components/icon/icon.js'
  
  import { page } from '$app/stores'
  import pkg from '../../../package.json'
</script>

<aside class="navigation">
  <div class="navigation__header">
    <a href="/" class="navigation__logo">Canapés</a>
    <span class="navigation__version">{ pkg.version }</span>
  </div>
  <div class="navigation__body">
    <div class="navigation__buttons">
      <ca-button href="https://github.com/getcanapes/canapes" target="_blank" color-scheme="unobtrusive" size="small">
        <ca-icon slot="prefix" icon="github"></ca-icon>
        Code
      </ca-button>
      <ca-button href="https://www.npmjs.com/package/@canapes/canapes" target="_blank" color-scheme="unobtrusive" size="small">
        <ca-icon slot="prefix" icon="box"></ca-icon>
        NPM
      </ca-button>
    </div>
    <div class="navigation__section">
      <h3 class="navigation__subline">Getting Started</h3>
      <ul class="navigation__items">
        <li class="navigation__item">
          <a href="/" class="navigation__link" class:active={$page.url.pathname === '/'}>Home</a>
        </li>
        <li class="navigation__item">
          <a href="/installation" class="navigation__link" class:active={$page.url.pathname === '/installation'}>Installation</a>
        </li>
        <li class="navigation__item">
          <a href="/usage" class="navigation__link" class:active={$page.url.pathname === '/usage'}>Usage</a>
        </li>
      </ul>
    </div>
    <div class="navigation__section">
      <h3 class="navigation__subline">Customization</h3>
      <ul class="navigation__items">
        <li class="navigation__item">
          <a href="/customization/design-tokens" class="navigation__link" class:active={$page.url.pathname === '/customization/design-tokens'}>Design Tokens</a>
        </li>
        <li class="navigation__item">
          <a href="/customization/color-schemes" class="navigation__link" class:active={$page.url.pathname === '/customization/color-schemes'}>Color Schemes</a>
        </li>
        <li class="navigation__item">
          <a href="/customization/custom-styles" class="navigation__link" class:active={$page.url.pathname === '/customization/custom-styles'}>Custom Styles</a>
        </li>
      </ul>
    </div>
    <div class="navigation__section">
      <h3 class="navigation__subline">Components</h3>
      <ul class="navigation__items">
        <li class="navigation__item">
          <a href="/components/badge" class="navigation__link" class:active={$page.url.pathname === '/components/badge'}>Badge</a>
        </li>
        <li class="navigation__item">
          <a href="/components/breadcrumb" class="navigation__link" class:active={$page.url.pathname === '/components/breadcrumb'}>Breadcrumb</a>
        </li>
        <li class="navigation__item">
          <a href="/components/breadcrumb-item" class="navigation__link" class:active={$page.url.pathname === '/components/breadcrumb-item'}>Breadcrumb Item</a>
        </li>
        <li class="navigation__item">
          <a href="/components/button" class="navigation__link" class:active={$page.url.pathname === '/components/button'}>Button</a>
        </li>
        <li class="navigation__item">
          <a href="/components/details" class="navigation__link" class:active={$page.url.pathname === '/components/details'}>Details</a>
        </li>
        <li class="navigation__item">
          <a href="/components/grid" class="navigation__link" class:active={$page.url.pathname === '/components/grid'}>Grid</a>
        </li>
        <li class="navigation__item">
          <a href="/components/icon" class="navigation__link" class:active={$page.url.pathname === '/components/icon'}>Icon</a>
        </li>
        <li class="navigation__item">
          <a href="/components/icon-button" class="navigation__link" class:active={$page.url.pathname === '/components/icon-button'}>Icon Button</a>
        </li>
        <li class="navigation__item">
          <a href="/components/notification" class="navigation__link" class:active={$page.url.pathname === '/components/notification'}>Notification</a>
        </li>
        <li class="navigation__item">
          <a href="/components/progress-bar" class="navigation__link" class:active={$page.url.pathname === '/components/progress-bar'}>Progress Bar</a>
        </li>
        <li class="navigation__item">
          <a href="/components/qr-code" class="navigation__link" class:active={$page.url.pathname === '/components/qr-code'}>QR Code</a>
        </li>
        <li class="navigation__item">
          <a href="/components/relative-time" class="navigation__link" class:active={$page.url.pathname === '/components/relative-time'}>Relative Time</a>
        </li>
        <li class="navigation__item">
          <a href="/components/shortened-text" class="navigation__link" class:active={$page.url.pathname === '/components/shortened-text'}>Shortened Text</a>
        </li>
        <li class="navigation__item">
          <a href="/components/skeleton" class="navigation__link" class:active={$page.url.pathname === '/components/skeleton'}>Skeleton</a>
        </li>
        <li class="navigation__item">
          <a href="/components/stage" class="navigation__link" class:active={$page.url.pathname === '/components/stage'}>Stage</a>
        </li>
        <li class="navigation__item">
          <a href="/components/tooltip" class="navigation__link" class:active={$page.url.pathname === '/components/tooltip'}>Tooltip</a>
        </li>
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
    justify-content: flex-start;
    margin: var(--spacing) 0 0;
    position: relative;
  }

  .navigation__logo {
    color: var(--color-brand);
    font-family: var(--logo-font);
    font-size: 3rem;
    text-align: center;
    text-decoration: none;
  }

  .navigation__version {
    color: var(--color-text-unobtrusive);
    font-size: var(--font-size-tiny);
    margin-left: var(--spacing);
  }

  .navigation__buttons ca-button::part(prefix) {
    margin-left: var(--spacing-small);
  }

  .navigation__buttons ca-button:not(:first-child) {
    margin-left: var(--spacing-small);
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
    font-size: var(--font-size);
    font-weight: var(--font-weight-bold);
    margin: 0;
  }

  .navigation__items {
    padding: 0;
    margin: var(--spacing-small) 0 0 var(--spacing);
  }

  .navigation__item {
    font-size: var(--font-size);
    list-style-type: none;
  }

  .navigation__item:not(:first-child) {
    margin-top: var(--spacing-tiny);
  }

  .navigation__link {
    text-decoration: none;
  }

  .navigation__link:hover {
    color: var(--color-text);
    text-decoration: underline;
  }

  .navigation__link.active {
    color: var(--color-brand);
  }
</style>
