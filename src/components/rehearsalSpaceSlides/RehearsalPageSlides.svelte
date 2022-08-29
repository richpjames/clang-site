<script>
    import {toHTML} from '@portabletext/to-html'
    import { client, urlForImage } from "../../client";
    import Slides from "../rehearsalSpaceSlides/Slides.svelte"



    const fetchSlides = async () => {
      return client.fetch('*[_type == "rehearsal-space"]')
    }

    const mapSlides = async () => {
      const slides = await fetchSlides()
      console.log(slides)
      return slides.map(slide => ({imageUrl: urlForImage(slide.image), text: toHTML(slide.body)}))
    }

    const generateSlides = mapSlides()
</script>

{#await generateSlides}
  <p>loading</p>
{:then slides} 
  <Slides {slides}/>
{/await}

