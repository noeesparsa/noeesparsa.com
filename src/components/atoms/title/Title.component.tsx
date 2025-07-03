import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

export type TitleProps = {
  additionalClasses?: string;
};

export const Title: FC<Readonly<PropsWithChildren<TitleProps>>> = ({
  children,
  additionalClasses
}) => {
  return <p className={clsx("text-2xl lg:text-3xl font-bold", additionalClasses)}>{children}</p>;
};

export default Title;
