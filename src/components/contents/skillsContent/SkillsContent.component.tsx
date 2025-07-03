import { FC } from "react";
import { Cloud } from "react-icon-cloud";

import skills from "../../../resources/skills.json";
import Skill from "../skill/Skill.component";

const SkillsContent: FC = () => {
  return (
    <div className="">
      <Cloud
        {...{
          options: {
            wheelZoom: false,
            initial: [0.1, -0.1],
            maxSpeed: 0.04,
            minSpeed: 0.02
          }
        }}
      >
        {skills.map((skill, index) => (
          <Skill name={skill.name} logoSource={skill.logo} key={`${skill.name}_${index}`} />
        ))}
      </Cloud>
    </div>
  );
};

export default SkillsContent;
