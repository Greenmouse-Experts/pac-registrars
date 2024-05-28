import { NavLink } from "react-router-dom";


function FinancialPlaning() {
  return (
    <>
      <section className="bg-[url('/images/form-img.png')] flex  flex-col items-center justify-center text-white mx-0 lg:px-24 px-5 mt-14 2xl:py-20 py-10">
        <div className="2xl:w-[80%] lg:w-[40%] w-full text-center ">
          <p className="font-semibold text-3xl">
            Committed to clients, focused on results.
          </p>
          <h4 className="font-bold mt-3">
            The right partner for Data Management and Investor relations.
          </h4>
        </div>
          <div className="mt-8">
            <NavLink to="/forms" className={` flex gap-1 items-center 2xl:py-3 2xl:px-10 py-[5px] whitespace-nowrap hover:-translate-y-1 hover:shadow-md transition-all font-semibold px-4 text-base 'w-fit bg-white text-bluePrimary`}>View Forms</NavLink>
          </div>
      </section>
    </>
  );
}

export default FinancialPlaning;
