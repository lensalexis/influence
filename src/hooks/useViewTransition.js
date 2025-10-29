"use client";
import { useTransitionRouter } from "next-view-transitions";
import { useLenis } from "lenis/react";

export const useViewTransition = () => {
  const router = useTransitionRouter();
  const lenis = useLenis();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0,
          transform: " scale(0.5)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          clipPath: "circle(75% at 50% 50%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const navigateWithTransition = (href, options = {}) => {
    const currentPath = window.location.pathname;
    if (currentPath === href) {
      return;
    }

    // Don't reset scroll on current page - let navigation happen in background
    router.push(href, {
      onTransitionReady: () => {
        slideInOut();
        
        // Reset scroll on new page after transition starts (but before it's visible)
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          if (lenis) {
            lenis.scrollTo(0, { immediate: true });
          }
        }, 100);
        
        // Reset after transition completes (2000ms + buffer) to ensure it's at top
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
          if (lenis) {
            lenis.scrollTo(0, { immediate: true });
          }
        }, 2100);
      },
      ...options,
    });
  };

  return { navigateWithTransition, router };
};
