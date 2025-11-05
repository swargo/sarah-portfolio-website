export const Header = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <>
      <h1 className="text-[64px] text-primary leading-none mb-4">{title}</h1>
      <h2 className="text-darkAccent leading-none">{subtitle}</h2>
    </>
  );
};
