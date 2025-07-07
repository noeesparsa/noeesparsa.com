import { useEffect, useState } from "react";

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "";

export const useScreenSize: () => ScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 376) {
        setScreenSize("xs");
      } else if (window.innerWidth >= 376 && window.innerWidth < 768) {
        setScreenSize("sm");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setScreenSize("md");
      } else if (window.innerWidth >= 1280) {
        setScreenSize("lg");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
