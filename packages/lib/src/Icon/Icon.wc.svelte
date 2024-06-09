<svelte:options customElement="sus-icon" />

<script lang="ts">
  import type { IconHeight, IconItem, IconWidth } from "./Icon.types";
  import resources from "./resources";

  export let item: IconItem;
  export let color: string;
  export let height: IconHeight;
  export let width: IconWidth;
</script>

{@html resources[item]({ color, height, width })}
