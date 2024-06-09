<script lang="ts">
  import Icon from "../Icon.wc.svelte";
  import resources from "../resources";
</script>

<div class="susThemedApp iconExample">
  {#each Object.keys(resources) as item}
    <div>
      <p class="label">{item}</p>
      <Icon {item} height={32} width={32} color="black" />
    </div>
  {/each}
</div>

<style>
  .iconExample {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 500px;
  }

  .label {
    text-transform: uppercase;
    font-size: 16px;
    color: var(--yellow);
    margin-block-end: 8px;
  }
</style>
