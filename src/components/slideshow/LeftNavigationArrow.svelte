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
  .arrow-wrapper{
    width: 138px;
    margin-left: 7px;
  }

  .arrow-wrapper span{
    margin-left: auto;
  }

  .arrow::after,
  .arrow::before {
    content: "";
    position: absolute;
    width: 62px;
    height: 10px;
    left: -13px;
    background-color: var(--text);
  }

  .arrow::after {
    bottom: -18.5px;
    transform: rotate(45deg);
  }

  .arrow::before {
    bottom: 18.5px;
    transform: rotate(-45deg);
  }
</style>
