import type { MediaQueries } from "~/types/generic.types";

import { ref } from "vue";

const isSmall = ref<boolean>(false);
const isMedium = ref<boolean>(false);
const isLarge = ref<boolean>(false);
const isExtraLarge = ref<boolean>(false);

const isMatchingScreenWidth = (
  minWidth: keyof MediaQueries,
  maxWidth?: keyof MediaQueries,
): boolean => {
  const mediaQueries: MediaQueries = {
    sm: 500,
    md: 768,
    lg: 1024,
    xl: 1366,
  };

  if (maxWidth) {
    return window.matchMedia(
      `(min-width:${mediaQueries[minWidth]}px) and (max-width:${mediaQueries[maxWidth]}px)`,
    ).matches;
  } else {
    return window.matchMedia(`(min-width:${mediaQueries[minWidth]}px)`).matches;
  }
};

const setMediaQuerySizes = (): void => {
  isSmall.value = isMatchingScreenWidth("sm");
  isMedium.value = isMatchingScreenWidth("md");
  isLarge.value = isMatchingScreenWidth("lg");
  isExtraLarge.value = isMatchingScreenWidth("xl");
};

const useMediaQuery = (): void => {
  setMediaQuerySizes();

  window.addEventListener("resize", setMediaQuerySizes);
};

export { useMediaQuery, isSmall, isMedium, isLarge, isExtraLarge };
