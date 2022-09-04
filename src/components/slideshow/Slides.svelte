<script>
  import RightNavigationArrow from "./RightNavigationArrow.svelte";
  import LeftNavigationArrow from "./LeftNavigationArrow.svelte";
  import HomeSlide from "../homePage/HomeSlide.svelte";
  import Slide from "./Slide.svelte";
  import { urlForImage } from "../../client";

  let currentIndex = 0;

  const arrowSize = 150;

  export let slides;

  slides.unshift(HomeSlide);
  console.log({ slides });
</script>

<div>
  {#each slides as slide, index}
    {#if index === currentIndex && index === 0}
      <svelte:component this={slides[currentIndex]} />
    {:else if index === currentIndex && index > 0 && typeof slide !== "function"}
      <Slide>
        <div slot="text-column" class="text-column">
          {@html slide.text}
        </div>
        <img src={slide.imageUrl} alt="oops" class="slide-image" slot="image" />
      </Slide>
    {/if}
  {/each}

  <div class="row">
    {#if currentIndex >= 1}
      <LeftNavigationArrow
        length={slides.length}
        index={currentIndex}
        onClick={() => (currentIndex -= 1)}
        size={arrowSize}
      />
    {/if}
    <RightNavigationArrow
      length={slides.length}
      index={currentIndex + 1}
      onClick={() =>
        currentIndex < slides.length - 1 ? currentIndex++ : currentIndex}
      size={arrowSize}
    />
  </div>
</div>

<style>
  .row {
    height: 8rem;
    margin-bottom: 1.8rem;
    display: flex;
    position: relative;
  }

  :global(.slide-image) {
    margin-left: var(--page-margin);
    width: 60%;
  }

  :global(.arrow-wrapper span) {
    margin-top: 10%;
  }

  :global(.arrow-wrapper) {
    margin-top: 5%;
    margin-top: auto;
    display: flex;
  }

  :global(.icon) {
    height: 60px;
    cursor: pointer;
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
