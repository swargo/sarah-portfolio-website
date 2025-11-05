export const Container = ({ children }: any) => {
  return <div className="px-[80px] py-5">{children}</div>;
};

export const FlexContainer = ({ children }: any) => {
  return <div className="px-[80px] py-5 flex gap-4">{children}</div>;
};
