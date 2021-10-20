import {
  createClient,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";

const config = {
  projectId: "0azw1850",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
};
export const sanityClient = createClient(config);
