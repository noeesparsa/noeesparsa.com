import type { FC } from "react";

type SkillProps = {
  name: string;
  logoSource: string;
};

const Skill: FC<Readonly<SkillProps>> = ({ name, logoSource }) => {
  return (
    <li className="flex items-center justify-center">
      <img
        width={56}
        height={56}
        className="object-contain max-w-none"
        src={logoSource}
        alt={name}
      />
    </li>
  );
};

export default Skill;
