import { createClient } from "next-sanity";
// import myConfiguredSanityClient from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "e1sfd0ie",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
