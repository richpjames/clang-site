<script>
  import ImageSlide from "./ImageSlide.svelte";
</script>

<ImageSlide>
  
  <div slot="text-column">
  <div class="banner-text" >
    <span>
      <h2>M A K E</h2>
    </span>
    <span>
      <h2>S O M E</h2>
    </span>
    <span>
      <h2>N O I S E</h2>
    </span>
  </div>
  <div class="blurb" >
    <h3>WELCOME</h3>
    <p>
      We are a home for musicians to rehearse, record and hire equipment. Take a
      look around our website and see what we do.
    </p>
    <p>Proudly based in Ponders End Enfield.</p>
  </div>
</div>
  <img
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F04a4c9f3-6560-47fd-bb1a-ff52b97c73a0_1.c139bc082ee544e784cd97ae05c79dc3.jpeg"
    alt="the studio"
    class="grid-image"
    slot="image"
  />
 
</ImageSlide>

<style>
  h2 {
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
  span {
    width: 100%;
  }
  h2:after {
    content: "";
    display: inline-block;
    width: 100%;
  }
  .banner-text {
    grid-area: banner;
  }
  :global(.logo-row) {
    display: grid;
    grid-template-areas:
      "banner image"
      "blurb image";
    grid-template-columns: 30% 70%;
  }
  .blurb {
    margin-top: auto;
    grid-area: blurb;
    height: auto;
  }
  .grid-image {
    grid-area: image;
    margin-left: auto;
  }
  section .blurb h3 {
    margin-top: 0;
  }
  @media only screen and (max-width: 720px) {
    :global(.logo-row) {
      display: grid;
      grid-template-areas:
        "banner"
        "image"
        "blurb";
      grid-template-columns: 100%;
    }
    section .blurb h3 {
      margin-top: calc(var(--line-height) * 1.5rem);
    }
  }
</style>
