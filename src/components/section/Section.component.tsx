import type { FC, PropsWithChildren } from "react";
import Title from "../typography/title/Title.component";

type SectionProps = {
  title: string;
};

export const Section: FC<Readonly<PropsWithChildren<SectionProps>>> = ({ title, children }) => {
  return (
    <section className="flex w-full flex-col gap-4 py-2">
      <Title level={3}>{title}</Title>
      <div>{children}</div>
    </section>
  );
};

export default Section;
