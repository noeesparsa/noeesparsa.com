import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";

type FilledCardProps = {
  order: string;
  colSpan?: string;
  rowSpan?: string;
  footer?: ReactNode;
  additionalContentClasses?: string;
};

const FilledCard: FC<Readonly<PropsWithChildren<FilledCardProps>>> = ({
  children,
  order = "",
  colSpan = "",
  rowSpan = "",
  footer = "",
  additionalContentClasses = ""
}) => {
  const className = clsx(
    "h-full flex flex-col w-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out relative bg-white",
    order,
    colSpan,
    rowSpan
  );

  return (
    <section className={className}>
      <div className={clsx("flex-2/3", additionalContentClasses)}>{children}</div>
      {footer && <footer className="absolute bottom-2 left-2">{footer}</footer>}
    </section>
  );
};

export default FilledCard;
