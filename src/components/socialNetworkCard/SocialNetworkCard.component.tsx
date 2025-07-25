import type { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useScreen } from "../../hooks/useWindowSize/useWindowSize";
import AnimatedCardLinkButton from "../CardLinkButton/CardLinkButton.component";

type SocialNetworkCardProps = {
  linkText: string;
  href: string;
  icon: IconProp;
  size: SizeProp;
};

const SocialNetworkCard: FC<Readonly<SocialNetworkCardProps>> = ({
  linkText,
  href,
  icon,
  size
}) => {
  const { isMobile } = useScreen();

  return isMobile ? (
    <a className="flex h-full w-full flex-col items-center justify-center" href={href}>
      <FontAwesomeIcon color="white" icon={icon} size={size} />
    </a>
  ) : (
    <div className="group flex h-full w-full flex-col items-center justify-center">
      <FontAwesomeIcon color="white" icon={icon} size={size} />
      <AnimatedCardLinkButton href={href} icon={faArrowRight} linkText={linkText} />
    </div>
  );
};

export default SocialNetworkCard;
