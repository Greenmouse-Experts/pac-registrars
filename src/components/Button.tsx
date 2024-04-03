import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type:string
  onMouseEnter?:()=> void;
}

function Button({ children ,type, onMouseEnter}: ButtonProps) {
  return (
    <button onMouseEnter={() => onMouseEnter?.()} className={`bg-bluePrimary flex items-center gap-1 text-white 2xl:py-3 2xl:px-6 py-[5px] whitespace-nowrap px-4 text-sm ${type === 'fit' ? 'w-fit' :''}`}>{children}</button>
  );
}

export default Button;
