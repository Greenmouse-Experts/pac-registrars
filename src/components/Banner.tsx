
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface BannerProps {
  page: string;
  link: string;
  img?: string;
}

function Banner({ page, img }: BannerProps) {
  return (
    <section className={` lg:h-[22rem] h-[14rem]  bg-cover bg-center flex justify-center items-start flex-col relative px-0`}>
      <img src={img ? img : "/images/about-banner.png"} alt="" className="w-full h-full object-cover object-center" />

     <div className="absolute px-[7%]">
     <h4 className="lg:text-6xl font-bold font-montserrat text-4xl capitalize text-white mt-5 2xl:mt-0">
        {page}
      </h4>
      <div className="mt-4 flex items-center">
        <span className="text-white font-syne ">
          <NavLink className="font-syne" to="/">
            Home
          </NavLink>
        </span>
        <span>
          <MdOutlineKeyboardArrowRight color="white" /></span><span className="font-syne sm:text-lg text-white"> {page} </span>
      </div>
     </div>
      
    </section>
  );
}

export default Banner;
