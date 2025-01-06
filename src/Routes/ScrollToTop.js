import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTopWithAnimation = () => {
      const start = window.scrollY;
      const duration = 500; // Animation duration in ms
      const startTime = performance.now();

      const easeInOutCubic = (t) => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Clamp between 0 and 1
        const easeProgress = easeInOutCubic(progress);
        const scrollPosition = start * (1 - easeProgress);

        window.scrollTo(0, scrollPosition);

        if (elapsedTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    scrollToTopWithAnimation();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
