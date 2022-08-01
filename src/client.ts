import showdown from "showdown";
import sanityClient from "@sanity/client";

type APIRoute = "welcome-slide";

export const client = sanityClient({
  projectId: "cs5gmoox",
  dataset: "production",
  apiVersion: "2022-08-01", // use current UTC date
});
