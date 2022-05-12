<script lang="ts">
  export let index: number;
  export let length: number;
  export let onClick: () => void;
</script>

  <div class="arrow-wrapper"  on:click={onClick}>
    <div class="icon">
      <div class="arrow"></div>
    </div>
    <span>{index}/{length}</span>
  </div>
  
<style>

  .arrow-wrapper {
    width: 145px;
   margin-left: auto;
 }

  .arrow::after,
  .arrow::before {
    right: -13px;
  }

  .arrow::after {
    top: -18.5px;
  }

  .arrow::before {
    top: 18.5px;
  }
</style>
