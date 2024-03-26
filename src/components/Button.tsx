import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="bg-bluePrimary text-white py-3 px-6 w-fit">{children}</button>
  );
}

export default Button;
