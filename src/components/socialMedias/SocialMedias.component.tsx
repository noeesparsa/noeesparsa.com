import type { FC, ReactElement } from "react";
import { SiGithub, SiLinkedin, SiRootme } from "react-icons/si";
import socialsLinks from "../../resources/links.json";

const socialKeyToIconRender: Record<string, ReactElement> = {
  rootme: <SiRootme size={20} />,
  linkedin: <SiLinkedin size={20} />,
  github: <SiGithub size={20} />,
};

export const SocialMedias: FC = () => {
  return (
    <div className="flex flex-row gap-4">
      {socialsLinks.map((socialLink) => (
        <a
          className="rounded-lg px-2 py-1 border bg-background shadow-xs hover:bg-accent active:scale-80 transition-all flex flex-row gap-1 items-center"
          href={socialLink.link}
          key={socialLink.name}
        >
          {socialKeyToIconRender[socialLink.key]}
          {socialLink.name}
        </a>
      ))}
    </div>
  );
};

export default SocialMedias;
