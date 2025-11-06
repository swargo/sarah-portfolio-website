import { Header } from "@/app/_components/Header";
import { Container } from "@/app/_components/Container";
import { promises as fs } from "fs";
import { ImageProps, ProjectProps } from "@/app/_types/project.types";

export default async function Project({ params }: any) {
  const { slug } = await params;
  const file = await fs.readFile(process.cwd() + "/app/projects.json", "utf8");
  const data = JSON.parse(file);
  const project = data.find((project: ProjectProps) => project.slug === slug);
  const { title, subtitle, yearMade, images, description } = project;

  const coverImage = images[0];
  const additionalImages = images.slice(1);

  const projTitle = project ? title : "Nothing to see here.";
  const projSubtitle = project ? subtitle : "This project url doesn't exist.";

  return (
    <Container>
      <div className="md:w-1/2 mb-10 md:mb-20">
        <Header
          title={projTitle}
          subtitle={projSubtitle}
          additionalInfo={yearMade}
        />
      </div>
      <div key={projSubtitle}>
        <img
          src={coverImage.src}
          alt={coverImage.alt}
          className="md:shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] mx-[auto] max-h-[700px]"
        />
        <p className="my-10 md:my-20 mx-6 md:mx-[20%] leading-6">
          {description}
        </p>
        {additionalImages.map((image: ImageProps) => (
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className="md:shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)] mx-auto max-h-[700px]"
          />
        ))}
      </div>
    </Container>
  );
}
