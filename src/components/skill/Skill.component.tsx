import type { FC } from "react";

type SkillProps = {
  name: string;
  logoSource: string;
};

const Skill: FC<Readonly<SkillProps>> = ({ name, logoSource }) => {
  return (
    <li className="w-22 h-22 bg-white rounded-xl flex items-center justify-center">
      <img
        width={48}
        height={48}
        className="object-contain max-w-none"
        src={logoSource}
        alt={name}
      />
    </li>
  );
};

export default Skill;
