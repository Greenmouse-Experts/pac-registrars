
import Banner from "../../components/Banner";
import { IoMdArrowForward } from "react-icons/io";
import { LeadershipModal } from "../../components/modals/LeadershipModal";
import { useState } from "react";

function Leadership() {
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState("")
 
  const handleOpen = () => setOpen(!open); 
  return (
    <>
      <Banner page="Leadership" link="/" img="/images/leader-banner.png" />
      <section className="bg-[#F1F1F1] grid grid-cols-[repeat(auto-fill,_minmax(25rem,_1fr))] gap-11  md:py-32 py-10 ">
        <div className="relative about-shadow flex justify-center">
          <img
            src="/images/leader-2.png"
            alt=""
            className="h-[380px] w-[310px] 2xl:h-[510px] 2xl:w-[450px] mix-blend-luminosity"
          />
          <div className="bg-bluePrimary absolute bottom-0 px-12 py-7 text-white rounded-t-[10px] flex  items-end justify-between w-full">
            <div>
              <h6 className="text-lg font-semibold ">Chris Oshiafi</h6>
              <p className="font-normal text-base mt-2">Chairman</p>
            </div>
            <p
              onClick={handleOpen}
              className="flex cursor-pointer items-center gap-2 text-base font-semibold text-white"
            >
              Learn More{" "}
              <span>
                <IoMdArrowForward />
              </span>
            </p>
          </div>
        </div>
        <div className="relative about-shadow flex justify-center">
          <img
            src="/images/leader-1.png"
            alt=""
            className="h-[380px] w-[310px] 2xl:h-[510px] 2xl:w-[450px] mix-blend-luminosity"
          />
          <div className="bg-bluePrimary absolute bottom-0 px-12 py-7 text-white rounded-t-[10px] flex  items-end justify-between w-full">
            <div>
              <h6 className="text-lg font-semibold ">Tessa Egbe Ikimi</h6>
              <p className="font-normal text-base mt-2">Executive Director</p>
            </div>
            <p
              onClick={handleOpen}
              className="flex cursor-pointer items-center gap-2 text-base font-semibold text-white"
            >
              Learn More{" "}
              <span>
                <IoMdArrowForward />
              </span>
            </p>
          </div>
        </div>

        <div className="relative about-shadow flex justify-center">
          <img
            src="/images/leader-3.png"
            alt=""
            className="h-[380px] w-[310px] 2xl:h-[510px] 2xl:w-[450px] mix-blend-luminosity"
          />
          <div className="bg-bluePrimary absolute bottom-0 px-12 py-7 text-white rounded-t-[10px] flex  items-end justify-between w-full">
            <div>
              <h6 className="text-lg font-semibold ">Sina Alimi</h6>
              <p className="font-normal text-base mt-2">Executive Director</p>
            </div>
            <p
              onClick={handleOpen}
              className="flex cursor-pointer items-center gap-2 text-base font-semibold text-white"
            >
              Learn More{" "}
              <span>
                <IoMdArrowForward />
              </span>
            </p>
          </div>
        </div>

        <div className="relative about-shadow flex justify-center">
          <img
            src="/images/leader-4.png"
            alt=""
            className="h-[380px] w-[310px] 2xl:h-[510px] 2xl:w-[450px] mix-blend-luminosity"
          />
          <div className="bg-bluePrimary absolute bottom-0 px-12 py-7 text-white rounded-t-[10px] flex  items-end justify-between w-full">
            <div>
              <h6 className="text-lg font-semibold ">Eric Okoruwa</h6>
              <p className="font-normal text-base mt-2">Executive Director</p>
            </div>
            <p
              onClick={handleOpen}
              className="flex cursor-pointer items-center gap-2 text-base font-semibold text-white"
            >
              Learn More{" "}
              <span>
                <IoMdArrowForward />
              </span>
            </p>
          </div>
        </div>
        <div className="relative about-shadow flex justify-center">
          <img
            src="/images/leader-5.png"
            alt=""
            className="h-[380px] w-[310px] 2xl:h-[510px] 2xl:w-[450px] mix-blend-luminosity"
          />
          <div className="bg-bluePrimary absolute bottom-0 px-12 py-7 text-white rounded-t-[10px] flex  items-end justify-between w-full">
            <div>
              <h6 className="text-lg font-semibold ">Ifeanyi John</h6>
              <p className="font-normal text-base mt-2">
                Managing Director/CEO
              </p>
            </div>
            <p
              onClick={handleOpen}
              className="flex cursor-pointer items-center gap-2 text-base font-semibold text-white"
            >
              Learn More{" "}
              <span>
                <IoMdArrowForward />
              </span>
            </p>
          </div>
        </div>
      </section>
      <LeadershipModal handleOpen={handleOpen} open={open}/>
    </>
  );
}

export default Leadership;
