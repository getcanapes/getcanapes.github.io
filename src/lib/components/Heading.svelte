<div class="ph">
  <h3><slot /></h3>
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
    margin-top: var(--spacing);
    width: 100%;
  }

  .ph h3 {
    font-size: 1.5rem;
    font-weight: var(--font-weight-bold);
  }
</style>