<script lang="ts">
  export let index: number;
  export let length: number;
  export let onClick: () => void;
  export let size: number;
  const height = size * 0.625
  const width = size;
</script>

  <div class="arrow-wrapper"  on:click={onClick}>

    <span>{index}/{length}</span>
    <svg
    width={width}
    height={height}
    fill-rule="evenodd"
    clip-rule="evenodd"
    fill="#fff"
    viewBox="0 0 24 15"
    xmlns="http://www.w3.org/2000/svg"> 
      <path
         d="M 2.117,8 9.644,14.235 9,15 0,7.479 9,0 9.645,0.764 2.116,7 H 24 v 1 z"
         id="path188" />
    </svg>
    
  </div>

<style>
  .arrow-wrapper {
   margin-right: auto;
   position: relative;
  }

  span {
    position: absolute;
    right: 0;
    bottom: 0;
  }

</style>
