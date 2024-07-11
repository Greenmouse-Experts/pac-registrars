import Banner from "../../components/Banner";

function Careers() {
  return (
    <>
      <Banner page="Careers" link="" />

      <section className="md:py-28 py-10 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-orangePrimary  font-medium ">Careers</p>
          <h4 className=" font-bold font-syne capitalize">Our Careers</h4>
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="md:w-[40%] w-full relative">
              <img
                src="/images/whoweare.png"
                alt=""
                className="w-full h-[350px] object-cover"
              />
              <img
                src="/icons/arrow-down-large.svg"
                alt=""
                className="absolute right-[-25px] bottom-[-25px] w-44"
              />
            </div>
            <div className="md:w-[55%] w-full font-syne">
              <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora ">
                At PAC Registrars and Investor Services, we have imbibed
                proactive workstyles that foster a collaborative and productive
                work environment. Our work environment supports professionalism
                and integrity, encouraging high performance across our teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 md:mx-10 mx-0 md:py-32 py-10 bg-bluePrimary text-white">
        <h4 className=" font-bold font-syne capitalize">Our Hiring Process</h4>
        <div className="h-[5px] bg-white my-5 w-full" />
        <div className="flex md:flex-row flex-col md:items-start items-center justify-between">
          <div className="md:w-[48%] w-full relative">
            <p className="text-white 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora ">
              At PAC Registrars and Investor Services, we have imbibed proactive
              workstyles that foster a collaborative and productive work
              environment. Our work environment supports professionalism and
              integrity, encouraging high performance across our teams.
            </p>
          </div>
          <div className="md:w-[48%] w-full font-syne">
            <p className="text-white 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora ">
              At PAC Registrars and Investor Services, we have imbibed proactive
              workstyles that foster a collaborative and productive work
              environment. Our work environment supports professionalism and
              integrity, encouraging high performance across our teams.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
