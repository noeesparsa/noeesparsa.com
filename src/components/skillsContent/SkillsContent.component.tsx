import type { FC } from "react";

import skills from "../../resources/skills.json";
import Skill from "../skill/Skill.component";

const SkillsContent: FC = () => {
  return (
    <div className=" w-full inline-flex items-center flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_32px,_black_calc(100%-32px),transparent_100%)]">
      {[...Array(2)].map((index) => (
        <ul
          key={`logoList_${index}`}
          className={"flex items-center justify-start gap-16 animate-infinite-scroll pr-16"}
        >
          {skills.map((item) => (
            <Skill logoSource={item.logo} name={item.name} key={`skill-${item.name}`} />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default SkillsContent;
