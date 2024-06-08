<script>
  import { TypogprahyType } from "../Typography.types";
  import Typography from "../Typography.wc.svelte";
</script>

<div class="susThemedApp typographyExample">
  {#each TypogprahyType as type}
    <div>
        <p class="label">{type}</p>
        <Typography {type}>
            Stowarzyszenie Umarłych Statutów działa na rzecz praw ucznia. Zbyt często
            w życiu podążamy utartymi ścieżkami, zapominając, że można iść inaczej.
            Każdy z nas musi odnaleźć własną drogę.
          </Typography>
    </div>
  {/each}
</div>

<style>
    .typographyExample {
        display: flex;
        flex-direction: column;
        gap: 36px;
    }

    .label {
        text-transform: uppercase;
        font-size: 16px;
        color: var(--yellow);
        margin-block-end: 8px;
    }
</style>
