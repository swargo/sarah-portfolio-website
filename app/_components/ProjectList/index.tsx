import { ProjectListProps, ProjectProps } from "@/app/_types/project.types";
import { ProjectCard } from "@/app/_components/ProjectCard";

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="flex gap-8 flex-wrap mt-15">
      {projects.map((project: ProjectProps) => (
        <div key={project.title}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};
