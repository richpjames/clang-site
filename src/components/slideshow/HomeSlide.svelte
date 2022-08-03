<script>
  import {toHTML} from '@portabletext/to-html'
  import { client, urlForImage } from "../../client";
  import ImageSlide from "./ImageSlide.svelte";

  let blurb;
  let image;

  client.fetch('*[_type == "slide" && title == "Title slide"]').then(result => {
    blurb = toHTML(result[0].body)
    image = urlForImage(result[0].image)
  })


</script>

<ImageSlide>
  
  <div slot="text-column" class="text-column">
    <div class="banner-text">
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
      {@html blurb}
    </div>

  </div>
  <img
    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F04a4c9f3-6560-47fd-bb1a-ff52b97c73a0_1.c139bc082ee544e784cd97ae05c79dc3.jpeg"
    alt="the studio"
    class="slide-image"
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
  h2:after {
    content: "";
    display: inline-block;
    width: 100%;
  }

  
  .blurb {
    margin-top: auto;
    height: auto;
  }
  
  :global(section .blurb h3) {
    margin-top: 0;
  }
  @media only screen and (max-width: 720px) {

    :global(section .blurb h3) {
      margin-top: calc(var(--line-height) * 1.5rem);
    }
  }
</style>
