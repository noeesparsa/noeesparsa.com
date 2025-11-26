import type { FC } from "react";
import projects from "../../resources/projects.json";
import ProjectCard from "./ProjectCard.components";

export const Projects: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Projects;
