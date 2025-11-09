import { useEffect, useCallback } from "react";
/**
 * React hook that sets equal height for all elements with the specified class name.
 *
 * This hook adjusts the height of all elements with the given class name to match
 * the height of the tallest element in the group. Optionally, extra spacing can be added
 * to the height.
 *
 * @param {string} className - The class name of the elements to equalize height.
 * @param {number|null} [extraSpacing=null] - Optional additional height in pixels to add to the tallest element's height. If not provided, no extra spacing is added.
 */
export const useEqualHeight = (
  selector: string | NodeListOf<Element>,
  extraSpacing: number | null = null
) => {
  const adjustHeight = useCallback(() => {
    // Only run on screens above 560px
    // if (window.innerWidth <= 560) {
    //   // Reset heights to auto on mobile
    //   resetHeights();
    //   return;
    // }

    const elements =
      typeof selector === "string"
        ? document.querySelectorAll(selector)
        : selector;
    let maxHeight = 0;

    // Reset heights to auto
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.style.height = "auto";
    }

    // Calculate max height
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      const height = element.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    }

    // Set equal heights
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.style.height = `${maxHeight + (extraSpacing || 0)}px`;
    }
  }, [selector, extraSpacing]);

  useEffect(() => {
    // Wait for images to load before calculating heights
    const waitForImages = () => {
      // Only run on screens above 560px
      if (window.innerWidth <= 560) {
        return;
      }

      const elements =
        typeof selector === "string"
          ? document.querySelectorAll(selector)
          : selector;
      const images = Array.from(elements).flatMap((el) =>
        Array.from(el.querySelectorAll("img"))
      );

      if (images.length === 0) {
        // No images found, proceed immediately
        adjustHeight();
        return;
      }

      let loadedImages = 0;
      const totalImages = images.length;

      const checkAllLoaded = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          // All images loaded, adjust heights
          setTimeout(adjustHeight, 100); // Small delay to ensure layout is updated
        }
      };

      images.forEach((img: HTMLImageElement) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener("load", checkAllLoaded);
          img.addEventListener("error", checkAllLoaded); // Also handle errors
        }
      });
    };

    // Initial call - ensure DOM is ready first
    const timeoutId = setTimeout(() => {
      adjustHeight();
      waitForImages(); // Also wait for images and adjust again if needed
    }, 0);

    // Add event listeners
    window.addEventListener("resize", adjustHeight);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", adjustHeight);
    };
  }, [adjustHeight, selector]);
};
