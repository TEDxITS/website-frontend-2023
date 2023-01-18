import { useEffect, useState } from 'react';

// Hooks to detect if element is visible in the viewport
export default function useOnScreen(
  element: React.RefObject<HTMLDivElement>,
  rootMargin?: string
) {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          if (element.current) {
            observer.unobserve(element.current);
          }
        }
      },
      {
        rootMargin,
      }
    );

    element.current && observer.observe(element.current);

    return () => {
      if (element.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(element.current);
      }
    };
  }, [element, rootMargin]);

  return isVisible;
}
