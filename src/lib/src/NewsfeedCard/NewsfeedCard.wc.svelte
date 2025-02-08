<svelte:options customElement="sus-newsfeed-card" />

<script lang="ts">
  import cn from "classnames";
  import type { HTMLAttributeAnchorTarget } from "svelte/elements";

  import Badge from "../Badge/Badge.wc.svelte";
  import Typography from "../Typography/Typography.wc.svelte";
  import type { NewsfeedCardAsComponent } from "./NewsfeedCard.types";

  export let as: NewsfeedCardAsComponent = "article";
  export let href: string;
  export let target: HTMLAttributeAnchorTarget | undefined = undefined;
  export let tag: string | null = null;
  export let thumbnailImageSource: string;
  export let thumbnailAlt: string = "Miniaturka wpisu";
  export let title: string;
  export let excerpt: string;
  export let fullWidth: boolean = false;

  const classNames = cn(["base"], {
    fullWidth,
  });
</script>

<a {href} {target}>
  <svelte:element this={as} class={classNames}>
    <img src={thumbnailImageSource} alt={thumbnailAlt} />
    <div class="contentWrapper">
      {#if tag}
        <Badge color="blue">{tag}</Badge>
      {/if}
      <Typography type="title" as="h3">
        {title}
      </Typography>
      <div class="excerpt">
        <Typography type="body2" as="p">
          {excerpt}
        </Typography>
      </div>
    </div>
  </svelte:element>
</a>

<style lang="scss">
  @use "./styles/sizes.scss";

  a {
    text-decoration: none;
    color: inherit;
  }

  .base {
    background: var(--white);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  img {
    height: 140px;
    object-fit: cover;
    border-radius: 5px;
  }

  .contentWrapper {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 22px;
  }

  .excerpt {
    color: var(--blue-gray);
  }
</style>
