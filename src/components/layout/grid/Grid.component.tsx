import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  const gridClassesSM: string = "auto-rows-[160px] max-w-[336px] grid-cols-2";
  const gridClassesMD: string = "md:auto-rows-[240px] md:max-w-[752px] md:grid-cols-3";
  const gridClassesLG: string = "lg:auto-rows-[240px] lg:max-w-[1008px] lg:grid-cols-4";

  return (
    <section
      className={clsx(
        "mx-auto grid grid-flow-row-dense gap-4 py-8",
        gridClassesSM,
        gridClassesMD,
        gridClassesLG
      )}
    >
      {children}
    </section>
  );
};

export default Grid;
