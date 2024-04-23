import Banner from "../../components/Banner";
import List from "../../components/List";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DmsModal from "../../components/modals/DmsModal";
import CssModal from "../../components/modals/CssModal";

function Products() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      <Banner page="Products" link="" />
      <section className="md:py-32 pt-10 pb-0 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-orangePrimary font-medium">
            Products
          </p>
          <h4 className=" font-bold font-syne capitalize mb-10">
            Our Products
          </h4>
          <div className="flex md:flex-row flex-col-reverse md:items-start items-center justify-between">
            <div className="md:w-[55%] w-full font-syne md:mt-0 mt-5 ">
              <h4 className=" font-bold font-syne capitalize">
                Register Maintenance Services
              </h4>
              <div>
                <List
                  items={[
                    "Government Bond Management",
                    "Corporate Bond/Debentures Stock Management",
                    "Corporate Equity Data Management",
                  ]}
                />
              </div>
            </div>
            <div className="md:w-[40%] w-full">
              <img
                src="/images/register-services.jpg"
                alt=""
                className="w-full md:h-[400px] h-[200px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-10 pt-10 pb-0 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <div className="flex md:flex-row flex-col items-start justify-between">
            <div className="md:w-[40%] w-full">
              <img
                src="/images/real-estate-solution.jpg"
                alt=""
                className="w-full  md:h-[400px] h-[200px] object-cover object-center"
              />
            </div>
            <div className="md:w-[55%] w-full font-syne md:mt-0 mt-5 ">
              <h4 className=" font-bold font-syne capitalize">
                Real Estate Solution (ProptyPlus)
              </h4>
              <p className=" 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora">
                ProptyPlus Real Estate solution is a platform that consist of 2
                distinct modules, B2C and B2B Module.
              </p>
              <p className=" mt-1 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora">
                The B2C module provides property hunters with the ultimate
                search experience, connecting them with rental/estate agents or
                house owners.
              </p>
              <p className=" mt-1 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora">
                The B2C module provides property hunters with the ultimate
                search experience, connecting them with rental/estate agents or
                house owners.
              </p>
              <div className="mt-5">
                <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                  Service Offerings (B2C):
                </h6>
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
                <p className=" mt-1 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora">
                  To sign up and start enjoying the offers, go to{" "}
                  <span className=" text-orangePrimary">
                    <NavLink to="https://proptyplus.com/registration">
                      https://proptyplus.com/registration
                    </NavLink>
                  </span>
                </p>
              </div>
              <div className="mt-5">
                <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                  Service Offerings (B2B):
                </h6>
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
                    "Real time notification to parties involved   ",
                  ]}
                />
                <p className=" mt-1 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora">
                  Do you want your properties and agents to be onboarded on the
                  B2B platform, send an email to{" "}
                  <span className=" text-orangePrimary">
                    <NavLink to="mailto:hello@proptyplus.com">
                      hello@proptyplus.com
                    </NavLink>
                  </span>{" "}
                  or{" "}
                  <span className=" text-orangePrimary">
                    <NavLink to="mailto:info@pacregistrars.com">
                      info@pacregistrars.com
                    </NavLink>
                  </span>{" "}
                  Our staff will contact you for the necessary assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-10 pt-10 pb-0 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <div className="flex md:flex-row flex-col-reverse items-start justify-between">
            <div className="md:w-[55%] w-full font-syne md:mt-0 mt-5 ">
              <h4 className=" font-bold font-syne capitalize">
                Document Management System (DMS)
              </h4>
              <p className=" 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-base font-sora">
                Our Document Management System (DMS) specializes in providing
                cost effective, secure and user-friendly solutions for
                simplifying the document needs of our clients.
              </p>
              <p className=" mt-1 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-base font-sora">
                PAC Registrars & Investor Services Document Management System
                helps to store and organize digital documents in a secure and
                easily accessible way. With our DMS, we help you take away the
                risk of theft or fire by helping you manage your important
                documents electronically rather than physically. Our Service
                covers:
              </p>

              <div className="mt-5">
                <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                  Service Offerings (B2C):
                </h6>
                <List
                  items={[
                    "Digital Archiving",
                    "Physical Archiving",
                    "Data Capturing",
                    "Scanning",
                    "Shredding",
                    "Document Management & Tracking – This include; Document Input, Document Indexing, Document Search, Document Processing, Workflow Automation, Document Security, User Dashboard & Customization.",
                  ]}
                />

                <p className=" 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora mb-10">
                  Are you in need of our Document Management System or you are
                  considering referring us to a client, please{" "}
                  <span
                    className=" text-orangePrimary cursor-pointer"
                    onClick={() => setOpen((open) => !open)}
                  >
                    click here
                  </span>{" "}
                  to provide your details. Be sure that our staff will reach out
                  to you.
                </p>
              </div>
            </div>
            <div className="md:w-[40%] w-full">
              <img
                src="/images/dms.jpg"
                alt=""
                className="w-full md:h-[400px] h-[200px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-10 pt-10 pb-0 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <div className="flex md:flex-row flex-col items-start justify-between">
            <div className="md:w-[40%] w-full">
              <img
                src="/images/css.png"
                alt=""
                className="w-full md:h-[400px] h-[200px] object-cover object-center"
              />
            </div>
            <div className="md:w-[55%] w-full font-syne">
              <h4 className=" font-bold font-syne capitalize">
                Company Secretarial Service
              </h4>
              <p className=" 2xl:mt-5 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora">
                We offer company secretarial services within the various sectors
                of the Nigerian economy whether you are a start-up or an
                established corporate entity. Our services cover the financial
                services, real estate and property, power and energy, mining,
                oil and gas, health, engineering services, telecommunication,
                manufacturing, hospitality, confectionery, food and beverage,
                capital markets, information technology, etc. This service
                encompasses a range of administrative, legal, and compliance
                duties necessary for maintaining a company’s legal and
                regulatory obligations. Some of the services include the
                following:
              </p>

              <div className="mt-5">
                <h4 className=" font-bold font-syne capitalize">
                  Service Offerings
                </h4>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">Board Support</h6>
                  <List
                    items={[
                      "Organizing and facilitating board and committee meetings, preparing agendas and minutes, and ensuring compliance with statutory requirements for meetings.",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Corporate Governance
                  </h6>
                  <List
                    items={[
                      "Advising on and ensuring compliance with corporate governance principles, including board structure, director responsibilities, and shareholder rights.",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Statutory Compliance
                  </h6>
                  <List
                    items={[
                      "Ensuring compliance with relevant company laws and regulations, such as filing annual returns, maintaining statutory registers, and updating company records. ",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Regulatory Compliance
                  </h6>
                  <List
                    items={[
                      "Monitoring changes in legislation and regulations affecting the company and ensuring timely compliance with new requirements.",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Document Management
                  </h6>
                  <List
                    items={[
                      "Maintaining corporate records, including minutes, resolutions, and legal documents, and ensuring they are stored securely and accessible when needed.",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Corporate Secretariat Software Solutions
                  </h6>
                  <List
                    items={[
                      "Providing software solutions for streamlining and automating company secretarial tasks, such as managing corporate records and compliance calendars. ",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">Advisory Services</h6>
                  <List
                    items={[
                      "Providing advice and guidance to the board and senior management on corporate governance best practices, regulatory changes, and compliance issues.",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Incorporation Services
                  </h6>
                  <List
                    items={[
                      "Assisting with the formation of a new company, including drafting the necessary documents, filing incorporation papers with the relevant authorities, and obtaining necessary licenses and permits.",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Shareholder Services
                  </h6>
                  <List
                    items={[
                      "Managing communication with shareholders, organizing shareholder meetings, and handling share transactions such as transfers and issuances.",
                    ]}
                  />
                </div>
                <div className="mt-2">
                  <h6 className="md:text-2xl text-lg mb-2 font-semibold ">
                    Corporate Restructuring
                  </h6>
                  <List
                    items={[
                      "Assisting with corporate transactions such as mergers, acquisitions, and reorganizations, including drafting documentation and ensuring regulatory compliance.",
                    ]}
                  />
                </div>

                <p className=" 2xl:mt-5 mt-3 2xl:leading-[33px] leading-[25px] md:text-xl text-basefont-sora mb-10">
                  Are you in need of our expertise in the company secretarial
                  service or do you have a firm you want to refer to us? Please
                  drop your details by{" "}
                  <span
                    className=" text-orangePrimary cursor-pointer"
                    onClick={() => setOpen2((open) => !open)}
                  >
                    click here
                  </span>{" "}
                  Our staff will contact you for the next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="my-10 md:mx-10 mx-0 md:py-10 pt-10 pb-0 bg-bluePrimary text-white">
        <h4 className=" font-bold font-syne text-start capitalize">
          Registrar to Offer Services
        </h4>
        <div className="h-[3px] bg-white my-5 w-full" />
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[40%] w-full relative"></div>
          <div className="md:w-[55%] w-full font-syne">
            <ul className="flex flex-col">
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                Government Bond Management
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                Corporate Bond/Debentures Stock Management
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                Corporate Equity Data Management
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:py-10 pt-10 pb-0 bg-[#f4f4f4] flex items-center justify-between ">
        <div className="font-syne w-full">
          <p className="text-orangePrimary text-[12px] font-medium ">
            Products
          </p>
          <h4 className=" font-bold font-syne capitalize mb-10">
            Our Products
          </h4>
          <div className="flex md:flex-row flex-col md:items-start items-center justify-between">
            <div className="md:w-[40%] w-full relative">
              <img
                src="/images/product-2.jpg"
                alt=""
                className="w-full md:h-[400px] h-[200px] object-cover object-center"
              />
            </div>
            <div className="md:w-[55%] w-full font-syne">
              <h4 className=" font-bold font-syne capitalize">
                Security Data Consultancy Services
              </h4>
              <ul className="flex flex-col">
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>
                  Government Bond Management
                </li>
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>{" "}
                  Corporate Bond/Debentures Stock Management
                </li>
                <li className="flex items-start gap-1">
                  <span>
                    <BsDot color="black" size={30} />
                  </span>{" "}
                  Corporate Equity Data Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 md:mx-10 mx-0 md:py-10 pt-10 pb-0 bg-bluePrimary text-white">
        <h4 className=" font-bold font-syne text-start capitalize">
          Web Registry
        </h4>
        <div className="h-[3px] bg-white my-5 w-full" />
        <div className="flex md:flex-row flex-col items-start justify-between">
          <div className="md:w-[20%] w-full relative"></div>
          <div className="md:w-[30%] w-full font-syne">
            <ul className="flex flex-col">
              <p className="text-lg mb-2">Investors Portal</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                E-Change Of Basic Details
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                E-View & Print Of Account Statements
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                E-Dividend/Bonus/Verification Confirmation
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                AGM & EGM Notification
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                Bank Mandates
              </li>
              <p className="text-lg my-2">Others</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                E-Voting
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                E-IPO and Allotment
              </li>
            </ul>
          </div>
          <div className="md:w-[30%] w-full font-syne">
            <ul className="flex flex-col">
              <p className="text-lg mb-2">Client Portal</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                View Own Security Information
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                View & Print Own Register
              </li>

              <p className="text-lg my-2">Stockbrokers Portal</p>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>
                E-Stock Delivery
              </li>
              <li className="flex items-start gap-1">
                <span>
                  <BsDot color="white" size={30} />
                </span>{" "}
                View & Print Customers Statement
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      <DmsModal open={open} handleClose={handleClose} />
      <CssModal open={open2} handleClose={handleClose2} />
    </>
  );
}

export default Products;
