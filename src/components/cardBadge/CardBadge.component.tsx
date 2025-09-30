import type { FC, PropsWithChildren } from "react";

export const CardBadge: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <div className="flex w-fit items-center rounded-4xl bg-green-200 px-3 py-1">{children}</div>
  );
};

export default CardBadge;
