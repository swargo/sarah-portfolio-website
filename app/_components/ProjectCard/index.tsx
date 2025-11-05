import { ProjectProps } from "@/app/_types/project.types";
import Link from "next/link";

export const ProjectCard = (props: ProjectProps) => {
  const { title, subtitle, yearMade, images, slug } = props;
  const image = images[0];

  return (
    <div className="flex flex-col relative min-w-[150px] basis-[20%]">
      <Link
        href={`/${slug}`}
        className="text-bk hover:text-tertiary no-underline"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[340px] shadow-[2px_2px_2px_2px_rgba(0,0,0,0.15)]"
        />
        <div className="mt-6">
          <h4 className="text-[20px] mb-1">{title}</h4>
          <p className="text-darkAccent">{subtitle}</p>
          <p className="italic text-darkAccent">{yearMade}</p>
        </div>
      </Link>
    </div>
  );
};
