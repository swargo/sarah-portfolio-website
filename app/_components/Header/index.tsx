export const Header = ({
  title,
  subtitle,
  additionalInfo,
}: {
  title: string;
  subtitle?: string;
  additionalInfo?: string;
}) => {
  return (
    <>
      <h1 className="text-[64px] text-primary leading-none mb-4">{title}</h1>
      <h2 className="text-darkAccent leading-none">{subtitle}</h2>
      <p className="text-darkAccent leading-none mt-2 italic">
        {additionalInfo}
      </p>
    </>
  );
};
