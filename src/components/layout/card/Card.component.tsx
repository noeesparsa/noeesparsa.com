import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";

import { CardHeaderTag } from "./cardHeaderTag/CardHeaderTag.component";

type CardProps = {
  order: string;
  colSpan?: string;
  rowSpan?: string;
  header?: string;
  footer?: ReactNode;
  additionalContentClasses?: string;
};

const Card: FC<Readonly<PropsWithChildren<CardProps>>> = ({
  children,
  order = "",
  colSpan = "",
  rowSpan = "",
  header = "",
  footer = "",
  additionalContentClasses = ""
}) => {
  const className = clsx(
    "h-full flex flex-col gap-6 w-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out relative bg-white p-6 justify-between",
    order,
    colSpan,
    rowSpan
  );

  return (
    <section className={className}>
      {header && <CardHeaderTag>{header}</CardHeaderTag>}
      <div className={clsx(additionalContentClasses)}>{children}</div>
      {footer && <footer className="absolute bottom-2 left-2">{footer}</footer>}
    </section>
  );
};

export default Card;
