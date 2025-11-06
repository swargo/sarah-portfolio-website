export const Container = ({ children }: any) => {
  return <div className="px-3 md:px-[80px] py-5 pt-27">{children}</div>;
};

export const FlexContainer = ({ children }: any) => {
  return (
    <div className="px-3 md:px-[80px] py-5 flex gap-4 pt-27">{children}</div>
  );
};
