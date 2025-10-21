import type { FC, ReactElement } from "react";
import { SiGithub, SiLinkedin, SiRootme } from "react-icons/si";
import socialsLinks from "../../resources/links.json";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const socialKeyToIconRender: Record<string, ReactElement> = {
  rootme: <SiRootme size={24} />,
  linkedin: <SiLinkedin size={24} />,
  github: <SiGithub size={24} />,
};

export const SocialMedias: FC = () => {
  return (
    <div className="flex flex-row gap-4">
      {socialsLinks.map((socialLink) => (
        <Tooltip key={socialLink.key}>
          <TooltipTrigger asChild>
            <a className="rounded-lg p-2 border bg-background shadow-xs hover:bg-accent" href={socialLink.link}>
              {socialKeyToIconRender[socialLink.key]}
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{socialLink.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default SocialMedias;
