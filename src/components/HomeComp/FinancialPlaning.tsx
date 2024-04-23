function FinancialPlaning() {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-200 to-transparent pt-14">
        <div className="flex md:flex-row flex-col items-center justify-between ">
          <div className="2xl:max-w-[40%] md:max-w-[400px] w-full font-syne ">
            <p className="text-orangePrimary font-medium 2xl:text-[14px] text-[12px]">
              Committed to clients, focused on results.
            </p>
            <h4 className=" font-bold font-syne capitalize">
              The right partner for Data Management and Investor relations.
            </h4>
          </div>
          <img
            src="/images/experience.png"
            alt="expereince"
            className="h-[120px] w-[210px]"
          />
        </div>
      </section>
      <section className="bg-bluePrimary flex md:flex-row flex-col items-center justify-between text-white mx-0 md:px-24 px-5 mt-14 2xl:mx-10 2xl:py-20 py-10">
        <div className="2xl:w-[48%] md:w-[40%] w-full">
          <div className="border-b border-b-grayPrimary pb-8">
            <h6 className="font-syne 2xl:text-[32px] text-2xl font-bold ">
              Financial Planning
            </h6>
            <p className="2xl:text-[18px] text-sm font-normal mt-5 font-sora 2xl:leading-[30px] leading-6 2xl:font-[300]">
              Financial planning is the process of taking a comprehensive look
              at your financial situation and building a specific financial plan
              to reach your goals. As a result, financial planning often delves
              into multiple areas of finance, including taxes, savings,
              insurance and more.
            </p>
          </div>
          <div className="flex pt-8 2xl:gap-8 gap-3 items-start">
            <img
              src="/icons/arrow-right.svg"
              alt="arrow-right"
              className="2xl:w-[93px] w-[70px] mt-[-10px]"
            />
            <div className="flex flex-col gap-8 items-start">
              <h6 className="font-syne text-lg font-bold ">
                Model Portfolio Returns
              </h6>
              <p className="2xl:leading-[33px] leading-[24px]">
                Model portfolios offer multiple approaches to help clients
                pursue their investment objectives while freeing you to spend
                more time cultivating those relationships.
              </p>
              <div className="flex items-center gap-3">
                {" "}
                <button>Learn More</button>
                <img src="/icons/arrow-right-circle.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center md:w-[40%] 2xl:w-[45%] w-full">
          <img
            src="/images/financial-planning.png"
            alt="planning"
            className="2xl:w-[709px] w-full 2xl:h-[400px] h-[320px] object-cover object-center"
          />
          <div className="absolute md:w-[200px] bg-white md:left-10 left-1  flex flex-col items-center rounded-lg py-8 px-4 mx-4 md:mx-0">
            <div className="border-orangePrimary border-[0.8px] rounded-full w-14 h-14 flex justify-center items-center">
              <p className="font-syne text-sm font-bold text-black">23%</p>
            </div>
            <p className="font-sora text-grayPrimary2 text-center mt-3 2xl:text-[13px]">
              Maximum drawdown is a measure of downside risk over a given time
              period; it is the maximum loss.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FinancialPlaning;
