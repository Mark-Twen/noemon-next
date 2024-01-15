import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "e1sfd0ie",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});
