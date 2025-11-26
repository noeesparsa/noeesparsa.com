import type { FC } from "react";
import { Link } from "react-router";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "../ui/item";
import ProjectStackAvatar from "./ProjectStackAvatar.components";

type ProjectCardProps = {
  path: string;
  headerSrc: string;
  alterSource: string;
  title: string;
  shortDescription: string;
  stack: string[];
};

const ProjectCard: FC<Readonly<ProjectCardProps>> = ({
  path,
  headerSrc,
  alterSource,
  title,
  shortDescription,
  stack,
}) => {
  return (
    <Item
      asChild
      className="!transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl bg-white group"
      variant="outline"
    >
      <Link to={path}>
        <ItemHeader className="overflow-hidden rounded-lg">
          <img
            alt={alterSource}
            className="aspect-video w-full rounded-lg object-cover group-hover:scale-105 transition-all"
            height={40}
            src={headerSrc}
            width={40}
          />
        </ItemHeader>
        <ItemContent>
          <ItemTitle className="min-h-12 flex-col text-base font-bold">{title}</ItemTitle>
          <ItemDescription className="min-h-14 flex-col line-clamp-3">{shortDescription}</ItemDescription>
        </ItemContent>
        <ItemFooter className="flex flex-col items-start">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
            {stack.map((item) => (
              <ProjectStackAvatar key={item} name={item} />
            ))}
          </div>
          <p className="group-hover:underline transition-all self-end">See more</p>
        </ItemFooter>
      </Link>
    </Item>
  );
};

export default ProjectCard;
