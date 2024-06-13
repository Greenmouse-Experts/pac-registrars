import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Hero2() {
  return (
    <section className="  bg-white text-black py-24 lg:pb-32">
      <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-between items-start">
        <div className="lg:max-w-[45%] w-full relative">
          <img src="/images/global-img.png" alt="" className="w-full" />
          <div className="absolute lg:-right-20 right-5 -bottom-20  font-sora bg-bluePrimary rounded-lg text-white px-6 py-8 xl:scale-100 lg:scale-75 scale-[0.7]">
            <div>
              <h6 className=" text-2xl font-bold pb-2 text-center">Our Services</h6>
              <div className="bg-white h-1 w-full rounded-lg"></div>
            </div>

            <div className=" flex flex-col gap-4 mt-5">
              <NavLink to="/probate-services" className="flex items-center gap-4 md:text-lg text-base font-normal font-sora ">
                <span>
                  <IoMdCheckmarkCircleOutline size={24} />
                </span>
                Probate
              </NavLink>
              <NavLink to="/data-register-maintenance" className="flex items-center gap-4 md:text-lg text-base font-normal font-sora ">
                <span>
                  <IoMdCheckmarkCircleOutline size={24} />
                </span>
                Register Business
              </NavLink>
              <NavLink to="/company-secretarial" className="flex items-center gap-4 md:text-lg text-base font-normal font-sora ">
                <span>
                  <IoMdCheckmarkCircleOutline size={24} />
                </span>
                Company Secretarial
              </NavLink>
              <NavLink to="/document-management" className="flex items-center gap-4 md:text-lg text-base font-normal font-sora ">
                <span>
                  <IoMdCheckmarkCircleOutline size={24} />
                </span>
                Document Management
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[45%] w-full font-syne">
          <p className="text-bluePrimary text-lg font-semibold ">
            Putting the right solutions and methods in place.
          </p>
          <h4 className=" font-bold font-syne capitalize ">
            A global consulting firm experienced in identifying, assessing, and
            solving all business challenges!
          </h4>
          <p className="lg:text-xl lg:leading-10 mt-5">
            PAC Registrars Limited, formerly known as Spring Registrars Limited
            is registered with the Securities & Exchange Commission (SEC) as a
            Capital Market Operator to provide Share Registration Services. It
            commenced business in February 2007
          </p>

          <NavLink
            to="/about"
            className=" flex items-center gap-2 text-lg font-semibold mt-8 lg:ml-10"
          >
            Learn More{" "}
            <span>
              <FaArrowCircleRight color="#202A44" />
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero2;

{
  /* <div className="pt-20 flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-4 gap-5">
<div className="px-5 py-2 rounded-md bg-white shadow-md  ">
  <div>
    <div className=" flex items-center justify-center justify-center">
      <p className="2xl:text-[45px] text-[30px] font-montserrat font-semibold">
        6,154
      </p>{" "}
      <img
        src="/icons/arrow-up-blue.svg"
        alt="arrow"
        className="2xl:w-[93px] 2xl:h-[93px] w-[65px]"
      />{" "}
    </div>
  </div>
  <p className="font-sora text-grayPrimary2">
    Released projects and strategies planned by company in 2024.
  </p>
</div>
<div className="w-[1px] bg-grayPrimary md:block hidden" />
<div className="px-5 py-2 rounded-md bg-white shadow-md  ">
  <div>
    <div className=" flex items-center justify-center justify-center">
      <p className="2xl:text-[45px] text-[30px] font-montserrat font-semibold">
        0,512
      </p>{" "}
      <img
        src="/icons/arrow-up-blue.svg"
        alt="arrow"
        className="2xl:w-[93px] 2xl:h-[93px] w-[65px]"
      />{" "}
    </div>
  </div>
  <p className="font-sora text-grayPrimary2">
    Qualified and dedicated team of financial experts to help you.
  </p>
</div>
<div className="w-[1px] bg-grayPrimary md:block hidden" />
<div className="px-5 py-2 rounded-md bg-white shadow-md  ">
  <div>
    <div className=" flex items-center justify-center justify-center">
      <p className="2xl:text-[45px] text-[30px] font-montserrat font-semibold">
        1,784
      </p>{" "}
      <img
        src="/icons/arrow-up-blue.svg"
        alt="arrow"
        className="2xl:w-[93px] 2xl:h-[93px] w-[65px]"
      />{" "}
    </div>
  </div>
  <p className="font-sora text-grayPrimary2">
    Satisfied and happy clients we have servedall over the world.
  </p>
</div>
<div className="w-[1px] bg-grayPrimary md:block hidden" />
<div className="px-5 py-2 rounded-md bg-white shadow-md  ">
  <div>
    <div className=" flex items-center justify-center justify-center">
      <p className="2xl:text-[45px] text-[30px] font-montserrat font-semibold">
        0,17
      </p>{" "}
      <img
        src="/icons/arrow-up-blue.svg"
        alt="arrow"
        className="2xl:w-[93px] 2xl:h-[93px] w-[65px]"
      />{" "}
    </div>
  </div>
  <p className="font-sora text-grayPrimary2">
    Years of proven expertise in wealth management planning.
  </p>
</div>
</div> */
}
