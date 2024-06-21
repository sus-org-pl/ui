<svelte:options customElement="sus-navbar" />

<script>
  import Logo from "../Logo/Logo.wc.svelte";
</script>

<nav class="base">
  <Logo height={38} clickable />
  <ul class="elementsWrapper">
        <slot>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
        </slot>
  </ul>
</nav>

<style lang="scss">
  .base {
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    background: var(--white);

    padding: 22px 88px;
  }

  .elementsWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 120px;
  }
</style>
