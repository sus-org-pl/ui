<svelte:options customElement="sus-theme" />

<div class="susThemedApp">
  <slot>
    This is example content of the app. <br />
    Wrap your app with this AppTheme provider to get access to theming and fonts.
  </slot>
</div>

<style lang="scss">
  @use "./styles/fonts.css";
  @use "./styles/theme.css";

  .susThemedApp {
    font-family: Ergonomique;
  }
</style>
