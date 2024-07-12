<svelte:options customElement="sus-avatar" />

<script lang="ts">
  import cn from "classnames";

  import type { AvatarSize } from "./Avatar.types";

  export let imageSource: string;
  export let alt: string;
  export let size: AvatarSize;

  const classNames = cn(["base", size]);
</script>

<img class={classNames} src={imageSource} {alt} />

<style lang="scss">
  @use "./styles/sizes.scss";

  .base {
    display: block;
    border: 4px solid #EEF2F6;
    border-radius: 100%;
    object-fit: cover;
  }
</style>
