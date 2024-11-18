import Hero from "../../components/HomeComp/Hero";
// import FinancialPlaning from "../../components/HomeComp/FinancialPlaning";
import Hero2 from "../../components/HomeComp/Hero2";
import Services from "../../components/HomeComp/Services";
import Clients from "../../components/HomeComp/Clients";
import { useEffect, useState } from "react";
import ServiceModal from "../../components/modals/ServicesModal";
// import Faqs from "../../components/HomeComp/Faqs";
// import WebRegistry from "../../components/HomeComp/WebRegistry";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    handleOpenModal();
  }, [])
  return (
    <>
      <Hero />
      <Hero2 />
      <Services />
      {/* <WebRegistry/> */}
      {/* <FinancialPlaning /> */}
      <Clients />
      {/* <Faqs /> */}
      <ServiceModal isOpen={isModalOpen} handleClose={handleCloseModal} title="">
        <div className="lg:h-[40rem] h-[30rem]">
          <a href="https://offers.invearn.com/shareholder/rights" target="_blank"
            rel="noopener noreferrer">
            <img src="/images/pac_ads.jpeg" alt="" className=" object-cover object-center" />
          </a>
        </div>
      </ServiceModal>
    </>
  );
}

export default Home;
