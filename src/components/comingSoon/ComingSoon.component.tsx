import type { FC } from "react";

type ComingSoonProps = {
  title?: string;
};

const ComingSoon: FC<Readonly<ComingSoonProps>> = ({ title }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">{title}</div>
  );
};

export default ComingSoon;
