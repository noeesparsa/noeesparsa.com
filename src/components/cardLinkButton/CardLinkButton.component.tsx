import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";

type AnimatedCardLinkButtonProps = {
  linkText: string;
  href: string;
  icon: IconProp;
};

const AnimatedCardLinkButton: FC<Readonly<AnimatedCardLinkButtonProps>> = ({
  linkText,
  href,
  icon
}) => {
  return (
    <a
      className="absolute bottom-4 left-4 flex h-10 w-10 items-center overflow-hidden rounded-full bg-white transition-all duration-500 ease-in-out hover:ring-4 hover:ring-[#ffffff80] group-hover:w-[110px]"
      href={href}
    >
      <span className="invisible ml-4 whitespace-nowrap text-md group-hover:visible group-hover:animate-fade-in">
        {linkText}
      </span>
      <FontAwesomeIcon className="-rotate-45 absolute right-0 h-10 w-10" icon={icon} />
    </a>
  );
};

export default AnimatedCardLinkButton;
