<svelte:options customElement="sus-navbar" />

<script lang="ts">
  import cn from "classnames";

  import Logo from "../Logo/Logo.wc.svelte";

  export let sticky: boolean = false;

  const classNames = cn(["base"], {
    sticky,
  });
</script>

<nav class={classNames}>
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

    padding: 22px 88px;
    width: 100%;

    background: var(--white);
    border-radius: 0 0 8px 8px;
    box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 10%);

    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
    }
  }

  .elementsWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 120px;
  }
</style>
