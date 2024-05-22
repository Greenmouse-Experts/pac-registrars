import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  type:string
  onMouseEnter?:()=> void;
}

function Button({ children ,type, onMouseEnter}: ButtonProps) {
  return (
    <button onMouseEnter={() => onMouseEnter?.()} className={` flex gap-1 items-center 2xl:py-3 2xl:px-6 py-[5px] whitespace-nowrap hover:-translate-y-1 hover:shadow-md font-montserrat transition-all font-semibold px-4 text-sm ${type === 'fit' ? 'w-fit bg-white text-bluePrimary' :' w-fit text-white bg-bluePrimary'}`}>{children}</button>
  );
}

export default Button;
