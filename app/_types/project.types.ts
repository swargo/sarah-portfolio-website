export interface ProjectProps {
  title: string;
  subtitle: string;
  yearMade: number;
  description: string;
  slug: string;
  images: ImageProps[];
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface ProjectListProps {
  projects: ProjectProps[];
}
