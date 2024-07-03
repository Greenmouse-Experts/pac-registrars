import { useState } from "react";
import Banner from "../../components/Banner";
import SecretarialForm from "../../components/forms/SecretarialForm";
import ManagementForm from "../../components/forms/ManagementForm";
import ProbateForm from "../../components/forms/ProbateForm";
import { NavLink } from "react-router-dom";
import UpdateMyName from "../../components/forms/UpdateMyName";
import UpdateMySignature from "../../components/forms/UpdateMySignature";
import UpdateMyAddress from "../../components/forms/UpdateMyAddress";
import UpdateMyInformation from "../../components/forms/UpdateMyInformation";
import Dividend from "../../components/forms/Dividend";
import AccountConsolidation from "../../components/forms/AccountConsolidation";

function Forms() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Banner page="Forms" link="" img="/images/form-banner.png" />

      <section className="lg:py-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="w-full">
          <h4 className=" font-bold font-syne capitalize text-black mb-5">
            Pac Registrars and Investor Services Forms
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
                <p className={`font-sora  px-4`}>Probate Services</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 3
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(3)}
              >
                <p className={`font-sora  px-4`}>Registrar Service</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 4
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(4)}
              >
                <p className={`font-sora  px-4`}>Update My Name</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 5
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(5)}
              >
                <p className={`font-sora  px-4`}>Update My Signature </p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 6
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(6)}
              >
                <p className={`font-sora  px-4`}>Update My Address </p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 7
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(7)}
              >
                <p className={`font-sora  px-4`}>Shareholder Update</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div>
              {/* <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 8
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(8)}
              >
                <p className={`font-sora  px-4`}>Account Consolidation</p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div> */}
              {/* <div
                className={` relative py-6 rounded-md w-full border border-bluePrimary cursor-pointer ${
                  active === 9
                    ? "text-white bg-bluePrimary"
                    : "text-grayPrimary2 bg-white"
                } overflow-hidden`}
                onClick={() => setActive(9)}
              >
                <p className={`font-sora  px-4`}>
                E-Dividend Mandate Form
                </p>
                <div className="absolute bottom-0 bg-bluePrimary h-1 w-full" />
              </div> */}

              <NavLink
                to="/faqs"
                className="bg-bluePrimary text-white w-fit py-3 px-5"
              >
                Click to view FAQs
              </NavLink>
            </div>

            <div className="xl:w-[50%] lg:w-[60%] w-full">
              {active === 0 && <SecretarialForm />}
              {active === 1 && <ManagementForm />}
              {active === 2 && <ProbateForm />}
              {active === 3 && <ProbateForm />}
              {active === 4 && <UpdateMyName />}
              {active === 5 && <UpdateMySignature />}
              {active === 6 && <UpdateMyAddress />}
              {active === 7 && <UpdateMyInformation />}
              {active === 8 && <AccountConsolidation />}
              {active === 9 && <Dividend />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forms;
