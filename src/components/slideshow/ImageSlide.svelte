
<section class="container">
  <div class="text-column">
    <slot name="text-column"/>
  </div>
  <div class="image">
    <slot name="image" class="image"/>
  </div>  
</section>

<style>
  .container {
    display: flex;
  }
  .container .image {
    margin-left:auto;
    width: 70%;
  }
  .text-column {
    width: 30%;
  }

.container :global(.slide-title) {
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

.container :global(.slide-blurb) {
  margin-top: auto;
  grid-area: blurb;
  height: auto;
}

@media only screen and (max-width: 720px) {
  .container .image {
    width: 100%;
  }
  .text-column {
    width: 100%;
  }

}
</style>