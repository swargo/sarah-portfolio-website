export const Container = ({ children }: any) => {
  return <div className="px-3 md:px-[80px] pb-5 md:pt-27">{children}</div>;
};

export const FlexContainer = ({ children }: any) => {
  return (
    <div className="px-3 md:px-[80px] pb-5 flex gap-4 md:pt-27 flex-wrap md:flex-nowrap">
      {children}
    </div>
  );
};
