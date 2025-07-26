<script lang="ts">
  export let maxLinesCount: number = 1;
</script>

<span
  style="
    line-clamp: {maxLinesCount}; 
    -webkit-line-clamp: {maxLinesCount}; 
    display: -webkit-box; 
    -webkit-box-orient: vertical; 
    overflow: hidden;
  "
>
  <slot />
</span>
