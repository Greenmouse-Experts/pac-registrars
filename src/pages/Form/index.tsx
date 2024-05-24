import { useState } from "react";
import Banner from "../../components/Banner";
import SecretarialForm from "../../components/forms/SecretarialForm";
import ManagementForm from "../../components/forms/ManagementForm";
import ProbateForm from "../../components/forms/ProbateForm";
import { NavLink } from "react-router-dom";

function Forms() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Banner page="Forms" link="" img="/images/maintenance-banner.png" />

      <section className="lg:py-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div>
          <h4 className=" font-bold font-syne capitalize text-black mb-5">
            Pac Registry and Investor Services Forms
          </h4>
          <div className="flex lg:flex-row flex-col items-start justify-between gap-10">
            <div className="lg:w-[30%] w-full font-syne flex flex-col gap-8">
              <p className="text-bluePrimary font-medium ">
                What would you like to do?
              </p>

              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 0
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(0)}
              >
                <p className={`font-sora  px-4`}>Company Secretarial Service</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 1
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(1)}
              >
                <p className={`font-sora  px-4`}>Document Management System</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 2
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(2)}
              >
                <p className={`font-sora  px-4`}>Grant of Probate</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>

              <NavLink to="faqs" className="bg-bluePrimary text-white w-fit py-3 px-5">
Click to view FAQs
              </NavLink>
            </div>

            <div className="xl:w-[50%] lg:w-[60%] w-full">
            {active === 0 &&  <SecretarialForm />}
            {active === 1 && <ManagementForm />}
            {active === 2 && <ProbateForm />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forms;
