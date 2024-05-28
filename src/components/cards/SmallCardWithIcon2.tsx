import { ReactNode } from "react";

interface SmallProps{
    children:ReactNode;
    img:string;
}

function SmallCardWithIcon2({children, img}:SmallProps) {
  return (
    <div className="p-6 px-8 pb-12 card-shadow shadow-lg rounded-[10px] rounded-br-none flex flex-col justify-center items-center relative overflow-hidden bg-white">
     
    {children}
   <div className="absolute -bottom-3 -right-4 bg-bluePrimary p-4 rounded-full">
   <img src={img} alt=""  className=" scale-90" />
   </div>
</div>
  )
}

export default SmallCardWithIcon2;