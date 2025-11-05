import { ProjectProps } from "@/app/_types/project.types";
import Link from "next/link";

export const ProjectCard = (props: ProjectProps) => {
  const { title, subtitle, yearMade, images, slug } = props;
  const image = images[0];

  return (
    <div className="flex flex-col relative min-w-[150px] basis-[20%]">
      <Link
        href={`/${slug}`}
        className="text-darkAccent hover:text-tertiary no-underline"
      >
        <img src={image.src} alt={image.alt} />
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <p>{yearMade}</p>
      </Link>
    </div>
  );
};
