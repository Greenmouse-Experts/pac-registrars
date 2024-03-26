function FinancialPlaning() {
  return (
    <section className="bg-gradient-to-b from-gray-200 to-transparent  pt-20">
      <div className="flex items-center justify-between 2xl:px-28 px-20">
        <div className="2xl:max-w-[654px] max-w-[400px] font-syne capitalize">
          <p className="text-orangePrimary font-semibold ">
            Committed to clients, focused on results.
          </p>
          <h4 className=" font-bold font-syne">
            The right partner for Data Management and Investor relations.
          </h4>
        </div>
        <img src="/images/experience.png" alt="expereince" />
      </div>
      <div className="bg-bluePrimary flex items-center justify-center gap-10 2xl:gap-20 text-white mx-4 mt-20 2xl:mx-10 px-20 2xl:px-24 2xl:py-20 py-10">
        <div className="2xl:w-[821px] w-[700px]">
          <div className="border-b border-b-white pb-8">
            <h6 className="font-syne text-[32.9px] font-bold ">
              Financial Planning
            </h6>
            <p className="2xl:text-[22px] text-lg font-sora 2xl:leading-[40.7px] leading-[30.7px]">
              Financial planning is the process of taking a comprehensive look
              at your financial situation and building a specific financial plan
              to reach your goals. As a result, financial planning often delves
              into multiple areas of finance, including taxes, savings,
              insurance and more.
            </p>
          </div>
          <div className="flex pt-8 2xl:gap-8 gap-3 items-start">
            <img src="/icons/arrow-right.svg" alt="arrow-right" />
            <div className="flex flex-col gap-8 items-start">
              <h6 className="font-syne text-2xl font-bold ">
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

        <div className="relative flex items-center">
          <img
            src="/images/financial-planning.png"
            alt="planning"
            className="2xl:w-[709px] w-[600px] 2xl:h-[468px] h-[350px]"
          />
          <div className="absolute w-[275px] bg-white left-10 flex flex-col items-center rounded-lg py-8 px-4">
            <div className="border-orangePrimary border rounded-full w-20 h-20 flex justify-center items-center">
              <p className="font-syne text-[22px] font-bold text-black">23%</p>
            </div>
            <p className="font-sora text-[16px] text-grayPrimary2 text-center mt-8">
              Maximum drawdown is a measure of downside risk over a given time
              period; it is the maximum loss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialPlaning;
