import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

function Hero2() {
  return (
    <section className="  bg-white text-black py-16">
      <div className="flex md:flex-row flex-col md:gap-20 gap-5 justify-between items-start">
        <div className="md:max-w-[45%] w-full font-syne">
          <p className="text-orangePrimary font-[300] ">
            Putting the right solutions and methods in place.
          </p>
          <h4 className=" font-bold font-syne capitalize ">
            A global consulting firm experienced in identifying, assessing, and
            solving all business challenges!
          </h4>
        </div>
        <div className="md:max-w-[55%] w-full">
          <p className="font-sora 2xl:leading-[35px]  leading-[30px] 2xl:text-[18px] text-[14px]">
            PAC Registrars Limited, formerly known as Spring Registrars Limited
            is registered with the Securities & Exchange Commission (SEC) as a
            Capital Market Operator to provide Share Registration Services. It
            commenced business in February 2007
          </p>
          <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[30px] leading-[25px] ">
            We understand the importance of maintaining a long lasting business
            relationships with clients so we deliver investment solutions for a
            long term success and empowerment
          </p>
        </div>
      </div>
      <div className="pt-20 flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-4 gap-5">
        <div className="px-5 h-32 flex justify-center items-center rounded-md bg-white shadow-md md:w-[25%] w-[90%]  ">
          <div className="flex items-center justify-center">
            <AiOutlineFundProjectionScreen size={60} />
            <h5 className="capitalize font-bold 2xl:text-2xl md:text-lg ml-4 mr-2 text-bluePrimary">
              projects and strategies
            </h5>
          </div>
        </div>
        <div className="w-[1px] bg-grayPrimary md:block hidden" />
        <div className="px-5 h-32 flex justify-center items-center rounded-md bg-white shadow-md md:w-[25%] w-[90%]  ">
          <div className="flex items-center justify-center">
            <RiRefund2Line size={50} />
            <h5 className="capitalize font-bold 2xl:text-2xl md:text-lg ml-4 mr-2 text-bluePrimary">
              Financial Experts
            </h5>
          </div>
        </div>
        <div className="w-[1px] bg-grayPrimary md:block hidden" />
        <div className="px-5 h-32 flex justify-center items-center rounded-md bg-white shadow-md md:w-[25%] w-[90%]  ">
          <div className="flex items-center justify-center">
            <FaUsers size={50} />
            <h5 className="capitalize font-bold 2xl:text-2xl md:text-lg ml-4 mr-2 text-bluePrimary">
              happy clients
            </h5>
          </div>
        </div>
        <div className="w-[1px] bg-grayPrimary md:block hidden" />
        <div className="px-5 h-32 flex justify-center items-center rounded-md bg-white shadow-md md:w-[25%] w-[90%]  ">
          <div className="flex items-center justify-center">
            <TbWorld size={50} />
            <h5 className="capitalize font-bold 2xl:text-2xl md:text-lg ml-4 mr-2 text-bluePrimary">
              wealth management
            </h5>
          </div>
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
