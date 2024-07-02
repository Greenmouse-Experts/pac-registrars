import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideLength = 5; // Total number of slides
  const transitionTime = 4000; // Transition time in milliseconds
  let slideInterval: number;

  useEffect(() => {
    // Auto change slide at intervals
    // eslint-disable-next-line react-hooks/exhaustive-deps
    slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
    }, transitionTime);

    return () => clearInterval(slideInterval);
  }, []);

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide % slideLength) + 1);
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 1 ? slideLength : prevSlide - 1
  //   );
  // };

  //const backgroundImageUrl = `url(/images/hero-${currentSlide}.png)`;

  return (
    <div className="relative xl:pt-20">
      {currentSlide === 1 && (
        <section
          className={`hero-1 transition-opacity duration-500 bg-center bg-cover lg:h-[37rem] sm:h-[350px] h-[400px] 2xl:py-32 lg:py-20 lg:pt-24 sm:pt-16 pt-10 text-white relative `}
        >
          <div className="2xl:max-w-[50%] lg:max-w-[60%] w-full h-full flex flex-col justify-center animate__animated  animate__fadeIn animate__delay-3">
           
            <h4 className="2xl:text-[3.5rem] lg:text-[3rem] text-3xl  font-bold font-montserrat 2xl:leading-[70.2px] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
              Streamline Operations with Our Company Secretarial Services
            </h4>
            <NavLink to="/company-secretarial" className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold hover:bg-bluePrimary hover:text-white transition-all w-fit">
              Get started
            </NavLink>
          </div>
        </section>
      )}
      {currentSlide === 2 && (
        <section
          className={`hero-2 transition-opacity duration-500 bg-center bg-cover lg:h-[37rem] sm:h-[350px] h-[400px] 2xl:py-32 lg:py-20 lg:pt-24 sm:pt-16 pt-10 text-white relative `}
        >
          <div className="2xl:max-w-[46%] lg:max-w-[60%] w-full h-full flex flex-col justify-center animate__animated  animate__fadeIn animate__delay-3">
            
            <h4 className="2xl:text-[3.5rem] lg:text-[3rem] text-3xl  font-bold font-montserrat 2xl:leading-[70.2px] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
              Enhance Your Business with Our Registrar Services
            </h4>
            <NavLink to="/register-maintenance" className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold hover:bg-bluePrimary hover:text-white transition-all w-fit">
              Get started
            </NavLink>
          </div>
        </section>
      )}
      {currentSlide === 3 && (
        <section
          className={`hero-3 transition-opacity duration-500 bg-center bg-cover lg:h-[37rem] sm:h-[350px] h-[400px] 2xl:py-32 lg:py-20 lg:pt-24 sm:pt-16 pt-10 text-white relative `}
        >
          <div className="2xl:max-w-[46%] lg:max-w-[60%] w-full h-full flex flex-col justify-center animate__animated  animate__fadeIn animate__delay-3">
           
            <h4 className="2xl:text-[3.5rem] lg:text-[3rem] text-3xl  font-bold font-montserrat 2xl:leading-[70.2px] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
              Navigate Probate with Our Expert Guidance
            </h4>
            <NavLink to="/probate-services" className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold hover:bg-bluePrimary hover:text-white transition-all w-fit">
              Get started
            </NavLink>
          </div>
        </section>
      )}

      {currentSlide === 4 && (
        <section
          className={`hero-4 transition-opacity duration-500 bg-center bg-cover lg:h-[37rem] sm:h-[350px] h-[400px] 2xl:py-32 lg:py-20 lg:pt-24 sm:pt-16 pt-10 text-white relative `}
        >
          <div className="2xl:max-w-[55%] lg:max-w-[60%] w-full h-full flex flex-col justify-center animate__animated  animate__fadeIn animate__delay-3">
           
            <h4 className="2xl:text-[3.5rem] lg:text-[3rem] text-3xl  font-bold font-montserrat 2xl:leading-[70.2px] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
              Optimize Efficiency with Our Document Management Solutions
            </h4>
            <NavLink to="/document-management" className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold hover:bg-bluePrimary hover:text-white transition-all w-fit">
              Get started
            </NavLink>
          </div>
        </section>
      )}
      {currentSlide === 5 && (
        <section
          className={`hero-5 transition-opacity duration-500 bg-center bg-cover lg:h-[37rem] sm:h-[350px] h-[400px] 2xl:py-32 lg:py-20 lg:pt-24 sm:pt-16 pt-10 text-white relative `}
        >
          <div className="2xl:max-w-[46%] lg:max-w-[60%] w-full h-full flex flex-col justify-center animate__animated  animate__fadeIn animate__delay-3">
            
            <h4 className="2xl:text-[3.5rem] lg:text-[3rem] text-3xl  font-bold font-montserrat 2xl:leading-[70.2px] lg:leading-[60px] leading-[40px] capitalize text-white mt-5 sm:mt-0 ">
            Prevent Identity Theft With Our KYC Services
            </h4>
            <NavLink to="/kyc" className="bg-white text-bluePrimary mt-10 px-10 py-3 font-semibold hover:bg-bluePrimary hover:text-white transition-all w-fit">
              Get started
            </NavLink>
          </div>
        </section>
      )}
      <div className="fixed font-montserrat sm:flex hidden flex-col right-0 divide-y-2 divide-grayPrimary top-[40%] text-center z-40  bg-gray-200 font-semibold">
        <NavLink  to="/self-service" className="lg:text-base px-8 py-2 hover:bg-bluePrimary hover:text-white transition-all font-semibold">
          Self Care
        </NavLink>
        <NavLink to="/forms" className="lg:text-base px-8 py-2 hover:bg-bluePrimary hover:text-white transition-all font-semibold">
          Forms
        </NavLink>
        <NavLink to="/faqs" className="lg:text-base px-8 py-2 hover:bg-bluePrimary hover:text-white transition-all font-semibold">
          FAQs
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
