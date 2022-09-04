<script>
  import Slide from "../slideshow/Slide.svelte";
  import NavigationArrows from "../slideshow/NavigationArrows.svelte";
  let currentIndex = 0;

  export let slides;
</script>

<div>
  {#each slides as slide, index}
    {#if index === currentIndex}
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
</style>
