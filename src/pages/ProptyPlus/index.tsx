import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner";
import List from "../../components/List";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ReactPlayer from "react-player";
import { DemoModal } from "../../components/modals/DemoModal";
import { useState } from "react";
import ProptyplusFaq from "../../components/ProptyplusFaq";

function ProptyPlus() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [showFaq, setShowFaq] = useState(false);
  return (
    <>
      <Banner page="ProptyPlus" link="" img="/images/prop-banner.png" />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
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
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/prop-3.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
      </section>

      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <a href="https://panafricancapitalholdings-my.sharepoint.com/personal/ayomide_oluwole_ziltchone_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fayomide%5Foluwole%5Fziltchone%5Fcom%2FDocuments%2FAttachments%2FWeb%20Navigation%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E009856c5%2D845e%2D423e%2Dbfc7%2Dee3f7dfe0036&ga=1">
            <ReactPlayer
              url="https://youtu.be"
              controls={true}
              width="100%"
              height="370px"
              className="lg:h-44 h-20"
            />
          </a>
          <div className="mt-5">
            <Button type="submit" onClick={handleOpen}>
              Request a Demo
            </Button>
          </div>
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <form className="flex flex-col 2xl:gap-8 gap-5 w-full bg-white p-10 form-shadow text-[#787878]">
            <h5 className="font-montserrat text-[1.4rem] font-semibold   text-black">
              Want More
            </h5>
            <p className=" font-medium ">
            To get more information on the ProptyPlus application, please drop your details below.
            </p>
            <div className=" flex lg:flex-row flex-col justify-between gap-8 ">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
            </div>
            <div className=" justify-between gap-8 w-full ">
              <Input type="tel" placeholder="Phone Number" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
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
          <img src="/images/prop-2.png" alt="" className="lg:w-[35%] w-full" />
        </div>
      </section>

      <section className="lg:pt-24 pt-16">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:gap-20 gap-10 justify-between">
          <img src="/images/prop-1.png" alt="" className="lg:w-[35%] w-full" />
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

      <section className="lg:py-24 py-16">
        <p
          className="bg-bluePrimary text-white w-fit py-3 px-5 cursor-pointer"
          onClick={() => setShowFaq((prev) => !prev)}
        >
          Click to view FAQs
        </p>

        <div className="mt-20">{showFaq && <ProptyplusFaq />}</div>
      </section>

      <section className="lg:py-20 py-16  text-[#111111] bg-[#F9F9F9] mb-32 mt-0 lg:mx-10">
        <p className="lg:text-2xl lg:leading-10 font-semibold">
          Do you want your properties and agents to be onboarded on the B2B
          platform, send an email to hello@proptyplus.com or
          info@pacregistrars.com Our staff will contact you for the necessary
          assistance.
        </p>
      </section>
      <DemoModal handleOpen={handleOpen} open={open} />
    </>
  );
}

export default ProptyPlus;
