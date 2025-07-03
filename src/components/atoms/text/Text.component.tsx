import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

export type TextProps = {
  additionalClasses?: string;
};

export const Text: FC<Readonly<PropsWithChildren<TextProps>>> = ({
  children,
  additionalClasses
}) => {
  return <p className={clsx("text-base lg:text-lg", additionalClasses)}>{children}</p>;
};

export default Text;
