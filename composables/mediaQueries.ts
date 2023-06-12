import { Ref, ref } from "vue";

interface MediaQueries {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const isSmall = ref<boolean>(false);
const isMedium = ref<boolean>(false);
const isLarge = ref<boolean>(false);
const isExtraLarge = ref<boolean>(false);

const isMatchingWidth = (
  minWidth: keyof MediaQueries,
  maxWidth?: keyof MediaQueries
): boolean => {
  const mediaQueries: MediaQueries = {
    sm: 500,
    md: 768,
    lg: 1024,
    xl: 1366,
  };

  if (maxWidth) {
    return window.matchMedia(
      `(min-width:${mediaQueries[minWidth]}px) and (max-width:${mediaQueries[maxWidth]}px)`
    ).matches;
  } else {
    return window.matchMedia(`(min-width:${mediaQueries[minWidth]}px)`).matches;
  }
};

const setSizes = (): void => {
  isSmall.value = isMatchingWidth("sm");
  isMedium.value = isMatchingWidth("md");
  isLarge.value = isMatchingWidth("lg");
  isExtraLarge.value = isMatchingWidth("xl");
};

const useMediaQuery = (): void => {
  setSizes();

  window.addEventListener("resize", setSizes);
};

export { useMediaQuery, isSmall, isMedium, isLarge, isExtraLarge };
