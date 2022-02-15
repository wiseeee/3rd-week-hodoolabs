import { useRef, useEffect, useCallback, MutableRefObject } from "react";

interface ScrollFadeIn {
  ref?: MutableRefObject<HTMLDivElement | null>;
  style: {
    opacity: number;
    transform: string;
  };
}

const useScrollFadeIn = (
  direction = "up",
  duration = 1,
  delay = 0
): ScrollFadeIn => {
  const dom = useRef<HTMLDivElement>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      case "stay":
        return "translate3d(0, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const {
        current: { style },
      } = dom;
      if (entry.isIntersecting) {
        style.transitionProperty = "all";
        style.transitionDuration = `${duration}s`;
        style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        style.transitionDelay = `${delay}s`;
        style.opacity = "1";
        style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;
