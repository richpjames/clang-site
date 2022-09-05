<script>
  import HomeSlide from "../homePage/HomeSlide.svelte";
  import Slide from "./Slide.svelte";
  import NavigationArrows from "./NavigationArrows.svelte";

  let currentIndex = 0;

  export let slides;
  export let page;
</script>

<div>
  {#each slides as slide, index}
    {#if index === currentIndex && index === 0 && page === "home"}
      <svelte:component this={slides[currentIndex]} />
    {:else if index === currentIndex}
      <Slide>
        <div slot="text-column" class="text-column">
          {@html slide.text}
        </div>
        <img src={slide.imageUrl} alt="oops" class="slide-image" slot="image" />
      </Slide>
    {/if}
  {/each}

  <NavigationArrows
    {currentIndex}
    slidesLength={slides.length}
    onClickLeft={() => (currentIndex -= 1)}
    onClickRight={() =>
      currentIndex < slides.length - 1 ? currentIndex++ : currentIndex}
  />
</div>

<style>
  :global(.slide-image) {
    margin-left: var(--page-margin);
    width: auto;
    height: var(--slide-image-size);
  }
</style>
