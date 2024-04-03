import { NavLink } from "react-router-dom";

function Services() {
  return (
    <section className=" bg-white text-black  pb-10 pt-16">
      <div className="flex md:flex-row md:gap-0 gap-5 flex-col items-center justify-between">
        <div className=" md:w-[33%] w-full font-syne">
          <p className="text-orangePrimary font-semibold ">
            Get to know our services and expertise
          </p>
          <h4 className="font-bold font-syne capitalize">
            The best solution for future business!
          </h4>
        </div>
        <div className=" md:w-[54%] w-full">
          <p className="font-sora font-medium leading-7 2xl:text-[18px] 2xl:leading-[35px] text-[14px]">
            To help our clients go from dreaming to doing, we have our core
            beliefs that are central to their investing success. We’re here to
            help with any questions you have on your path to find financial
            security.
          </p>
          <p className="text-[#606060] mt-5 2xl:leading-[33px] leading-6">
            Our core beliefs serve as the cornerstone of their investing
            success, guiding them along their journey towards financial
            security.
          </p>
        </div>
      </div>

      {/* services cards */}
      <div className="mt-16 md:flex md:flex-row flex-col gap-5 ">
        <div className="max-w-[400px] shadow-md px-10 py-10">
          <img src="/icons/file.svg" alt="file" className="2xl:w-[60px]" />
          <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
            Register Maintenance and Data Management
          </h5>
          <p className="font-sora text-grayPrimary2 mt-8">
            By meticulously managing registers and maintaining accurate data
            records, organizations can streamline operations, enhance
            decision-making processes, and ensure regulatory compliance.
          </p>
          <button className="text-orangePrimary font-sora text-[12px] mt-10">
            Read more
          </button>
        </div>
        <div className="max-w-[400px] shadow-md px-10 py-10">
          <img src="/icons/court.svg" alt="file" className="2xl:w-[60px] w-[70px]" />
          <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
            Corporate and Private Probate Services
          </h5>
          <p className="font-sora text-grayPrimary2 mt-8">
            Our dedicated team specializes in probate administration, estate
            planning, and asset distribution, ensuring a smooth and efficient
            process tailored to your specific needs.
          </p>
          <button className="text-orangePrimary font-sora text-[12px] mt-10">
            Read more
          </button>
        </div>
        <div className="max-w-[400px] shadow-md px-10 py-10">
          <img src="/icons/bank.svg" alt="file" className="2xl:w-[60px] w-[70px]" />
          <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
            Corporate / Government Bond Issues
          </h5>
          <p className="font-sora text-grayPrimary2 mt-8">
            With a deep understanding of market dynamics and regulatory
            requirements, we ensure seamless and successful bond offerings that
            meet our clients' financing needs.
          </p>
          <button className="text-orangePrimary font-sora text-[12px] mt-10">
            Read more
          </button>
        </div>
        <div className="max-w-[400px] shadow-md px-10 py-10">
          <img src="/icons/folder.svg" alt="file" className="2xl:w-[60px] w-[70px]" />
          <h5 className="2xl:text-[20px] text-[16px] font-semibold font-syne mt-10">
            Registrar to Offer Services
          </h5>
          <p className="font-sora text-grayPrimary2 mt-8">
            Our core beliefs drive our commitment to helping our clients achieve
            investing success. Our dedicated team is here to guide you every
            step of the way on your journey towards financial security.
          </p>
          <button className="text-orangePrimary font-sora text-[12px] mt-10">
            Read more
          </button>
        </div>
      </div>

      <div className="max-w-[550px] mt-10 ">
        <p className="font-sora text-grayPrimary2">
          We focus on helping clients shape the future of their business, and
          execute strategies on the changing face of the customer.{" "}
          <span className="underline text-black">
            <NavLink to="/">Contact Us!</NavLink>
          </span>
        </p>
      </div>
    </section>
  );
}

export default Services;
