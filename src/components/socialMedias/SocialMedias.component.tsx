import type { FC, ReactElement } from "react";
import { SiGithub, SiLinkedin, SiRootme } from "react-icons/si";
import socialsLinks from "../../resources/links.json";
import { Button } from "../ui/button";

const socialKeyToIconRender: Record<string, ReactElement> = {
  rootme: <SiRootme size={20} />,
  linkedin: <SiLinkedin size={20} />,
  github: <SiGithub size={20} />,
};

export const SocialMedias: FC = () => {
  return (
    <div className="flex flex-row gap-4">
      {socialsLinks.map((socialLink) => (
        <Button asChild key={socialLink.name} variant="outline">
          <a href={socialLink.link}>
            {socialKeyToIconRender[socialLink.key]}
            {socialLink.name}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialMedias;
