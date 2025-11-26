import type { FC } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

type ProjectStackAvatarProps = {
  name: string;
};

export const ProjectStackAvatar: FC<Readonly<ProjectStackAvatarProps>> = ({ name }) => {
  return (
    <Avatar className="bg-white">
      <AvatarImage alt={name} className="scale-80" src={`${name}.png`} />
    </Avatar>
  );
};

export default ProjectStackAvatar;
