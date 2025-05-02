import type { FC } from "react";

import skills from "../../resources/skills.json";
import Skill from "../skill/Skill.component";

const SkillsContent: FC = () => {
  return (
    <div className=" w-full inline-flex items-center flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] group">
      {[...Array(2)].map((index) => (
        <ul
          key={`logoList_${index}`}
          className={
            "flex items-center justify-start gap-8 animate-infinite-scroll group-hover:[animation-play-state:paused] pr-8"
          }
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
