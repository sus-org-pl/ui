<svelte:options customElement="sus-progress-bar" />

<script lang="ts">
  import cn from "classnames";
  import type { ProgressBarColor, ProgressBarSize } from "./ProgressBar.types";

  export let color: ProgressBarColor = "yellow";
  export let progress: number = 0;
  export let size: ProgressBarSize = "medium";

  $: getCurrentProgressStyle = `width: ${progress}%`;

  const classNames = cn(["base", color, size]);
</script>

<div class={classNames}>
  <div class="progress" style={getCurrentProgressStyle} />
</div>

<style lang="scss">
  @import "./styles/colors.scss";
  @import "./styles/sizes.scss";

  .base {
    position: relative;
    overflow: hidden;
    width: 100%;
    background: var(--gray-white-100);
  }

  .progress {
    position: absolute;
    left: 0;
    background: var(--yellow);
    transition: 1s;
  }
</style>
