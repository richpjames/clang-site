<script>
  import { toHTML } from "@portabletext/to-html";
  import { client, urlForImage } from "../../client";
  import Slides from "../slideshow/Slides.svelte";

  const fetchSlides = async () =>
    await client.fetch('*[_type == "slide" && title == "Rehearsal space"]');

  const mapSlides = async () => {
    const slides = await fetchSlides();

    return slides
      .map((slide) => ({
        imageUrl: urlForImage(slide.image),
        text: toHTML(slide.body),
        order: slide.order,
      }))
      .sort((a, b) => a.order - b.order);
  };

  const generateSlides = mapSlides();
</script>

{#await generateSlides}
  <p>loading</p>
{:then slides}
  <Slides {slides} />
{/await}
