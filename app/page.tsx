import { Container } from "./_components/Container";
import { Header } from "@/app/_components/Header";
import { promises as fs } from "fs";
import { ProjectProps } from "@/app/_types/project.types";
import { ProjectCard } from "./_components/ProjectCard";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/projects.json", "utf8");
  const projects = JSON.parse(file);
  return (
    <Container>
      <Header title="Portfolio" subtitle="Subtitle here" />
      <div className="grid gap-8 grid-cols-2">
        {projects.map((project: ProjectProps) => (
          <div key={project.title}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </Container>
  );
}
