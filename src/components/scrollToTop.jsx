import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.to("#root", {
      duration: 1,
      scrollTo: { y: 0 },
    });
  }, [pathname]);

  return null;
}
