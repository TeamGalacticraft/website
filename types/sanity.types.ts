export interface SanityImage extends SanityValues {
  asset: SanityAsset;
}

export interface SanityImages {
  images: SanityImage[];
  index: number;
}

export interface SanityAsset {
  _ref: string;
  _type: string;
}

export interface SanityProp<T> {
  value: T;
}

export interface SanityValues {
  _key: string;
  _type: string;
}

export interface SanitySpan extends SanityBodyItem {
  children: SanitySpanChildren[];
}

export interface SanitySpanChildren extends SanityValues {
  marks: any[];
  text: string;
}

export interface SanityBodyItem extends SanityValues {
  markDefs: any[];
  style: string;
}

export interface SanityLineBreak extends SanityValues {
  style: string;
}

export interface SanityYoutube extends SanityValues {
  url: string;
}

export interface SanityGallery extends SanityValues {
  images: SanityImage[];
}

export interface SanityCategory extends SanityValues {
  _ref: string;
}

export type SanityBody = (
  | SanitySpan
  | SanityLineBreak
  | SanityYoutube
  | SanityGallery
)[];

export interface SanitySlug {
  current: string;
  _type: string;
}

export interface SanityBlog {
  body: SanityBody;
  description: string;
  publishedAt: string;
  mainImage: SanityImage;
  categories: SanityCategory[];
  title: string;
  slug: SanitySlug;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
