export interface InView {
  inView: Ref<boolean>;
}

export interface MediaQueries {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface DownloadOptions {
  text: string;
  icon: string;
  route: string;
  iconSize: number;
}
