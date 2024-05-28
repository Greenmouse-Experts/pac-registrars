import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner";
import List from "../../components/List";

function ProptyPlus() {
  return (
    <>
      <Banner page="Proptyplus" link="" img="/images/prop-banner.png" />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/protoplus-1.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            ProptyPlus
          </h4>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            ProptyPlus Real Estate solution is a platform that consist of 2
            distinct modules; B2C and B2B Module.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora  text-grayPrimary2">
            The B2C module provides property hunters with the ultimate search
            experience, connecting them with rental/estate agents or house
            owners.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            The B2B module provide facility managers the platform to manage
            tenants and properties without leaving their offices.
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div className="mb-5">
          <h4 className=" font-bold font-syne capitalize text-black">
            Service Offerings (B2C):
          </h4>
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-20 gap-10">
          <div className="lg:w-[65%] w-full">
            <List
              items={[
                "Ultimate search experience",
                "Notification of newly uploaded property of your choice",
                "Saves time and money",
                "Properties are from reliable source",
                "Agent profiling",
                "Safe and secure",
                "Rental loan financing",
              ]}
            />
            <div className="mt-3">
              <NavLink
                className="md:text-lg text-base "
                to="https://proptyplus.com/registration"
              >
                To sign up and start enjoying the offers, go to
                https://proptyplus.com/registration
              </NavLink>
            </div>
          </div>
          <img
            src="/images/proptoplus-2.png"
            alt=""
            className="lg:w-[35%] w-full"
          />
        </div>
      </section>

      <section className="lg:pt-24 pt-16">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-20 gap-10 justify-between">
          <img
            src="/images/proptoplus-3.png"
            alt=""
            className="lg:w-[35%] w-full"
          />
          <div className="lg:w-[45%] w-full flex justify-end flex-col ml-auto">
            <h4 className=" font-bold font-syne capitalize text-black mb-5">
              Service Offerings (B2B):
            </h4>
            <List
              items={[
                "Combines customer contact with the required forms needed",
                "Management of clients & contacts in real time",
                "Effective payment system management",
                "Scheduling and tracking of payments and rental due",

                "Transparency and accountability (service charge)",
                "It saves time and money",
                "Two way communication between tenants and facility manager",
                "Schedule maintenance and reminder for various equipment",

                "Report generation",
                "Unlimited onboarding of properties",
                "Unlimited onboarding of tenants",
                "Real time notification to parties involved",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="lg:py-20 py-16  text-[#111111] bg-[#F9F9F9] mb-32 mt-20 lg:mx-10">
        <p className="lg:text-2xl lg:leading-10 font-semibold">
          Do you want your properties and agents to be onboarded on the B2B
          platform, send an email
          to hello@proptyplus.com or info@pacregistrars.com Our staff will
          contact you for the necessary assistance.
        </p>
      </section>
    </>
  );
}

export default ProptyPlus;
