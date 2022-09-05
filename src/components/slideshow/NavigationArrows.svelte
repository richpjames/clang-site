<script>
  import RightNavigationArrow from "./RightNavigationArrow.svelte";
  import LeftNavigationArrow from "./LeftNavigationArrow.svelte";

  const ARROW_SIZE = 150;

  export let currentIndex;
  export let slidesLength;
  export let onClickLeft;
  export let onClickRight;
</script>

<div class="row">
  {#if currentIndex >= 1}
    <LeftNavigationArrow
      length={slidesLength}
      index={currentIndex}
      onClick={onClickLeft}
      size={ARROW_SIZE}
    />
  {/if}
  <RightNavigationArrow
    length={slidesLength}
    index={currentIndex + 1}
    onClick={onClickRight}
    size={ARROW_SIZE}
  />
</div>

<style>
  .row {
    height: 8rem;
    margin-bottom: 1.8rem;
    display: flex;
    position: relative;
  }

  :global(.arrow-wrapper span) {
    margin-top: 10%;
  }

  :global(.arrow-wrapper) {
    margin-top: 5%;
    margin-top: auto;
    display: flex;
  }

  :global(.arrow) {
    position: absolute;
    width: 9%;
    height: 10px;
    background-color: var(--text);
  }

  :global(.arrow::after, .arrow::before) {
    content: "";
    position: absolute;
    width: 62px;
    height: 10px;
    background-color: var(--text);
  }

  :global(.arrow::after) {
    bottom: -18.5px;
    transform: rotate(45deg);
  }

  :global(.arrow::before) {
    bottom: 18.5px;
    transform: rotate(-45deg);
  }

  @media only screen and (max-width: 720px) {
    .row {
      display: none;
    }
  }
</style>
