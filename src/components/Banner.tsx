
import { NavLink } from "react-router-dom";

interface BannerProps {
  page: string;
  link: string;
}

function Banner({ page }: BannerProps) {
  return (
    <section className="aboutTop bg-cover bg-center flex justify-center items-start flex-col relative">
      <h4 className="2xl:text-6xl text-3xl font-bold font-montserrat 2xl:leading-[88.2px] leading-[70px] capitalize text-white mt-5 2xl:mt-0">
        {page}
      </h4>
      <div>
        <p className="text-white font-syne">
          <NavLink className="font-syne" to="/">
            Home
          </NavLink>
          &nbsp;
          {">"}&nbsp;<span className="font-syne text-[14px]"> {page} </span>
        </p>
      </div>
      
    </section>
  );
}

export default Banner;
