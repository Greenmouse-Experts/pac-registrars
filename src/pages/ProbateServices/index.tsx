import { useState } from "react";
import Banner from "../../components/Banner";
import ProbateFaq from "../../components/ProbateFaq";
import SmallCardWithIcon from "../../components/cards/SmallCardWithIcon";
import ProbateForm from "../../components/forms/ProbateForm";
import ServiceModal from "../../components/modals/ServicesModal"; // Import the modal

function ProbateServices() {
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
        page="Transmission Services"
        link=""
        img="/images/probate-banner.png"
      />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/probate-img.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            Transmission Services
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
            At PAC Registrars and Investor Services we understand that
            investments represent a lifetime of effort. Our Transmission Service
            ensures that the shares and entitlements of a deceased shareholder
            are transferred seamlessly and legally to their rightful heirs or
            legal representatives, in full compliance with the Securities and
            Exchange Commission (SEC). .
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div>
          <p className="text-bluePrimary font-medium ">
            Our offering is end-to-end and covers but not limited to the
            following:
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 mt-14">
          <SmallCardWithIcon
            img="/icons/prob1.svg"
            text="Verification and registration of Letters of Administration / Grant of Probate"
          />
          <SmallCardWithIcon
            img="/icons/prob2.svg"
            text="Transmission of shares from deceased's name to Estate Account or beneficiaries"
          />
          <SmallCardWithIcon
            img="/icons/prob3.svg"
            text="Consolidation and recovery of accrued unclaimed dividends"
          />
          <SmallCardWithIcon
            img="/icons/prob4.svg"
            text="Dematerialization of transmitted share certificates into CSCS"
          />
          <SmallCardWithIcon
            img="/icons/prob5.svg"
            text="Liaison with Probate Registry for confirmation"
          />
          <SmallCardWithIcon
            img="/icons/prob6.svg"
            text="Guidance on documentation and indemnity where evidence is incomplete"
          />
        </div>
      </section>
      <section className="py-16">
        <h4 className="font-bold font-syne capitalize text-black">
          Requirements for Transmission
        </h4>
        <p className="mt-3 font-sora text-grayPrimary2 max-w-3xl">
          To facilitate a smooth process, Administrators/Executors are required
          to provide:
        </p>
        <ul className="mt-8 space-y-4 font-sora text-grayPrimary2 list-disc pl-6 marker:text-bluePrimary">
          <li>
            Formal Request Letter from Administrators/Executors indicating
            names, addresses, signatures and BVNs
          </li>
          <li>
            Original Death Certificate from National Population Commission (NPC)
            - for sighting
          </li>
          <li>
            Original Probate or Letter of Administration - for sighting (or
            Certified True Copy by a Notary Public)
          </li>
          <li>Copy of Newspaper Advert / Gazette placed by the Court</li>
          <li>
            Evidence of shareholding - Original Share Certificates, CSCS
            Statement, Dividend Warrants/Stubs or Bank Statement showing
            dividend receipt
          </li>
          <li>Valid means of identification of Administrator(s)/Executor(s)</li>
          <li>
            Banker's Confirmation of Signature of Administrator(s)/Executor(s)
          </li>
          <li>Passport photographs of Administrators</li>
        </ul>
      </section>
      <section className="py-16">
        <h4 className="font-bold font-syne capitalize text-black">Timeline</h4>
        <p className="mt-3 font-sora text-grayPrimary2 max-w-3xl">
          Transmission will be concluded within 72 hours of receipt of all valid
          documents and confirmation from the probate registry.
        </p>
        <div className="mt-10 bg-bluePrimary text-white rounded-[20px] p-8 lg:p-10 font-sora">
          <p className="font-bold font-syne text-xl">
            Don't let your loved one's investments remain unclaimed.
          </p>
          <p className="mt-4 text-lg">Contact our Transmission Desk</p>
          <p className="mt-2">
            Telephone:{" "}
            <a href="tel:09168629450" className="hover:underline">
              09168629450
            </a>
          </p>
          <p className="mt-1">
            Email:{" "}
            <a href="mailto:info@pacregistrars.com" className="hover:underline">
              info@pacregistrars.com
            </a>
          </p>
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
        <div className="mt-10">{showFaq && <ProbateFaq />}</div>
      </section>

      <ServiceModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        title=""
      >
        <ProbateForm url="probate/service" />
      </ServiceModal>
    </>
  );
}

export default ProbateServices;
