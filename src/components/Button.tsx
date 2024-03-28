import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-bluePrimary text-white 2xl:py-3 2xl:px-6 py-[5px] px-4 w-fit text-sm">{children}</button>
  );
}

export default Button;
