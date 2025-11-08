export const PillBG = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline items-center border-2 rounded-full py-0 [&>svg]:hidden px-6 [&>svg]:w-20 [&>svg]:h-20 text-ui-lightest w-fit whitespace-nowrap h-auto bg-foreground border-foreground text-white">
      {children}
    </span>
  );
};
