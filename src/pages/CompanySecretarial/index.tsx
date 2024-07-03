import { useState } from "react";
import Banner from "../../components/Banner";
import SecreterialFaq from "../../components/SecreterialFaq";
import SmallCardWithIcon2 from "../../components/cards/SmallCardWithIcon2";
import SecretarialForm from "../../components/forms/SecretarialForm";
import ServiceModal from '../../components/modals/ServicesModal'; // Import the modal

function CompanySecretarial() {
  const [showFaq, setShowFaq] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Banner
        page="Company Secretarial Service"
        link=""
        img="/images/secretarial-banner.png"
      />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/secretarial-img.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            Company Secretarial Service
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
            We offer company secretarial services within the various sectors of
            the Nigerian economy whether you are a start-up or an established
            corporate entity.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            Our services cover the financial services, real estate and property,
            power and energy, mining, oil and gas, health, engineering services,
            telecommunication, manufacturing, hospitality, confectionery, food
            and beverage, capital markets, information technology, etc.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora text-grayPrimary2">
            This service encompasses a range of administrative, legal, and
            compliance duties necessary for maintaining a company’s legal and
            regulatory obligations.
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
          <p className="text-bluePrimary font-medium ">
            Some of the services include the following:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCardWithIcon2 img="/icons/comp1.svg">
            <p className="font-semibold mb-3">Board Support</p>
            <p className="">
              Organizing and facilitating board and committee meetings,
              preparing agendas and minutes, and ensuring compliance with
              statutory requirements for meetings.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp2.svg">
            <p className="font-semibold mb-3">Corporate Governance</p>
            <p className="">
              Advising on and ensuring compliance with corporate governance
              principles, including board structure, director responsibilities,
              and shareholder rights.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp3.svg">
            <p className="font-semibold mb-3">Statutory Compliance</p>
            <p className="">
              Ensuring compliance with relevant company laws and regulations,
              such as filing annual returns, maintaining statutory registers,
              and updating company records.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp4.svg">
            <p className="font-semibold mb-3">Regulatory Compliance</p>
            <p className="">
              Monitoring changes in legislation and regulations affecting the
              company and ensuring timely compliance with new requirements.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp5.svg">
            <p className="font-semibold mb-3">Document Management</p>
            <p className="">
              Maintaining corporate records, including minutes, resolutions, and
              legal documents, and ensuring they are stored securely and
              accessible when needed.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp6.svg">
            <p className="font-semibold mb-3 text-center">
              Corporate Secretariat Software Solutions
            </p>
            <p className="">
              Providing software solutions for streamlining and automating
              company secretarial tasks, such as managing corporate records and
              compliance calendars.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp7.svg">
            <p className="font-semibold mb-3">Advisory Services</p>
            <p className="">
              Providing advice and guidance to the board and senior management
              on corporate governance best practices, regulatory changes, and
              compliance issues.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp8.svg">
            <p className="font-semibold mb-3">Shareholder Services</p>
            <p className="">
              Managing communication with shareholders, organizing shareholder
              meetings, and handling share transactions such as transfers and
              issuances.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp9.svg">
            <p className="font-semibold mb-3">Incorporation Services</p>
            <p className="">
              Assisting with the formation of a new company, including drafting
              the necessary documents, filing incorporation papers with the
              relevant authorities, and obtaining necessary licenses and
              permits.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/comp10.svg">
            <p className="font-semibold mb-3">Corporate Restructuring</p>
            <p className="hyphens-none">
              Assisting with corporate transactions such as mergers,
              acquisitions, and reorganizations, including drafting
              documentation and ensuring regulatory compliance.
            </p>
          </SmallCardWithIcon2>
        </div>
      </section>
      <section className=" py-16  ">
        <div className="flex gap-20">

          <p
            className="bg-bluePrimary text-white w-fit py-2 h-12 px-5 cursor-pointer"
            onClick={() => setShowFaq((prev) => !prev)}
          >
            Click to view FAQs
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-bluePrimary text-white w-fit h-12 py-3 px-5 cursor-pointer text-xl"
          >
            Request this service
          </button>
        </div>
        <div className="mt-10">{showFaq && <SecreterialFaq />}</div>
      </section>

      <ServiceModal isOpen={isModalOpen} handleClose={handleCloseModal} title="">
        <SecretarialForm />
      </ServiceModal>
    </>
  );
}

export default CompanySecretarial;
