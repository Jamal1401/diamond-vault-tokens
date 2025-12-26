import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navOrder = [
  "/tokenisation",
  "/tokenisation/asset-owners",
  "/tokenisation/investors",
  "/tokenisation/how-it-works",
];

export const useScrollToNextPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasNavigated = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset navigation flag when route changes
    hasNavigated.current = false;
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // Prevent multiple navigations
      if (hasNavigated.current) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if user has scrolled to the bottom (within 50px threshold)
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 50;

      if (isAtBottom) {
        // Clear any existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Add a small delay to ensure user has stopped scrolling
        scrollTimeout.current = setTimeout(() => {
          if (hasNavigated.current) return;
          
          const currentIndex = navOrder.indexOf(location.pathname);
          const nextIndex = currentIndex + 1;

          // Navigate to next page if it exists
          if (nextIndex < navOrder.length) {
            hasNavigated.current = true;
            navigate(navOrder[nextIndex]);
            // Scroll to top of new page
            window.scrollTo({ top: 0, behavior: "instant" });
          }
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [navigate, location.pathname]);
};
