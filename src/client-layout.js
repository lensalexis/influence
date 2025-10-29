"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ReactLenis, useLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

function ScrollReset({ children }) {
  const pathname = usePathname();
  const lenis = useLenis();

  // Reset scroll position when route changes
  useEffect(() => {
    // Multiple scroll resets to ensure it works despite timing issues
    const resetScroll = () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    // Immediate reset
    resetScroll();
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(resetScroll);
    
    // Reset after view transition might complete (accounts for 2000ms transition)
    const timeoutId1 = setTimeout(resetScroll, 100);
    const timeoutId2 = setTimeout(resetScroll, 500);
    const timeoutId3 = setTimeout(resetScroll, 2100);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
    };
  }, [pathname, lenis]);

  return <>{children}</>;
}

export default function ClientLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollSettings = isMobile
    ? {
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 1.5,
        infinite: false,
        lerp: 0.09,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      }
    : {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      };

  return (
    <ViewTransitions>
      <ReactLenis root options={scrollSettings}>
        <ScrollReset>{children}</ScrollReset>
      </ReactLenis>
    </ViewTransitions>
  );
}
