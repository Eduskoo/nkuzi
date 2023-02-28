import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gray-300 py-3 text-center">
      <div className="my-0 mx-auto w-11/12 max-w-[1107px]">{children}</div>
    </div>
  );
};

export { SectionTitle };
