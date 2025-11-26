import { BadgeCheckIcon, LoaderCircleIcon } from "lucide-react";
import type { FC, ReactElement } from "react";
import { Badge } from "../ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

type TrainingBadgeProps = {
  title: string;
  status: string;
  hoverContent: string;
};

const statusToProps: Record<TrainingBadgeProps["status"], ReactElement> = {
  COMPLETED: <BadgeCheckIcon />,
  IN_PROGRESS: <LoaderCircleIcon className="animate-spin" />,
};

const TrainingBadge: FC<Readonly<TrainingBadgeProps>> = ({ title, status, hoverContent }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge className="text-sm hover:cursor-pointer" variant={status === "COMPLETED" ? "default" : "outline"}>
          {statusToProps[status]} {title}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent>{hoverContent}</HoverCardContent>
    </HoverCard>
  );
};

export default TrainingBadge;
