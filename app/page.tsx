import { Container } from "./_components/Container";
import { Header } from "@/app/_components/Header";
import { ProjectList } from "@/app/_components/ProjectList";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/projects.json", "utf8");
  const projects = JSON.parse(file);
  return (
    <Container>
      <Header title="Portfolio" subtitle="Subtitle here" />
      <ProjectList projects={projects} />
    </Container>
  );
}
