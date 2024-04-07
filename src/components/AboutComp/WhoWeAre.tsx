function WhoWeAre() {
  return (
    <section className="py-10 bg-white flex md:flex-row flex-col items-center justify-between ">
      <div className="md:w-[55%] w-full font-syne">
        <p className="text-orangePrimary font-medium ">
          About Pac Registrars
        </p>
        <h4 className=" font-bold font-syne capitalize">Who We Are!</h4>
        <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora ">
          PAC Registrars, a subsidiary of PanAfrican Capital Holdings Limited
          was established in April 2006 as Spring Registrars Limited. It was
          registered with the Securities and Exchange Commission (SEC) in June
          2006 as a Capital Market Operator to provide Share Registration
          Services and commenced business in February 2007.
        </p>
        <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px]  font-sora ">
          The Company’s processes are largely driven by technology which
          includes elodgment services, e-dividend services, e-notification
          services, client’s portal, stockbroker’s portal, computerized storage
          and recovery of unclaimed warrants and shares certificates
        </p>
        <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px]  font-sora">
          PAC Registrars as an innovative vehicle is strategically expanding its
          focus areas with penetration into Data Management services across
          identified sectors.
        </p>
      </div>
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
    </section>
  );
}

export default WhoWeAre;
