<svelte:options customElement="sus-navlink" />

<script lang="ts">
  import Typography from "../Typography/Typography.wc.svelte";

  export let href: string;
</script>

<a {href} class="base">
  <Typography type="nav" as="span">
    <slot>Aktualności</slot>
  </Typography>
</a>

<style lang="scss">
  .base {
    text-decoration: none;
    color: var(--gray);
    transition: .25s;

    &:hover {
      color: var(--black);
    }
  }
</style>
