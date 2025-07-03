import type { FC } from "react";

type SkillProps = {
  name: string;
  logoSource: string;
};

const Skill: FC<Readonly<SkillProps>> = ({ name, logoSource }) => {
  return (
    <a>
      <img width={96} height={96} src={logoSource} alt={name} />
    </a>
  );
};

export default Skill;
