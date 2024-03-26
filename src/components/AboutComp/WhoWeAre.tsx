function WhoWeAre() {
  return (
    <section className="px-20 2xl:px-24 py-20 bg-white flex items-center gap-24 ">
      <div className="w-[50%] font-syne">
        <p className="text-orangePrimary font-semibold ">
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
      <div className="w-[40%] h-[400px]">
        <img src="/images/whoweare.png" alt="" className="w-full h-[400px]" />
      </div>
    </section>
  );
}

export default WhoWeAre;
