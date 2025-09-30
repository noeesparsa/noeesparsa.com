import type { FC, PropsWithChildren } from "react";

export const Text: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return <p className="font-manrope text-lg lg:text-xl xl:text-2xl">{children}</p>;
};

export default Text;
