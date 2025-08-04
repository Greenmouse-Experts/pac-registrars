import { useState, useEffect } from "react";
import Hero from "../../components/HomeComp/Hero";
// import FinancialPlaning from "../../components/HomeComp/FinancialPlaning";
import Hero2 from "../../components/HomeComp/Hero2";
import Services from "../../components/HomeComp/Services";
import Clients from "../../components/HomeComp/Clients";
// import ServiceModal from "../../components/modals/ServicesModal";
// import Faqs from "../../components/HomeComp/Faqs";
// import WebRegistry from "../../components/HomeComp/WebRegistry";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handlePopupClick = () => {
    window.open("https://marketplace.invearn.com", "_blank");
    setShowPopup(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Hero />
      <Hero2 />
      <Services />
      {/* <WebRegistry/> */}
      {/* <FinancialPlaning /> */}
      <Clients />
      {/* <Faqs /> */}
      {/* <ServiceModal isOpen={isModalOpen} handleClose={handleCloseModal} title="">
        <div className="lg:h-[40rem] h-[30rem]">
          <a href="https://offers.invearn.com/shareholder/rights" target="_blank"
            rel="noopener noreferrer">
            <img src="/images/pac_ads.jpeg" alt="" className=" object-cover object-center" />
          </a>
        </div>
      </ServiceModal> */}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md">
          <div className="relative rounded-lg shadow-lg">
            <button
              onClick={handleClosePopup}
              className="absolute -top-3 -right-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold z-10 focus:outline-none"
            >
              ×
            </button>
            <img
              src="./popup.jpeg"
              alt="Popup Advertisement"
              onClick={handlePopupClick}
              className="cursor-pointer rounded-lg max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
