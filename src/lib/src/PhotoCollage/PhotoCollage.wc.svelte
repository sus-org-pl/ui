<script lang="ts">
  import type {
    PhotoCollageImageAlts,
    PhotoCollageImageSources,
  } from "./PhotoCollage.types";

  export let imagesSources: PhotoCollageImageSources;
  export let imagesAlts: PhotoCollageImageAlts = undefined;
</script>

<div class="photoCollage">
  <div />
  <div />
  <div />
  <div class="images">
    {#each imagesSources as src, index}
      <img {src} alt={imagesAlts ? imagesAlts[index] : ""} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import "./styles/decorators.scss";
  @import "./styles/images.scss";

  .photoCollage {
    position: relative;
    width: 100%;
  }
</style>
