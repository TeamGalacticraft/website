import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "yiv23jd7",
  dataset: "production",
  apiVersion: "2023-06-10",
});

export const builder = imageUrlBuilder(client);

export const cmsImage = (source: any): any => {
  return builder.image(source);
};

export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
