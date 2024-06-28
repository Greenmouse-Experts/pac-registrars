function WhoWeAre() {
  return (
    <section className="md:py-24 py-10 bg-white flex md:flex-row flex-col items-center justify-between ">
      <div className="md:w-[55%] w-full font-syne">
        <p className="text-bluePrimary font-medium ">About Pac Registrars</p>
        <h4 className=" font-bold font-syne capitalize">Who We Are!</h4>
        <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] font-sora ">
          We are a share registration and business solutions provider, licensed
          by the Securities and Exchange Commission. Our focus is on providing
          professional and personalized service to clients, shareholders,
          stockbrokers and advisors. With our domain expertise and in depth
          understanding of our industry, we are able to attend to our customers
          needs in a competent manner through our resourceful and streamlined
          work processes.
        </p>
        <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px]  font-sora ">
          The Company’s processes are largely driven by technology which includes
          AGM/EGM service, elodgment, e-dividend, e-notification, client’s
          portal, stockbroker’s portal, data management and recovery of
          unclaimed dividends.
        </p>
        <p className="text-[#606060] 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px]  font-sora">
          As an innovative vehicle, we are strategically expanding our focus
          areas with providing business solutions across identified sectors.
        </p>
      </div>
      <div className="md:w-[40%] w-full relative">
        <img
          src="/images/whoweare.png"
          alt=""
          className="w-full h-[350px] object-cover rounded-lg"
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
