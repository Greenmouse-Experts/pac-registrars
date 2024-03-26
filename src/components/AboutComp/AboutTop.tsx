import { NavLink } from "react-router-dom";

function AboutTop() {
  return (
    <section className="aboutTop px-20 2xl:px-24 flex justify-center items-start flex-col relative">
      <h4 className="2xl:text-[70px] text-6xl font-bold font-montserrat 2xl:leading-[88.2px] leading-[70px] capitalize text-white mt-5 2xl:mt-0">
        About Us
      </h4>
      <div>
        <p className="text-white">
          <NavLink to="/">Home</NavLink>
          {" >"} About Us
        </p>
      </div>
      <div className="border border-white rounded-full p-5 absolute  right-20 bottom-20">
        <img src="/icons/arrow-right.svg" alt="arrow" className="" />
      </div>
    </section>
  );
}

export default AboutTop;
