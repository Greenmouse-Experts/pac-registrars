import { NavLink } from "react-router-dom";

function CallService() {
  return (
    <section className="lg:py-16 lg:my-20 py-10 my-14 bg-[#F9F9F9]">
      <h4 className=" font-bold font-syne capitalize text-black text-center">
        Do you need our service, kindly call 08086790272 or{" "}
        <span className="">
          <NavLink to="tel:08086790272" className="cursor-pointer sm:text-[2.5rem] text-[1.8rem] font-bold">
            click HERE
          </NavLink>
        </span>
      </h4>
    </section>
  );
}

export default CallService;
