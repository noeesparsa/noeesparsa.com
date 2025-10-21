import type { FC, PropsWithChildren } from "react";

type TextProps = {
  className?: string;
};

const Text: FC<PropsWithChildren<TextProps>> = ({ children, className }) => {
  return <p className={`${className} font-opensans font-medium text-sm text-slate-900`}>{children}</p>;
};

export default Text;
