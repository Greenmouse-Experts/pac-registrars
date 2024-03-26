function Hero() {
  return (
    <section className="bg-heroImg h-screen 2xl:py-32 py-16 2xl:px-28 px-20 text-white relative">
      <div className="max-w-[700px]">
        <p className="2xl:text-lg text-sm font-semibold text-white font-syne">
          Take control of your financial future and start growing your wealth
        </p>
        <h4 className="2xl:text-[70px] text-6xl font-bold font-montserrat 2xl:leading-[88.2px] leading-[70px] capitalize text-white mt-5 2xl:mt-0">
          Grow your wealth with our leading edge solutions!
        </h4>
      </div>

      <div className="2xl:mt-20 mt-5">
        <p className="font-syne font-semibold">Grow Your Wealth</p>
        <div className="mt-10 ">
          <p className="font-sora 2xl:text-[22px] text-lg font-normal">
            We help our clients achieve their goals by <br /> providing expert
            consulting services
          </p>
        </div>
      </div>
      <div className="border border-white rounded-full p-5 absolute  right-20 bottom-20">
        <img src="/icons/arrow-right.svg" alt="arrow" className="" />
      </div>
    </section>
  );
}

export default Hero;
