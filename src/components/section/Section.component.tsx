import type { FC, PropsWithChildren } from "react";

type SectionProps = {
  title: string;
};

export const Section: FC<Readonly<PropsWithChildren<SectionProps>>> = ({ title, children }) => {
  return (
    <section className="flex w-full flex-col gap-4">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
};

export default Section;
