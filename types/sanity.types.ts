export interface SanityImage extends SanityProp {
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

export interface SanityProp {
  _key: string;
  _type: string;
}
