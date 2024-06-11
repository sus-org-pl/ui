<svelte:options customElement="sus-badge" />

<script lang="ts">
  import cn from "classnames";

  import Typography from "../Typography/Typography.wc.svelte";
  import type { BadgeColor } from "./Badge.types";

  export let color: BadgeColor;

  const classNames = cn(["base", color]);
</script>

<div class={classNames}>
  <Typography type="nav" as="p">
    <slot>Badge</slot>
  </Typography>
</div>

<style lang="scss">
    @use "./styles/colors.scss";

    .base {
        width: max-content;
        padding: 4px 10px;
        border-radius: 5px;
        text-transform: uppercase;
    }
</style>
