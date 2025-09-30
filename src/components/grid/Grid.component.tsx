import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import type { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { clsx } from "clsx";

import { useMemo } from "react";
import { type ScreenSize, useScreen } from "../../hooks/useWindowSize/useWindowSize";
import About from "../about/About.component";
import ComingSoon from "../comingSoon/ComingSoon.component";
import SocialNetworkCard from "../socialNetworkCard/SocialNetworkCard.component";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layouts = {
  lg: [
    { i: "about", x: 0, y: 0, w: 2, h: 1 },
    { i: "photo", x: 2, y: 0, w: 1, h: 1 },
    { i: "linkedin", x: 0, y: 1, w: 1, h: 1 },
    { i: "github", x: 1, y: 1, w: 1, h: 1 },
    { i: "experiences", x: 0, y: 2, w: 2, h: 2 },
    { i: "stack", x: 3, y: 2, w: 1, h: 1 },
    { i: "project1", x: 3, y: 0, w: 1, h: 2 },
    { i: "project2", x: 2, y: 1, w: 1, h: 2 },
    { i: "testimonials", x: 2, y: 3, w: 2, h: 1 },
    { i: "footer", x: 1, y: 4, w: 2, h: 1 }
  ],
  md: [
    { i: "about", x: 0, y: 0, w: 2, h: 2 },
    { i: "photo", x: 2, y: 0, w: 1, h: 1 },
    { i: "linkedin", x: 0, y: 2, w: 1, h: 1 },
    { i: "github", x: 1, y: 2, w: 1, h: 1 },
    { i: "experiences", x: 0, y: 3, w: 2, h: 3 },
    { i: "stack", x: 3, y: 2, w: 1, h: 1 },
    { i: "project1", x: 3, y: 0, w: 1, h: 2 },
    { i: "project2", x: 2, y: 1, w: 1, h: 2 },
    { i: "testimonials", x: 2, y: 3, w: 2, h: 2 },
    { i: "footer", x: 2, y: 5, w: 2, h: 1 }
  ],
  sm: [
    { i: "about", x: 0, y: 0, w: 4, h: 4 },
    { i: "photo", x: 0, y: 5, w: 2, h: 2 },
    { i: "linkedin", x: 3, y: 5, w: 1, h: 1 },
    { i: "github", x: 2, y: 6, w: 1, h: 1 },
    { i: "blank1", x: 2, y: 5, w: 1, h: 1 },
    { i: "blank2", x: 3, y: 6, w: 1, h: 1 },
    { i: "experiences", x: 0, y: 7, w: 4, h: 4 },
    { i: "stack", x: 0, y: 9, w: 4, h: 4 },
    { i: "project1", x: 0, y: 8, w: 2, h: 4 },
    { i: "project2", x: 2, y: 8, w: 2, h: 4 },
    { i: "testimonials", x: 0, y: 10, w: 4, h: 4 },
    { i: "footer", x: 0, y: 11, w: 4, h: 2 }
  ]
};
const Grid = () => {
  const { screenSize, isMobile } = useScreen();

  const rowHeightByScreenSize: Record<ScreenSize, number> = useMemo(() => {
    return {
      xs: 60,
      sm: 74,
      md: 172,
      lg: 300,
      "": 300
    };
  }, []);

  const cardBorderRadius = useMemo(() => (isMobile ? "rounded-2xl" : "rounded-4xl"), [isMobile]);

  const socialCardIconSize: Record<ScreenSize, SizeProp> = useMemo(() => {
    return {
      xs: "2x" as SizeProp,
      sm: "2x" as SizeProp,
      md: "3x" as SizeProp,
      lg: "4x" as SizeProp,
      "": "4x" as SizeProp
    };
  }, []);

  return (
    <div className="mx-auto h-full w-[320px] sm:w-[376px] md:w-[768px] xl:w-[1280px]">
      <ResponsiveGridLayout
        breakpoints={{ lg: 1279, md: 767, sm: 375 }}
        className="layout h-full w-full"
        cols={{ lg: 4, md: 4, sm: 4 }}
        containerPadding={[16, 16]}
        isDraggable={false}
        isResizable={false}
        layouts={layouts}
        margin={[16, 16]}
        rowHeight={rowHeightByScreenSize[screenSize]}
      >
        <div className={clsx(cardBorderRadius, "overflow-hidden bg-white p-8")} key="about">
          <About />
        </div>

        <div className={clsx(cardBorderRadius, "bg-white p-4 lg:p-8")} key="photo">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <img alt="me" src="/img.png" />
          </div>
        </div>
        <div className={clsx(cardBorderRadius, "bg-[#0a66c2] p-8")} key={"linkedin"}>
          <SocialNetworkCard
            href="https://www.linkedin.com/in/noe-esparsa/"
            icon={faLinkedin}
            linkText={"LinkedIn"}
            size={socialCardIconSize[screenSize]}
          />
        </div>
        <div className={clsx(cardBorderRadius, "bg-[#24292e] p-8")} key="github">
          <SocialNetworkCard
            href="https://github.com/noeesparsa"
            icon={faGithub}
            linkText={"Github"}
            size={socialCardIconSize[screenSize]}
          />{" "}
        </div>
        <div className={clsx(cardBorderRadius, "bg-white p-8")} key="experiences">
          <ComingSoon title="Experiences section is coming soon..." />
        </div>
        <div className={clsx(cardBorderRadius, "bg-white p-8")} key="stack">
          <ComingSoon title="Stack section is coming soon..." />
        </div>
        <div className={clsx(cardBorderRadius, "bg-white p-8")} key="project1">
          <ComingSoon title="Project 1 section is coming soon..." />
        </div>
        <div className={clsx(cardBorderRadius, "bg-white p-8")} key="project2">
          <ComingSoon title="Project 2 section is coming soon..." />
        </div>
        <div className={clsx(cardBorderRadius, "bg-white p-8")} key="testimonials">
          <ComingSoon title="Testimonials section is coming soon..." />
        </div>
        <div className={clsx(cardBorderRadius, "bg-white p-8")} key="footer">
          <ComingSoon title="Footer section is coming soon..." />
        </div>
        {isMobile && <div key="blank1" />}
        {isMobile && <div key="blank2" />}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Grid;
