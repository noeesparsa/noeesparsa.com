import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";

type CardProps = {
  order: string;
  colSpan?: string;
  rowSpan?: string;
  header?: string;
  footer?: ReactNode;
};

const Card: FC<Readonly<PropsWithChildren<CardProps>>> = ({
  children,
  order = "",
  colSpan = "",
  rowSpan = "",
  header = "",
  footer = ""
}) => {
  const className = clsx(
    "h-full flex flex-col w-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out relative bg-ivory",
    order,
    colSpan,
    rowSpan
  );

  return (
    <section className={className}>
      {header && <h2 className="bg-amber-200 flex-1/6">{header}</h2>}
      <div className="flex-2/3">{children}</div>
      {footer && <footer className="absolute bottom-2 left-2">{footer}</footer>}
    </section>
  );
};

export default Card;
