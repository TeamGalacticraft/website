export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const startCountdown = (
  startValue: number,
  endValue: number,
  id: string,
) => {
  const countingElement: HTMLElement | null = document.getElementById(id);
  const duration: number = 2000;

  let currentNumber: number = startValue;
  let startTime: number | null = null;

  const easeOutQuad = (t: number): number => t * (2 - t);

  const animate = (timestamp: number): void => {
    if (!startTime) {
      startTime = timestamp;
    }

    const progress: number = timestamp - startTime;
    const percentage: number = Math.min(progress / duration, 1);
    const easedPercentage: number = easeOutQuad(percentage);

    currentNumber = Math.floor(
      easedPercentage * (endValue - startValue) + startValue,
    );

    if (countingElement) {
      countingElement.textContent = currentNumber.toLocaleString();
    }

    if (progress < duration) {
      // Schedule the next frame
      requestAnimationFrame(animate);
    }
  };

  const initLoad: string | null = sessionStorage.getItem("initLoad");

  if (initLoad && countingElement) {
    countingElement.textContent = endValue.toLocaleString();
  } else {
    requestAnimationFrame(animate);
  }
};
