import { useState } from "react";
import Banner from "../../components/Banner";
import ProbateFaq from "../../components/ProbateFaq";
import SmallCardWithIcon from "../../components/cards/SmallCardWithIcon";
import ProbateForm from "../../components/forms/ProbateForm";
import ServiceModal from '../../components/modals/ServicesModal'; // Import the modal

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
        page="Probate/ Transmission"
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
            Probate/ Transmission
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora text-grayPrimary2">
            PAC Registrars and Investor Services Probate Services helps take
            away the burden being faced by the beneficiaries of a deceased
            person. We are passionate about what we do which is why the heart of
            our business is to make bereaved families happy again.
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
            text="Procuring Grant of Probate/ Letters of Administration"
          />
          <SmallCardWithIcon
            img="/icons/prob2.svg"
            text="Death certificate processing"
          />
          <SmallCardWithIcon
            img="/icons/prob3.svg"
            text="Endorsement of Bank Certificate"
          />
          <SmallCardWithIcon
            img="/icons/prob4.svg"
            text="Amendments of Letters of Administration"
          />
          <SmallCardWithIcon
            img="/icons/prob5.svg"
            text="Obtaining certificate of additional assets"
          />
          <SmallCardWithIcon
            img="/icons/prob6.svg"
            text="Effects new mandate of the administrators"
          />
          <SmallCardWithIcon
            img="/icons/prob7.svg"
            text="Confirmation of Grant of Probate and Letters of Administration"
          />
          <SmallCardWithIcon
            img="/icons/prob8.svg"
            text="Will Filing and confirmation."
          />
          <SmallCardWithIcon img="/icons/prob9.svg" text="Receiving" />
          <SmallCardWithIcon img="/icons/prob10.svg" text="Annuity" />
          <SmallCardWithIcon
            img="/icons/prob11.svg"
            text="Gathering of Assets"
          />
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

      <ServiceModal isOpen={isModalOpen} handleClose={handleCloseModal} title="">
        <ProbateForm url="probate/service" />
      </ServiceModal>
    </>
  );
}

export default ProbateServices;
