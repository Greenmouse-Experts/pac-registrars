import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: string;
  type:string
  onMouseEnter?:()=> void;
}

function Button({ children ,type, color, onMouseEnter}: ButtonProps) {
  return (
    <button onMouseEnter={() => onMouseEnter?.()} className={`${color === 'orange' ? 'bg-orangePrimary ml-auto' : 'bg-bluePrimary'} flex gap-1 items-center 2xl:py-3 2xl:px-6 py-[5px] whitespace-nowrap px-4 text-sm ${type === 'fit' ? 'w-fit bg-white text-bluePrimary' :'text-white'}`}>{children}</button>
  );
}

export default Button;
