import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "cs5gmoox",
  dataset: "production",
  apiVersion: "2022-08-01", // use current UTC date
});

const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  return builder.image(source);
}
