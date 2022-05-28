
<section class="slide-container">
  <div class="text-column">
    <slot name="text-column"/>
  </div>
    <slot name="image" class="slide-image"/>
</section>

<style>
  .slide-container {
    display: flex;
    flex-direction: row;
  }
  .slide-container .slide-image {
    flex:2;
  }
  .text-column {
    flex: 1;
  }

.slide-container :global(.slide-title) {
  font-size: calc(
    var(--base-fontsize) * var(--header-scale) * var(--header-scale) *
      var(--header-scale) * var(--header-scale) * var(--header-scale) *
      var(--header-scale)
  );
  text-align: justify;
  width: 100%;
  margin-bottom: 0;
  margin-top: 0;
}

.slide-container :global(.slide-blurb) {
  margin-top: auto;
  grid-area: blurb;
  height: auto;
}

@media only screen and (max-width: 1200px) {
  .slide-container  {
    flex-direction: column;
  }
  }
</style>