
import Banner from "../../components/Banner";
import { NavLink } from "react-router-dom";

function SelfService() {
  return (
    <>
      <Banner page="Self Service" link="" img="/images/self-banner.png" />
      <section className=" md:py-20 md:pb-32 py-10 bg-white  ">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-32 gap-16">
          <div className=" bg-white flex flex-col items-center justify-center gap-4 px-10  py-4 rounded-lg card-shadow relative">
            <div className=" bg-bluePrimary p w-fit rounded-full ">
              <img src="/icons/self-1.svg" alt="" className="scale-75" />
            </div>
            <p>Digital-Change-of Address-Form</p>
            <NavLink
              to="/forms"
              className="bg-bluePrimary text-white px-4 py-3 text-base mt-4"
            >
              Download Form{" "}
            </NavLink>
          </div>
          <div className=" bg-white flex flex-col items-center justify-center gap-4 px-10  py-4 rounded-lg card-shadow relative">
            <div className=" bg-bluePrimary p w-fit rounded-full ">
              <img src="/icons/self-2.svg" alt="" className="scale-75" />
            </div>
            <p>Digital-Dividend-Activation-Form</p>
            <NavLink
              to="/forms"
              className="bg-bluePrimary text-white px-4 py-3 text-base mt-4"
            >
              Download Form{" "}
            </NavLink>
          </div>
          <div className=" bg-white flex flex-col items-center justify-center gap-4 px-10  py-4 rounded-lg card-shadow relative">
            <div className=" bg-bluePrimary p w-fit rounded-full ">
              <img src="/icons/self-3.svg" alt="" className="scale-75" />
            </div>
            <p>Digital Update Form</p>
            <NavLink
              to="/forms"
              className="bg-bluePrimary text-white px-4 py-3 text-base mt-4"
            >
              Download Form{" "}
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelfService;
