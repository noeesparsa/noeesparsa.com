import type { FC, PropsWithChildren } from "react";

export const CardHeaderTag: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <h3 className="px-3 py-1 rounded-full font-bold text-sm bg-green-400 text-green-900 w-fit">
      {children}
    </h3>
  );
};

export default CardHeaderTag;
