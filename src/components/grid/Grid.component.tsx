import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

export const Grid: FC<PropsWithChildren> = ({ children }) => {
  const gridClassesSM: string = "auto-rows-[160px] grid-cols-2 w-[336px]";
  const gridClassesMD: string =
    "md:auto-rows-auto-[180px] md:auto-rows-[180px] md:w-[572px] md:grid-cols-3";
  const gridClassesLG: string = "lg:w-[928px] lg:auto-rows-[220px] lg:grid-cols-4";
  const gridClassesXL: string = "xl:w-[1168px] xl:auto-rows-[280px]";

  return (
    <section
      className={clsx(
        "mx-auto grid grid-flow-row-dense gap-4 py-8",
        gridClassesSM,
        gridClassesMD,
        gridClassesLG,
        gridClassesXL
      )}
    >
      {children}
    </section>
  );
};

export default Grid;
