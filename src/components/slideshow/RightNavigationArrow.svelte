<script lang="ts">
  export let index: number;
  export let length: number;
  export let onClick: () => void;
</script>

  <div class="arrow-wrapper"  on:click={onClick}>
    <span>{index}/{length}</span>
    <svg
    width="240"
    height="150"
    fill-rule="evenodd"
    clip-rule="evenodd"
    fill="#fff"
    viewBox="0 0 24 15"
    xmlns="http://www.w3.org/2000/svg">      
    <path
      d="M 21.883,8 14.356,14.235 15,15 24,7.479 15,0 14.355,0.764 21.884,7 H 0 v 1 z"/>    
    </svg>
  </div>
  
<style>

  .arrow-wrapper {
   margin-left: auto;
   position: relative;
  }

  span {
    position: absolute;
    bottom: 0;
  }

</style>
