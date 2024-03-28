
import { NavLink } from "react-router-dom";

interface BannerProps {
  page: string;
  link: string;
}

function Banner({ page, link }: BannerProps) {
  return (
    <section className="aboutTop bg-cover bg-center flex justify-center items-start flex-col relative">
      <h4 className="2xl:text-[70px] text-[45px] font-bold font-montserrat 2xl:leading-[88.2px] leading-[70px] capitalize text-white mt-5 2xl:mt-0">
        {page}
      </h4>
      <div>
        <p className="text-white font-syne">
          <NavLink className="font-syne" to={link}>
            Home
          </NavLink>
          &nbsp;
          {">"}&nbsp;<span className="font-syne text-[14px]"> {page} </span>
        </p>
      </div>
      <div className="border border-white rounded-full p-5 absolute  right-20 bottom-8">
        <img
          src="/icons/arrow-right.svg"
          alt="arrow"
          className="w-[70px] h-[70px]"
        />
      </div>
    </section>
  );
}

export default Banner;
