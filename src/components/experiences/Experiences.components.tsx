import type { FC } from "react";
import ExperienceCard from "./ExperienceCard.components";

export const Experiences: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <ExperienceCard />
    </div>
  );
};

export default Experiences;
