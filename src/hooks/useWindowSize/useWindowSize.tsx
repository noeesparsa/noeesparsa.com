import { useEffect, useState } from "react";

export type ScreenSize = "xs" | "sm" | "md" | "lg" | "";
export type ScreenInformation = {
  screenSize: ScreenSize;
  isMobile: boolean;
};

export const useScreen: () => ScreenInformation = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 376) {
        setScreenSize("xs");
        setIsMobile(true);
      } else if (window.innerWidth >= 376 && window.innerWidth < 768) {
        setScreenSize("sm");
        setIsMobile(true);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setScreenSize("md");
        setIsMobile(false);
      } else if (window.innerWidth >= 1280) {
        setScreenSize("lg");
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize, isMobile };
};
