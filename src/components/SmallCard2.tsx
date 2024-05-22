import { ReactNode } from "react";

interface SmallProps{
    children:ReactNode;
}

function SmallCard2({children}:SmallProps) {
  return (
    <div className="p-6 px-8 card-shadow shadow-lg rounded-[10px] flex flex-col justify-center items-center relative">
    {children}
    <img src="/icons/insert.svg" alt="" className="absolute bottom-0 right-0" />
</div>
  )
}

export default SmallCard2;