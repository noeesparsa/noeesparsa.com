import { createElement, type FC, type PropsWithChildren } from "react";

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5;
  muted?: boolean;
};

const titleLevelToFontSize: Record<TitleProps["level"], string> = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
};

const Title: FC<Readonly<PropsWithChildren<TitleProps>>> = ({ level, children, muted }) => {
  return createElement(
    `h${level}`,
    {
      className: `${titleLevelToFontSize[level]} font-montserrat ${muted ? "text-neutral-400 font-bold" : "text-neutral-900 font-extrabold"}`,
    },
    children,
  );
};

export default Title;
