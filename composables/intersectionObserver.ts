import { ref, onMounted } from "vue";

export const useIntersectionObserver = (elementId: string) => {
  const inView = ref<boolean>(false);

  onMounted(() => {
    const element: HTMLElement | null = document.getElementById(elementId);

    const intersectionObserver: IntersectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            inView.value = true;
          }
        }),
      { rootMargin: "-50px" }
    );

    if (element) {
      intersectionObserver.observe(element);
    }
  });

  return {
    inView,
  };
};
