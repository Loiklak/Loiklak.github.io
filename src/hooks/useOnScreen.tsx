/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, MutableRefObject, useRef } from 'react';

// FOUND ON :
// https://usehooks.com/useOnScreen/

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useOnScreen(ref: MutableRefObject<any>, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [hasIntersected, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return hasIntersected;
}
