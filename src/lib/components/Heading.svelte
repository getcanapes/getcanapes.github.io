<div class="ph">
  <slot />
  <span class="ph__divider"></span>
</div>

<style>
  .ph {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacing-large);
  }

  .ph__divider {
    background-color: var(--color-border);
    display: block;
    height: 1px;
    margin-top: var(--spacing-small);
    width: 100%;
  }
</style>